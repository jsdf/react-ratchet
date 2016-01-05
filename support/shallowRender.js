var TestUtils = require('react-addons-test-utils');

function shallowRender(element) {
  var renderer = TestUtils.createRenderer()
  renderer.render(element)
  return renderer.getRenderOutput()
}


module.exports = shallowRender
