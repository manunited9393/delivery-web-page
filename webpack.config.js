const path = require('path');

const dist = './dist';

// const dist = 'D:/apps/web/OSPanel/domains/delivery';

module.exports = {
    entry: {
        main: path.resolve(__dirname, './src/js/script.js'),
    },
    output: {
        path: path.resolve(__dirname, dist + '/js'),
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