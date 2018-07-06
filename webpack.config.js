const HtmlWebpackPlugin = require('html-webpack-plugin');

const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
    template : `${__dirname}/build/index.html`,
    filename : 'index.html',
    inject   : 'body',
});

module.exports = {
    entry: ['babel-polyfill', './src/index.js'],
    output: {
        path: `${__dirname}/build`,
        filename: 'javascript/bundle.js',
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react', 'stage-2'],
                },
            },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            },
            {
                test: /\.(png|jp(e*)g|svg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 10000,
                            name       : '[sha512:hash:base64:10].[ext]',
                            outputPath : 'images/'
                        }
                    },
                ]
            }
        ],
    },
    devServer: {
        inline: true,
        port: 3000,
        historyApiFallback: true
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    plugins: [HTMLWebpackPluginConfig],
    node: {
        dgram: 'empty',
        fs: 'empty',
        net: 'empty',
        tls: 'empty',
        child_process: 'empty',
    }
};