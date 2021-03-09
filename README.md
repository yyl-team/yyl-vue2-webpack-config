# yyl-vue2-webpack-config

## 安装

```typescript
yarn add yyl-vue2-webpack-config
```

### 使用

```typescript
// webpack.config.js
import yylVue2WebpackConfig from 'yyl-vue2-webpack-config'
import { merge } from 'webpack-merge'

module.exports = (env) => {
  ...merge({
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
}
```

### 文档

直接看 types 吧

```typescript
import { Configuration } from 'webpack'
import { YylBaseInitConfigOption } from 'yyl-base-webpack-config'
export declare type WConfigVue2Result = Required<
  Pick<Configuration, 'module' | 'resolve' | 'plugins'>
>
declare function yylVue2WebpackConfig(op: YylBaseInitConfigOption): Configuration
export default yylVue2WebpackConfig
```
