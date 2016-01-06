jest.dontMock('../Toggle')
var Toggle = require('../Toggle')
var React = require('react')

// TODO: more tests
describe('Toggle', () => {
  it('adds ratchet classes', () => {
    expect(hasClass(shallowRender(<Toggle />).props.className, 'toggle')).toBe(true)
  })
  
  it('adds user classes', () => {
    expect(hasClass(shallowRender(<Toggle className="asdf" />).props.className, 'asdf')).toBe(true)
  })
})
