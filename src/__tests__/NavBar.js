jest.dontMock('../NavBar')
var NavBar = require('../NavBar')
var React = require('react')

describe('NavBar', () => {
  it('adds ratchet classes', () => {
    expect(hasClass(shallowRender(<NavBar />).props.className, 'bar-nav bar')).toBe(true)
  })
  
  it('adds user classes', () => {
    expect(hasClass(shallowRender(<NavBar className="asdf" />).props.className, 'asdf')).toBe(true)
  })

  it('renders a header element', () => {
    expect(shallowRender(<NavBar />).type).toBe('header')
  })
})
