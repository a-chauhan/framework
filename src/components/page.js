'use strict'

const rendered = require('./rendered')
const middlewares = require('../middlewares')

module.exports = function page (config) {
  config = config || {}

  return rendered(config)
    .use(middlewares.meta(config))
    .use(middlewares.params(config.params || {}))
}
