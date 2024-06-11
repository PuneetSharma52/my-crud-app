'use strict'

const Helpers = use('Helpers')
const Mix = use('Webpack/Mix')
const helpers = require('./app/Helpers/app')
View.global('mix', helpers.mix)

const mix = (path) => {
  const publicPath = Mix.publicPath
  const manifestPath = Helpers.publicPath('dist/rev-manifest.json')
  const manifest = require(manifestPath)

  return `${publicPath}/${manifest[path]}`
}

module.exports = { mix }