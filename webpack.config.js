const path = require("path");

const HTMLWebpackPlugin = require("html-webpack-plugin");

const {CleanWebpackPlugin} =require("clean-webpack-plugin");
const { Extension } = require("typescript");

// webparkすべての配置コードはmodule.exports中に書きます
module.exports={
    mode: 'development', 
    
    // ここからスタートを指定
    entry:"./src/index.ts",

    // damaomuluを指定する
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:"bundle.js"
    },

    module:{
        rules:[
            {
                test:/\.ts$/,
                use:"ts-loader",
                exclude:/node-modules/,
            },
            {
                test:/\.less$/,
                use:[
                    "style-loader",
                    "css-loader",
                    "less-loader"
                ]
            }
        ]
        
    },
    plugins:[
        new HTMLWebpackPlugin({
            template:"./src/index.html"
        }), 
        new CleanWebpackPlugin(),
    ],
    
    resolve: {
        extensions: ['.ts', '.js']
    }
};