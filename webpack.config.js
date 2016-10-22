// webpack.config.js
//获取包
var webpack = require('webpack');
var Path = require('path'); // path是node原生提供的
var ExtractTextPlugin = require('extract-text-webpack-plugin');

//exports 一個物件
module.exports = {
    // entry 是webpack的入口
    entry: {
        clickCounter: ["./app/js/clickCounterBoot.jsx"],
        timer: ["./app/js/timerBoot.jsx"],
        quadratic: ["./app/js/quadraticBoot.jsx"],
        comment: ["./app/js/commentBoot.jsx"]
        //左边可以自己命名，会影响下面的output的输出
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: [/node_modules/],
                loaders: ['react-hot', 'babel-loader'] //loaders数组

            },
            { test: /\.sass$/, loader: ExtractTextPlugin.extract("css!sass?indentedSyntax") },
            //sass-loader加上indentedSyntax才能写sass的语法，必须
            { test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader","css-loader") },
        ]
    },
    plugins: [
        //模块热替换(HMR)交换, 添加, 或者删除模块, 同时应用持续运行, 不需要 页面刷新.
        new webpack.HotModuleReplacementPlugin(),
        ////允许错误不打断程序
        //new webpack.NoErrorsPlugin(),
        //压缩打包的文件，包括JS以外的文件
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new ExtractTextPlugin('./assets/css/[name].css')
    ],
    output: {
        path: Path.resolve(__dirname, './build'),
        filename: '[name].js'
        // [name]会对应到上面entry的key
    },
    devtool: '#sourcemap',
    devServer: {
        contentBase: Path.resolve(__dirname, "./build/"),
        filename: '[name].js',
        publicPath: '/',
        hot: true, //需搭配HotModuleReplacementPluging使用
        inline: true,
        quiet: true,
        noInfo: true,
        lazy: false,
        stats: {colors: true}
    }
};