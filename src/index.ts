import { WebpackOptionsNormalized } from 'webpack'
import { merge } from 'webpack-merge'
import yylBaseInitConfig, { YylBaseInitConfigOption } from 'yyl-base-webpack-config'
function yylVue2WebpackConfig(op: YylBaseInitConfigOption): WebpackOptionsNormalized {
  return merge(yylBaseInitConfig(op), {} as WebpackOptionsNormalized)
}
