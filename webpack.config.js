var path = require('path');
var webpack = require('webpack');

var publicPath = '/js/';
if (process.env.NODE_ENV === 'production') {
    publicPath = '.' + publicPath;
}

module.exports = {
    entry: './src/main.ts',
    output: {
        path: path.resolve(__dirname, './htdocs/js'),
        publicPath: publicPath,
        filename: 'main.js'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        'scss': 'vue-style-loader!css-loader?-url!sass-loader'
                    }
                    // other vue-loader options go here
                }
            },
            {
                test: /\.scss$/,
                loaders:["vue-style-loader", "css-loader?-url", "sass-loader"]
            },
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
                options: {
                    appendTsSuffixTo: [/\.vue$/],
                }
            },
            // {
            //     test: /\.js$/,
            //     loader: 'babel-loader',
            //     exclude: /node_modules/
            // },
            // {
            //     test: /\.(png|jpg|gif|svg)$/,
            //     loader: 'file-loader',
            //     options: {
            //         name: function (file) {
            //             if (process.env.NODE_ENV === 'development') {
            //                 return '[path][name].[ext]?[hash]'
            //             }
            //             return '[path][name].[ext]'
            //         },
            //         outputPath: '../',
            //         publicPath: 'abcde/def/'
            //     }
            // }
        ]
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        },
        extensions: ['.ts', '.js', '.vue', '.json']
    },
    devServer: {
        contentBase: "./htdocs/",
        openPage: "index.html",
        historyApiFallback: true,
        noInfo: true,
        overlay: true
    },
    performance: {
        hints: false
    },
    devtool: '#eval-source-map'
}

if (process.env.NODE_ENV === 'production') {
    module.exports.devtool = '#source-map'
    // http://vue-loader.vuejs.org/en/workflow/production.html
    module.exports.plugins = (module.exports.plugins || []).concat([
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: false,
            compress: {
                warnings: false
            }
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true
        })
    ])
}
