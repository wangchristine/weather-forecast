var webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: './src/index.js',

    output: {
        filename: 'index.bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins:[
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        },{
            d3: 'd3'
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    }
};