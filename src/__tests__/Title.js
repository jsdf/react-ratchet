jest.dontMock('../Title')
var Title = require('../Title')
var React = require('react')

describe('Title', () => {
  it('adds ratchet classes', () => {
    expect(hasClass(shallowRender(<Title />).props.className, 'title')).toBe(true)
  })

  it('adds user classes', () => {
    expect(hasClass(shallowRender(<Title className="asdf" />).props.className, 'asdf')).toBe(true)
  })

  it('renders an h1 element', () => {
    expect(shallowRender(<Title />).type).toBe('h1')
  })
})
