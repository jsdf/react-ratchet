jest.dontMock('../TableViewCell')
var TableViewCell = require('../TableViewCell')
var React = require('react')

// TODO: more tests
describe('TableViewCell', () => {
  it('adds ratchet classes', () => {
    expect(hasClass(shallowRender(<TableViewCell />).props.className, 'table-view-cell')).toBe(true)
  })

  it('adds user classes', () => {
    expect(hasClass(shallowRender(<TableViewCell className="asdf" />).props.className, 'asdf')).toBe(true)
  })

  it('renders an li element', () => {
    expect(shallowRender(<TableViewCell />).type).toBe('li')
  })

  it('renders a link if we add an href', () => {
    var rendered = shallowRender(<TableViewCell href="lkjh" />)
    expect(rendered.props.children.type).toBe('a')
    expect(rendered.props.children.props.href).toBe('lkjh')
  })

  it('adds a transition tag on a link, if we specify one', () => {
    var rendered = shallowRender(<TableViewCell href="/home" transition="slide-in" />)
    expect(rendered.props.children.type).toBe('a')
    expect(rendered.props.children.props['data-transition']).toBe('slide-in')
  })
})
