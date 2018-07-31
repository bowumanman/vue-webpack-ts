require('./check-versions')()

process.env.NODE_ENV = 'test'

//var ora = require('ora')
var rm = require('rimraf')
var path = require('path')
var chalk = require('chalk')
var webpack = require('webpack')
var config = require('../config')
var webpackConfig = require('./webpack.test.conf')

//var spinner = ora('building for test...')
//spinner.start()

//如果修改了压缩配置 这里需要清除一下.otherFolder目录;
/*const cacheArr = [".otherFolder", ".happypack", ".cache"]
for (let item of cacheArr) {
    rm(path.join(path.resolve(__dirname, '../'), item), err => {
        if (err) throw err
        console.log(chalk.yellow(`  Clear cache file ${item}.\n`))
    })
}
*/
rm(path.join(config.test.assetsRoot, config.test.assetsSubDirectory), err => {
    if (err) throw err
    webpack(webpackConfig, function (err, stats) {
        //spinner.stop()
        if (err) throw err
        process.stdout.write(stats.toString({
            colors: true,
            modules: false,
            children: false,
            chunks: false,
            chunkModules: false
        }) + '\n\n')

        console.log(chalk.cyan('  Build complete.\n'))
        console.log(chalk.yellow(
            '  Tip: built files are meant to be served over an HTTP server.\n' +
            '  Opening index.html over file:// won\'t work.\n'
        ))
    })
})
