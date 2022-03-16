const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const isProduction = process.env.NODE_ENV == 'production';
const stylesHandler = 'style-loader';
const options = {};
const loaders = []
const sourceMap = !isProduction;
const isDev = !isProduction;
const config = {
    entry: './src/index.js',
    output: {
        hashFunction: "xxhash64",
        path: path.resolve(__dirname, 'dist'),
        clean: true
    },
    devServer: {
        static: './dist',
        open: true
    },
    // optimization: {
    //     splitChunks: {
    //         cacheGroups: {
    //             styles: {
    //                 name: "styles",
    //                 type: "css/mini-extract",
    //                 chunks: "all",
    //                 enforce: true,
    //             },
    //         },
    //     },
    // },
    module: {
        rules: [{
                test: /\.(js|jsx)$/i,
                loader: 'babel-loader',
            },
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            importLoaders: 1,
                            modules: true,
                        },
                    },
                ],
                include: /\.module\.css$/,
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
                exclude: /\.module\.css$/,
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
                type: 'asset',
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
        })
    ]
};

module.exports = () => {
    if (isProduction) {
        config.mode = 'production';
    } else {
        config.mode = 'development';
        config.devtool = 'inline-source-map'
    }
    return config;
};