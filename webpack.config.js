const HtmlWebpackPlugin = require('html-webpack-plugin');
const miniCss = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
    entry: './index.js',
    mode: 'development',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'index_bundle.js',
        publicPath: '/'
    },
    target: 'web',
    devServer: {
        port: '3001',
        static: {
            directory: path.join(__dirname, 'public')
        },
        open: true,
        hot: true,
        liveReload: true,
        historyApiFallback: true
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json']
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.svg$/,
                use: ['@svgr/webpack', 'url-loader']
            },
            {
                test: /\.(s*)css$/,
                use: [miniCss.loader, 'css-loader', 'sass-loader']
            }
        ]
    },
    plugins: [
        new miniCss({
            filename: 'style.css'
        }),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'public', 'index.html')
        })
    ]
};
