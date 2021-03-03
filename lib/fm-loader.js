// // lib/fm-loader.js
// const matter = require('gray-matter')
// const stringifyObject = require('stringify-object')
// module.exports = async function (src) {
//   const callback = this.async()
//   const {content, data} = matter(src)

//   // console.log('Content: ', content)
//   // console.log('Data: ', data)

//   const code = `export const frontMatter = ${stringifyObject(data)}
// ${content}`
//   return callback(null, code)
// }

module.exports = {}
