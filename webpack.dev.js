const merge         = require('webpack-merge');
const path          = require('path');
const commonConfig  = require('./webpack.common')

// console.log(process.env.NODE_ENV);

module.exports = merge(commonConfig,()=>{
    return {
        devServer: {
            contentBase: path.join(__dirname, "dist"),
            hot:true    
        },
    }
})

