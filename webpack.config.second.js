const path = require('path');
const HTMLWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
    mode:"production",
    entry: "./src/second.js",
    output: {
        path: path.resolve(__dirname, "build_second"),
        filename: "main.js"
    },
    resolve: {
        extensions: [".js", ".jsx"],
    },
    stats: {
        warnings:false
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
            },
            {
                test: /\.(png|jpe?g|gif|svg|webp)$/i,
                use: [
                  {
                    loader: 'file-loader',
                  },
                ],
            },
            {
                test: /\.svg$/,
                loader: "svg-inline-loader"
            }
        ]
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: "./public/second.html",
            inject:true,
            filename:"second.html"
        }),
        new MiniCssExtractPlugin({
            filename: "assets/[name].css"
        }),
        new CssMinimizerPlugin()
    ],
    optimization:{
        minimize: true,
        minimizer: [new TerserPlugin(), new CssMinimizerPlugin()]
    },
    devServer:{
        static: {
            directory: path.join(__dirname, "build"),
        },
        open:true,
        compress: true,
        port: 3000,
        client:{
            overlay:{
                errors: true,
                warnings: false
            }
        }
    }
}