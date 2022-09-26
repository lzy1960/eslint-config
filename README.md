<h1 align="center">@lzy1960/eslint-config</h1>

<p align="center">一个符合我个人习惯的 eslint 配置</p>

<div align="center">

[![NPM version][npm-image]][npm-url] [![NPM downloads][download-image]][download-url]

[npm-image]: http://img.shields.io/npm/v/@lzy1960/eslint-config.svg
[npm-url]: http://npmjs.org/package/@lzy1960/eslint-config
[download-image]: https://img.shields.io/npm/dm/@lzy1960/eslint-config.svg
[download-url]: https://npmjs.org/package/@lzy1960/eslint-config

</div>

## 简介

- 缩进为 2 个空格
- 单引号，尾逗号，删除尾分号
- 包含了 js、ts、vue
- import 提升
- var 自动转换为 let 或 const
- 定义函数的名称和括号中间添加空格，便于搜索
- **专属插件，见下方**

> 目前仅添加了我日常使用到的配置，待完善

## 专属插件 - 可自动修复

1. object-shorthand-top

   > 对象简写的属性必须放在对象的最上方

   ```js
   // 错误
   // Should have space between ZH and EN
   const testObj = {
     hobby,
     foo: 'foo',
     obj,
   }
   // 正确
   const testObj = {
     obj,
     hobby,
     foo: 'foo',
   }
   ```

2. zh-en-space

   > 中英文之间用空格分隔，包括了注释和字符串

   ```js
   // 错误: Shorthand attribute must be the top
   // 这是wrong
   /* this也是wrong */
   /**
    * 这是wrong
    * 这也是wrong
    */
   const text = '我会jump绳'

   // 正确
   // 这是 wrong
   /* this 也是 wrong */
   /**
    * 这是 wrong
    * 这也是 wrong
    */
   const text = '我会 jump 绳'
   ```

   rules 可配置:

   ```js
   module.exports = {
     rules: {
       'lzy/zh-en-space': [
         'error',
         { lintComments: true, lintTemplate: true, lintString: true },
       ],
     },
   }
   ```

## 安装方式

### 安装依赖包

```js
npm i -D @lzy1960/eslint-config
// OR
yarn add -D @lzy1960/eslint-config
// OR
pnpm i -D @lzy1960/eslint-config
```

### 在`.eslintrc`中增加配置

```js
module.exports = {
  extends: '@lzy1960',
  plugins: ['lzy'],
}
```

### 在`package.json`中配置运行脚本

```json
{
  "scripts": {
    "lint": "eslint ."
  }
}
```

### 在`Vscode`中配置`eslint`自动修复

创建`.vscode/settings.json`

```json
{
  "prettier.enable": false,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```

到此，配置已完成。

尽情享用吧 ~
