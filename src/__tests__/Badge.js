jest.dontMock('../Badge')
var Badge = require('../Badge')
var React = require('react')

// TODO: more tests
describe('Badge', () => {
  it('adds ratchet classes', () => {
    expect(hasClass(shallowRender(<Badge />).props.className, 'badge')).toBe(true)
  })
  
  it('adds user classes', () => {
    expect(hasClass(shallowRender(<Badge className="asdf" />).props.className, 'asdf')).toBe(true)
  })
})
