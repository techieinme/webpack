const HtmlWebpackPlugin     = require('html-webpack-plugin');
const MiniCssExtractPlugin  = require('mini-css-extract-plugin');
const CopyWebpackPlugin     = require('copy-webpack-plugin');
const CleanWebpackPlugin    = require('webpack-clean-plugin');
const path                  = require('path');

const development = process.env.NODE_ENV ==='development';
const production = process.env.NODE_ENV ==='production';

//const 

module.exports  = {
    output: {
        chunkFilename: '[name].bundle.js',
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module:{
        rules:[
                {
                    test :/\.js$/,
                    exclude: /(node_modules|bower_components)/,
                    use:[
                            {
                                loader:'babel-loader'
                            }    
                    ]
                },
            {
                test: /\.(png|jpeg|jpg|gif|svg)$/,
                exclude: /(node_modules|bower_components)/,
                use: [
                    {
                        loader: 'file-loader'
                    }
                ]
            },
                {
                    test: /\.html$/,
                    use: [
                        {
                            loader: 'html-loader',
                            options: { minimize: true }
                        }
                    ]
                },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin(
                    {
                        template: "./src/index.html",
                        filename: "./index.html"
                    }
            ),
        new MiniCssExtractPlugin (
            {
                filename:"[name].css",
                chunkFilename:"[id].css"
            }
        ),
        // new CopyWebpackPlugin([
        //     { from: './src/assets/img', to: 'img' }
        // ]),
    ],
    

}