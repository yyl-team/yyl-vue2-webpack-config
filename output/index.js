/*!
 * yyl-vue2-webpack-config cjs 0.1.0
 * (c) 2020 - 2021 
 * Released under the MIT License.
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var webpack = require('webpack');
var webpackMerge = require('webpack-merge');
var yylBaseInitConfig = require('yyl-base-webpack-config');
var vueLoader = require('vue-loader');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var yylBaseInitConfig__default = /*#__PURE__*/_interopDefaultLegacy(yylBaseInitConfig);

function yylVue2WebpackConfig(op) {
    const wConfig = {
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
            new vueLoader.VueLoaderPlugin(),
            new webpack.ProvidePlugin({
                Vue: ['vue/dist/vue.esm.js', 'default']
            })
        ]
    };
    const baseConfig = yylBaseInitConfig__default['default'](op);
    return webpackMerge.merge(baseConfig, wConfig);
}
module.exports = yylVue2WebpackConfig;

exports.default = yylVue2WebpackConfig;
