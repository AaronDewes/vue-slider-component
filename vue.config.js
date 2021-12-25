const container = require('markdown-it-container')
const anchor = require('markdown-it-anchor')
const uslug = require('uslug')

const createContainer = (name, defaultTitle = '') => {
  return [
    container,
    name,
    {
      render(tokens, idx) {
        const token = tokens[idx]
        const info = token.info.trim().slice(name.length).trim()
        if (token.nesting === 1) {
          return `<div class="${name} custom-block"><p class="custom-block-title">${
            info || defaultTitle
          }</p>\n`
        } else {
          return `</div>\n`
        }
      },
    },
  ]
}

module.exports = {
  parallel: false,
  publicPath:
    process.env.NODE_ENV === 'production' && process.env.VUE_APP_BUILD_MODE !== 'package'
      ? '/vue-slider-component/'
      : '/',
  outputDir: process.env.VUE_APP_BUILD_MODE === 'package' ? 'dist' : 'docs',
  chainWebpack: (config) => {
    if (process.env.VUE_APP_BUILD_MODE !== 'package') {
    } else {
      config.output.libraryExport('default')
      config.externals({
        vue: {
          commonjs: 'vue',
          commonjs2: 'vue',
          root: 'Vue',
          amd: 'vue',
        },
      })
    }
  },
  css: { extract: !!process.env.NO_EXTRACT_CSS },
}
