# vtemp-chrome-extension

一个用于快速搭建 `chrome` 插件开发环境的 `vue-cli` 模板。

基于 [webpack-simple](https://github.com/vuejs-templates/webpack-simple) 模板。

开发模式下支持**实时刷新**，支持 `crx` 打包。

## 使用

``` bash
npm install -g vue-cli

vue init kinglisky/vtemp-chrome-extension my-project

cd my-project

npm install

npm run dev
```

## 参考

参考项目：https://github.com/YuraDev/vue-chrome-extension-template

自动刷新实现：https://github.com/YuraDev/wcer



附注：`wcer` webpack 同步刷新的  plugin 还是很好用，不过原来 vue-chrome-extension-template 的 chrome 插件模板有很大的问题，考虑浏览器插件的开发场景直接使用 webpack-simple 的模板改了一版，提供了一个最基本的 vue chrome 插件开发模板。

----------------------------------------------------------------------

A `vue-cli` template for quick creation of Chrome extension.

Based on [webpack-simple](https://github.com/vuejs-templates/webpack-simple) template. 

Auto real-time refresh support in development mode. Supports `crx` package.


## USE

``` bash
npm install -g vue-cli

vue init kinglisky/vtemp-chrome-extension my-project

cd my-project

npm install

npm run dev
```


## REFERENCE

Reference project：https://github.com/YuraDev/vue-chrome-extension-template

Auto reloading implementation: https://github.com/YuraDev/wcer
