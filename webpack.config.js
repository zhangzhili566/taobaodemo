const { loader } = require('mini-css-extract-plugin');
const path = require('path');
const HtmlWebpackPlugin = new require('html-webpack-plugin');
const MiniCssExtractPlugin = new require('mini-css-extract-plugin');

module.exports = {
    entry:'./src/js/index.js',
    output:{
        filename:'js/[name].js',
        path:path.resolve(__dirname,'./dist')
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                exclude:path.resolve(__dirname,'node_modules'),
                use:{
                    loader:'babel-loader'
                }
            },
            {
                test:/\.css$/,
                use:[
                    //创建style标签，将样式从js文件中放入style标签
                    // 'style-loader',

                    //这个loader取代style-loader，作用：提取js中的css成单独文件
                    MiniCssExtractPlugin.loader,

                    //将css文件整合到js文件中
                    'css-loader'
                ]
            },
            {
                test:/\.(eot|svg|ttf|woff|woff2)$/,
                use:[
                    {
                        loader:'file-loader',
                        options:{
                            name:'[path][name].[ext]',
                            output:path.resolve(__dirname,'./font')
                        }
                    }
                    

                ]
            },
            {
                test:/\.(png|jpg|gif)$/,
                use:[
                    {
                        loader:'file-loader',
                        options:{
                            name:'[path][name].[ext]',
                        }
                    }
                ]
            },
            // {
            //     test:/\.html$/,
            //     loader:'html-loader'
            // },
            // {
            //     test:/\.(png|jpg|gif)$/,
            //     use:[
            //         {
            //             loader:'url-loader',
            //             options:{
            //                 limit:1024,
            //                 output:path.resolve(__dirname,'./image'),
            //                 name:'[name].[ext]'
            //             }
                        
            //         }
            //     ]
            // }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin ({
            filename:'index.html',
            template:'./src/index.html',
            exclude:['node_modules'],
        }),
        new MiniCssExtractPlugin(),
    ],
    mode:'development',
    devServer:{
        open:true,
        host:'localhost',
        port:8080
    }
}










