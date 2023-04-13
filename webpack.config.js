const path = require('path');
const HTMLWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode:"production",
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "main.js"
    },
    resolve: {
        extensions: [".js", ".jsx"],
    },
    module: {
        rules:[
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                }
            },
            {
                test: /\.html$/,
                use:{
                    loader: "html-loader"
                }
            },
            {
                test: /\.(css|scss)$/,
                use:[
                    MiniCssExtractPlugin.loader,
                    {
                        loader:"css-loader"
                    },
                    {
                        loader:"sass-loader"
                    }
                ]
            }
        ]
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: "./public/index.html",
            inject:true,
            filename:"index.html"
        }),
        new MiniCssExtractPlugin({
            filename: "assets/[name].css"
        })
    ]
}