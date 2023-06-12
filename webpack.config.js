const path = require('path');

// module.exports = {
//     entry: "./src/client/index.js",
//     // {

//     // main: [
//     //     "@babel/polyfill",
//     //     path.resolve(__dirname, "./src/client/index.js"),
//     // ],
//     // },
//     // devServer: {
//     //     contentBase: "./dist",
//     //     hot: true,
//     //     port: 8080,
//     //     host: "localhost",
//     //     inline: true,
//     //     historyApiFallback: true
//     // },
//     mode: 'development',
//     output: {
//         filename: 'bundle.js',
//         path: path.resolve(__dirname, 'dist'),
//     },
//     module: {
//         rules: [
//             {
//                 test: /\.js$/,
//                 exclude: /node_modules/,
//                 use: {
//                     loader: 'babel-loader',
//                     options: {
//                         presets: ['@babel/preset-react', '@babel/preset-env'],
//                     },
//                 },
//             },
//         ],
//     },
// };


module.exports = {
    entry: {
        main: [
            "@babel/polyfill",
            path.resolve(__dirname, "./src/client/index.js"),
        ],
    },
    //   plugins: [
    //     // new webpack.DefinePlugin({
    //     // 	"process.env": {
    //     // 		...envFilter,
    //     // 	},
    //     // }),
    //     new Dotenv(),
    //     new LoadablePlugin(),
    //     new CopyPlugin({
    //       patterns: [{ from: "public", to: "" }],
    //     }),
    //     new MiniCssExtractPlugin({
    //       filename: "[name].[contenthash].css",
    //       chunkFilename: "[id].[contenthash].css",
    //     }),
    //     // new BundleAnalyzerPlugin(),
    //   ],
    mode: "development",
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ["babel-loader"],
            },
            {
                test: /\.(?:ico|gif|png|jpg|jpeg|svg)$/i,
                type: "asset/resource",
            },
            {
                test: /\.html/,
                type: "asset/resource",
                generator: {
                    assets: "/dist/_react/assets/[name][ext][query]",
                },
            },
            {
                test: /\.(woff(2)?|eot|ttf|otf)$/,
                type: "asset/inline",
            },
            // {
            //     test: /\.css$/i,
            //     use: [MiniCssExtractPlugin.loader, "css-loader"],
            // },
        ],
    },
    devtool: "inline-source-map",
    devServer: {
        static: {
            directory: path.resolve(__dirname, "./dist"),
        },
        historyApiFallback: true,
        open: true,
        hot: true,
        port: 3000,
    },
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "[name].js",
        // chunkFilename: "[name].[contenthash].chunk.js",
        // clean: true,
        // assetModuleFilename: "assets/[name][ext][query]",
        publicPath: `http://localhost:3000/`
    },
}
