module.exports = {
  proseWrap: 'always',
  singleQuote: true,
  trailingComma: 'all',
  semi: false,
  overrides: [
    {
      files: 'packages/@Imagin/angular/**',
      options: {
        semi: true,
      },
    },
  ],
}
