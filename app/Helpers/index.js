'use strict'

const Helpers = use('Helpers')
const Mix = use('Webpack/Mix')

const mix = (path) => {
  const publicPath = Mix.publicPath
  const manifestPath = Helpers.publicPath('dist/rev-manifest.json')
  const manifest = require(manifestPath)

  return `${publicPath}/${manifest[path]}`
}

const loadHelpers = () => {
  const View = use('View')
  View.global('mix', mix)
}

module.exports = loadHelpers