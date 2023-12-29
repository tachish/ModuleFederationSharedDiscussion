const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    experiments: {
        topLevelAwait: true
    },
    
    output: {
        clean: true,
        publicPath: 'http://localhost:3001/' 
    },
    devServer: {
        port: '3001'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html'
        }),
        new VueLoaderPlugin(),
        new ModuleFederationPlugin({
            name: 'remote_app',
            filename: 'remote_index.js',
            exposes: {
                './TopBar': './src/comp/Topbar.vue',
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