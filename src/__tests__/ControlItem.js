jest.dontMock('../ControlItem')
var ControlItem = require('../ControlItem')
var React = require('react')
var ReactDOM = require('react-dom')
var TestUtils = require('react-addons-test-utils')
var hasClass = require('amp-has-class')

describe('ControlItem', () => {
  it('should apply the Ratchet CSS classes', () => {
    var ctrl = TestUtils.renderIntoDocument(
      <ControlItem />
    )
    expect(hasClass(ReactDOM.findDOMNode(ctrl), 'control-item')).toBe(true)
  })

  it('should apply additional classes', () => {
    var ctrl = TestUtils.renderIntoDocument(
      <ControlItem className='test' />
    )
    expect(hasClass(ReactDOM.findDOMNode(ctrl), 'control-item test')).toBe(true)
  })

  it('should set active', () => {
    var ctrl = TestUtils.renderIntoDocument(
      <ControlItem active />
    )
    expect(hasClass(ReactDOM.findDOMNode(ctrl), 'control-item active')).toBe(true)
  })

  it('should pass children through', () => {
    var ctrl = TestUtils.renderIntoDocument(
      <ControlItem>Test</ControlItem>
    )
    expect(ReactDOM.findDOMNode(ctrl).innerHTML).toBe('Test')
  })
})
