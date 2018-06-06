const chalk = require('chalk')
const webpack = require('webpack')
const merge = require('webpack-merge')
const Crx = require("crx-webpack-plugin")
const generatePem = require('./generate-pem')
const prodConf = require('./webpack.prod.conf')
const crxConf = require('./crx-conf')

generatePem(crxConf.keyPath).then(info => {
  console.log(chalk.green(info))
  const conf = merge(prodConf, {
    plugins: [
      new Crx({
        keyFile: crxConf.keyPath,
        contentPath: crxConf.contentPath,
        outputPath: crxConf.outputPath,
        name: crxConf.name
      })
    ]
  })
  webpack(conf, (err, stats) => {
    if (err) throw err
    process.stdout.write(stats.toString({
      colors: true,
      modules: false,
      children: false, // If you are using ts-loader, setting this to true will make TypeScript errors show up during build.
      chunks: false,
      chunkModules: false
    }) + '\n\n')

    if (stats.hasErrors()) {
      console.log(chalk.red('  Build failed with errors.\n'))
      process.exit(1)
    }

    console.log(chalk.cyan('  Build complete.\n'))
  })
}).catch(err => {
  console.log(chalk.red(err))
})
