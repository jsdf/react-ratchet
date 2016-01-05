var React = require('react');
var shallowRender = require('./shallowRender')

function rendersValidElement(element) {
  return React.isValidElement(shallowRender(element))
}

module.exports = rendersValidElement
