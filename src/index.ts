import { Configuration, WebpackPluginInstance, ProvidePlugin } from 'webpack'
import { merge } from 'webpack-merge'
import { initYylBaseConfig, InitYylBaseConfigOption } from 'yyl-base-webpack-config'
import { VueLoaderPlugin } from 'vue-loader'

export type WConfigVue2Result = Required<Pick<Configuration, 'module' | 'resolve' | 'plugins'>>
function yylVue2WebpackConfig(op: InitYylBaseConfigOption): Configuration {
  const wConfig: WConfigVue2Result = {
    module: {
      rules: [
        {
          test: /\.vue$/,
          use: [require.resolve('vue-loader')]
        }
      ]
    },
    resolve: {
      alias: {
        vue$: 'vue/dist/vue.esm.js',
        vue: 'vue/dist/vue.esm.js'
      },
      extensions: ['.vue'],
      plugins: []
    },
    plugins: [
      new VueLoaderPlugin() as WebpackPluginInstance,
      new ProvidePlugin({
        Vue: ['vue/dist/vue.esm.js', 'default']
      })
    ]
  }
  const baseConfig = initYylBaseConfig(op)
  return merge(baseConfig, wConfig as Configuration)
}

export default yylVue2WebpackConfig
module.exports = yylVue2WebpackConfig
