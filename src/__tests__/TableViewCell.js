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
})
