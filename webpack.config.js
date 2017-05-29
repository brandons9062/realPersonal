var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: [
        './src/index.js'
//        './src/sass/styles.scss'
    ],
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015']
                }
            }
//            {
//                test: /\.(sass|scss)$/,
//                loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
//            }
        ]
    },
//    plugins: [
//        new ExtractTextPlugin({
//            filename: '/dist/sass.bundle.css',
//            allChunks: true
//        })
//    ],
    resolve: {
        extensions: ['.js', '.jsx']
    },
    devServer: {
        historyApiFallback: true,
        contentBase: './dist'
    }
}