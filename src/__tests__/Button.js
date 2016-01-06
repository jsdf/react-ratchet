jest.dontMock('../Button')
var Button = require('../Button')
var React = require('react')

// TODO: more tests
describe('Button', () => {
  it('adds ratchet classes', () => {
    expect(hasClass(shallowRender(<Button />).props.className, 'btn')).toBe(true)
  })
  
  it('adds user classes', () => {
    expect(hasClass(shallowRender(<Button className="asdf" />).props.className, 'asdf')).toBe(true)
  })

  it('renders a button element by default', () => {
    expect(shallowRender(<Button />).type).toEqual('button')
  })

  it('renders an a element when href provided', () => {
    var subject = shallowRender(<Button href="b" />)
    expect(subject.type).toEqual('a')
    expect(subject.props.href).toEqual('b')
  })

  it('sets the block class', () => {
    expect(hasClass(shallowRender(<Button block />).props.className, 'btn-block')).toBe(true)
  })
})
