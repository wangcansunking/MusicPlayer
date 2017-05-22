const path = require('path');

module.exports = {
    entry: {
        index: path.resolve(__dirname, './src/index')
    },
    output: {
        path: path.resolve(__dirname, './public/js'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"}
        ]
    }
}
