const path = require('path')

// module.exports = {
//   webpack: (config, options) => {

//     config.resolve.modules.push(path.resolve('./'))

//     config.module.rules.push({
//       test: /\.mdx?$/,
//       use: [
//         'babel-loader',
//         '@mdx-js/loader',
//         path.join(__dirname, './lib/fm-loader')
//       ]
//     })

//     return config
//   },
// }

module.exports = {
  webpack: function (config) {
    config.resolve.modules.push(path.resolve('./'))

    config.module.rules.push({
      test: /(\.md)$/,
      use: [
        'raw-loader',
      ]
    })

    // config.module.rules.push({
    //   test: /\.css$/,
    //   use: ['style-loader', 'css-loader'],
    // })

    return config
  }
}
