var webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
    entry: './index.js',
    output: {
        filename: 'bundle.js',
        path: __dirname + '/dist'
    },
    devServer: {
        inline: true,
        port: 4444
    },
    watch: true,
plugins: [
        new ExtractTextPlugin("style.css"),
    ],
    module: {
        rules: [{
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader'
                ]
            },
            {
                test: /\.less$|\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [{
                            loader: 'css-loader',
                            query: {
                                modules: false,
                                query: {
                                    sourceMaps: true
                                }
                            }
                        },
                        {
                            loader: 'less-loader',
                            query: {
                                sourceMaps: true
                            }
                        }
                    ]
                })
            }
        ]
    }
};
