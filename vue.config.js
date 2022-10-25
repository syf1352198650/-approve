const path = require('path');
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
//   configureWebpack: config => {

//     Object.assign(config, {
//       resolve: {
//         extensions: ['.d.ts','.js','.ts', '.vue', '.json'],
        
//       }
//     })
// },
  // transpileDependencies: true,
  devServer: {
    proxy: {
      '/api': {

       
        target: 'http://localhost:3000/',  
        changeOrigin: true,
       
        pathRewrite: {
          '^/api': '/'
        },
      },
    },
  },
 
})
