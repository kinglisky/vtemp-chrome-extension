const fs = require('fs')
const rsa = require('node-rsa')
const chalk = require('chalk')
const { resolve } = require('./util')
const pemPath = resolve('key.pem')

function generatePemFile (pemPath) {
  console.log(chalk.blue('generate pem file...'))
  const value = new rsa({ b: 2048 }).exportKey('pkcs1-private-pem')
  try {
    fs.writeFileSync(pemPath, value)
    console.log(chalk.green('generate pem success!'))
  } catch (e) {
    console.log(chalk.red('generate pem erro!', e))
  }
}

function Plugin (path) {
  this.path = path || pemPath
}

Plugin.prototype.apply = function (compiler) {
  const self = this
  return compiler.plugin('emit', function () {
    self.generatePemFile.call(self)
  });
}

Plugin.prototype.generatePemFile = function () {
  const path = this.path
  if (!fs.existsSync(path)) {
    generatePemFile(path)
  }
}

module.exports = Plugin
