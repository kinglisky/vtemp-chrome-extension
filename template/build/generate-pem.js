const fs = require('fs')
const rsa = require('node-rsa')
const chalk = require('chalk')

function generatePemFile (path) {
  return new Promise((resolve, reject) => {
    if (fs.existsSync(path)) {
      return resolve('  The pem file already generated')
    }
    console.log(chalk.blue('  Generate pem file...'))
    const value = new rsa({ b: 2048 }).exportKey('pkcs1-private-pem')
    fs.writeFile(path, value, e => {
      if (e) {
        return reject('  Generate pem error!')
      }
      resolve(`  Generate pem [${path}] success!`)
    })
  })
}

module.exports = generatePemFile
