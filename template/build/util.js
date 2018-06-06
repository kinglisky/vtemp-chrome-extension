const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const PAGE_OPTIONS = {
  title: '',
  hash: true,
  cache: true,
  inject: 'body',
  filename: 'pages/temp.html',
  template: path.resolve(__dirname, './page.ejs'),
  appMountId: 'app',
  chunks: [],
}

exports.resolve = dir => path.join(__dirname, '..', dir || '')

exports.page = options => {
  const {
    title,
    name,
    chunks,
    template
  } = options
  return new HtmlWebpackPlugin(Object.assign({}, PAGE_OPTIONS, {
    title,
    chunks,
    template: template || PAGE_OPTIONS.template,
    filename: `pages/${name}.html`
  }))
}

exports.assetsPath = p => path.posix.join('assets', p)
