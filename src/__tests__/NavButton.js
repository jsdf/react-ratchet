jest.dontMock('../NavButton')
var NavButton = require('../NavButton')
var React = require('react')

describe('NavButton', () => {
  it('adds ratchet classes', () => {
    expect(hasClass(shallowRender(<NavButton />).props.className, 'btn-nav btn-link btn')).toBe(true)
  })
  
  it('adds user classes', () => {
    expect(hasClass(shallowRender(<NavButton className="asdf" />).props.className, 'asdf')).toBe(true)
  })

  it('renders a button element by default', () => {
    expect(shallowRender(<NavButton />).type).toEqual('button')
  })

  it('renders an a element when href provided', () => {
    var subject = shallowRender(<NavButton href="b" />)
    expect(subject.type).toEqual('a')
    expect(subject.props.href).toEqual('b')
  })

  it('pulls left by default', () => {
    var subject = shallowRender(<NavButton />)
    expect(hasClass(subject.props.className, 'pull-left')).toBe(true)
    expect(hasClass(subject.props.className, 'pull-right')).toBe(false)
  })
  
  it('pulls right when "right" prop set', () => {
    var subject = shallowRender(<NavButton right />)
    expect(hasClass(subject.props.className, 'pull-right')).toBe(true)
    expect(hasClass(subject.props.className, 'pull-left')).toBe(false)
  })
})
