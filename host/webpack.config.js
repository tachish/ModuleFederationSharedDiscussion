const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        clean: true
    },
    devServer: {
        port: 3000
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html'
        }),
        new VueLoaderPlugin(),
        new ModuleFederationPlugin({
            remotes: {
                'remote-app': 'remote_app@http://localhost:3001/remote_index.js',
            },
            shared: {
                vue: {
                    singleton: true,
                },
                lodash: {
                    singleton: true,
                }
            }
        })
    ],
    optimization: {
        splitChunks:{
            chunks: 'all',

            cacheGroups: {
                lodash: {
                    test: /[\\/]node_modules[\\/]lodash[\\/]/,
                    name: 'lodash',
                    filename: 'scripts/[name]-chunk.js'
                },
                vue: {
                    test: /[\\/]node_modules[\\/]vue[\\/]/,
                    name: 'vue',
                    filename: 'scripts/[name]-chunk.js'
                },
            },
        }
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader'
                ]
            }

        ]
    },
    
}