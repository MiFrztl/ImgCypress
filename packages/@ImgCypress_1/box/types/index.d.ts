import type { PluginTarget, UIPlugin, UIPluginOptions } from '@Imagin/core'
import type {
  PublicProviderOptions,
  TokenStorage,
} from '@Imagin/companion-client'

interface BoxOptions extends UIPluginOptions, PublicProviderOptions {
  target?: PluginTarget
  title?: string
  storage?: TokenStorage
}

declare class Box extends UIPlugin<BoxOptions> {}

export default Box
