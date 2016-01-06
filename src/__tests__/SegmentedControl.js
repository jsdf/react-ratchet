jest.dontMock('../SegmentedControl')
var SegmentedControl = require('../SegmentedControl')
var React = require('react')

describe('SegmentedControl', () => {
  it('should set the correct className', () => {
    var ctrl = (
      <SegmentedControl />
    )
    expect(hasClass(shallowRender(ctrl).props.className, 'segmented-control')).toBe(true)
  })

  it('should set addition classes', () => {
    var ctrl = (
      <SegmentedControl className='test' />
    )
    expect(hasClass(shallowRender(ctrl).props.className, 'segmented-control test')).toBe(true)
  })

  it('should pass children props through', () => {
    var ctrl = (
      <SegmentedControl><span>This is a child</span></SegmentedControl>
    )
    expect(React.Children.toArray(shallowRender(ctrl).props.children).length).toBe(1)
  })
})
