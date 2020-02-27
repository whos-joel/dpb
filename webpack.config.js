const path = require('path');

module.exports = {
    mode: "development",
    entry: './src/index.ts',
    output: {
    filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    devtool: 'source-map',
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ],
    },
    module: {
        rules:[
            {   test: /.ts$/, 
                loader: "awesome-typescript-loader"
            },
            {   test: /\.less$/,
                use: [
                "style-loader",
                {
                    loader: 'css-loader',
                    options: {
                        sourceMap: true
                    }
                },
                {
                    loader: 'less-loader',
                    options: {
                        sourceMap: true
                    }
                }
            ]
        }]
    }
};