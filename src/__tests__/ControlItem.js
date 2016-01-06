jest.dontMock('../ControlItem')
var ControlItem = require('../ControlItem')
var React = require('react')

describe('ControlItem', () => {
  it('should apply the Ratchet CSS classes', () => {
    var ctrl = (
      <ControlItem />
    )
    expect(hasClass(shallowRender(ctrl).props.className, 'control-item')).toBe(true)
  })

  it('should apply additional classes', () => {
    var ctrl = (
      <ControlItem className='test' />
    )
    expect(hasClass(shallowRender(ctrl).props.className, 'control-item test')).toBe(true)
  })

  it('should set active', () => {
    var ctrl = (
      <ControlItem active />
    )
    expect(hasClass(shallowRender(ctrl).props.className, 'control-item active')).toBe(true)
  })

  it('should pass children through', () => {
    var ctrl = (
      <ControlItem>Test</ControlItem>
    )
    expect(React.Children.toArray(shallowRender(ctrl).props.children)[0]).toEqual('Test')
  })
})
