const path = require('path')
const merge = require('webpack-merge').default
const initVue2Config = require('../../../')

module.exports = (env) => {
  return merge(
    initVue2Config({
      context: __dirname,
      env,
      alias: {
        '@': path.join(__dirname, './src'),
        '~@': path.join(__dirname, './src/components/')
      },
      yylConfig: {
        commit: {
          hostname: '//web.yystatic.com',
          mainHost: 'http://www.yy.com'
        }
      }
    })
  )
}
