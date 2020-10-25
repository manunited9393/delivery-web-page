const path = require('path')

module.exports = {
    entry: {
        main: path.resolve(__dirname, './src/js/script.js'),
    },
    output: {
        path: path.resolve(__dirname, './dist/js'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            // JavaScript
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
        ],
    }
};