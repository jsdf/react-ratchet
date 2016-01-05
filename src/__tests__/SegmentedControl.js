jest.dontMock('../SegmentedControl')
var SegmentedControl = require('../SegmentedControl')
var React = require('react')
var ReactDOM = require('react-dom')
var TestUtils = require('react-addons-test-utils')
var hasClass = require('amp-has-class')

describe('SegmentedControl', () => {
  it('should set the correct className', () => {
    var ctrl = TestUtils.renderIntoDocument(
      <SegmentedControl />
    )
    expect(hasClass(ReactDOM.findDOMNode(ctrl), 'segmented-control')).toBe(true)
  })

  it('should set addition classes', () => {
    var ctrl = TestUtils.renderIntoDocument(
      <SegmentedControl className='test' />
    )
    expect(hasClass(ReactDOM.findDOMNode(ctrl), 'segmented-control test')).toBe(true)
  })

  it('should pass children props through', () => {
    var ctrl = TestUtils.renderIntoDocument(
      <SegmentedControl><span>This is a child</span></SegmentedControl>
    )
    expect(ReactDOM.findDOMNode(ctrl).children.length).toBe(1)
  })
})
