jest.dontMock('../Icon')
var Icon = require('../Icon')
var React = require('react')

describe('Icon', () => {
  it('sets the ratchet icon class', () => {
    expect(hasClass(shallowRender(<Icon />).props.className, 'icon')).toBe(true)
  })

  it('adds user classes', () => {
    expect(hasClass(shallowRender(<Icon className="asdf" />).props.className, 'asdf')).toBe(true)
  })

  it('sets the icon type class', () => {
    expect(hasClass(shallowRender(<Icon star />).props.className, 'icon-star')).toBe(true)
  })
})
