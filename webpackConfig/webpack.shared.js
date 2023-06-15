const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: 'development',
    plugins: [new MiniCssExtractPlugin()],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules\/(?!@babel\/core)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react', '@babel/preset-env'],
                    },
                },
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    'css-loader'
                ],
            },
            {
                test: /express\/lib\//,
                loader: 'ignore-loader',
            },
        ],
    },
    resolve: {
        alias: {
            express: 'express',
        },
        extensions: ['.js']
    },

    // externals: {
    //     path: 'var path', // Assuming you want to use the "path" module as an external dependency
    // },
}