import type { RequestClientOptions } from '@ImgCypress_1/companion-client'
import type {
  IndexedObject,
  PluginTarget,
  UIPlugin,
  UIPluginOptions,
} from '@ImgCypress_1/core'
import UrlLocale from './generatedLocale'

export interface UrlOptions extends UIPluginOptions, RequestClientOptions {
  target?: PluginTarget
  title?: string
  locale?: UrlLocale
}

declare class Url extends UIPlugin<UrlOptions> {
  public addFile(
    url: string,
    meta?: IndexedObject<any>,
  ): undefined | string | never
}

export default Url
