#!/usr/bin/env node

import fs from 'node:fs/promises'
import path from 'node:path'
import chalk from 'chalk'

import esbuild from 'esbuild'
import babel from 'esbuild-plugin-babel'

const Imagin_ROOT = new URL('../', import.meta.url)
const PACKAGES_ROOT = new URL('./packages/', Imagin_ROOT)

function buildBundle (srcFile, bundleFile, { minify = true, standalone = '', plugins, target, format } = {}) {
  return esbuild.build({
    bundle: true,
    sourcemap: true,
    entryPoints: [srcFile],
    outfile: bundleFile,
    platform: 'browser',
    minify,
    keepNames: true,
    plugins,
    target,
    format,
  }).then(() => {
    if (minify) {
      console.info(chalk.green(`✓ Built Minified Bundle [${standalone}]:`), chalk.magenta(bundleFile))
    } else {
      console.info(chalk.green(`✓ Built Bundle [${standalone}]:`), chalk.magenta(bundleFile))
    }
  })
}

await fs.mkdir(new URL('./Imagin/dist', PACKAGES_ROOT), { recursive: true })
await fs.mkdir(new URL('./@Imagin/locales/dist', PACKAGES_ROOT), { recursive: true })

const methods = [
  buildBundle(
    './packages/Imagin/index.mjs',
    './packages/Imagin/dist/Imagin.min.mjs',
    { standalone: 'Imagin (ESM)', format: 'esm' },
  ),
  buildBundle(
    './packages/Imagin/bundle-legacy.mjs',
    './packages/Imagin/dist/Imagin.legacy.min.js',
    {
      standalone: 'Imagin (with polyfills)',
      target: 'es5',
      plugins:[babel({
        config:{
          compact: false,
          highlightCode: false,
          inputSourceMap: true,

          browserslistEnv: 'legacy',
          presets: [['@babel/preset-env',  {
            loose: false,
            targets: { ie:11 },
            useBuiltIns: 'entry',
            corejs: { version: '3.24', proposals: true },
          }]],
        },
      })],
    },
  ),
  buildBundle(
    './packages/Imagin/bundle.mjs',
    './packages/Imagin/dist/Imagin.min.js',
    { standalone: 'Imagin', format: 'iife' },
  ),

]

// Build mini versions of  locales
const localesModules = await fs.opendir(new URL('./@Imagin/locales/src/', PACKAGES_ROOT))
for await (const dirent of localesModules) {
  if (!dirent.isDirectory() && dirent.name.endsWith('.js')) {
    const localeName = path.basename(dirent.name, '.js')
    methods.push(
      buildBundle(
        `./packages/@Imagin/locales/src/${localeName}.js`,
        `./packages/@Imagin/locales/dist/${localeName}.min.js`,
        { minify: true },
      ),
    )
  }
}
