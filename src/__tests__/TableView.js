jest.dontMock('../TableView')
var TableView = require('../TableView')
var React = require('react')

describe('TableView', () => {
  it('adds ratchet classes', () => {
    expect(hasClass(shallowRender(<TableView />).props.className, 'table-view')).toBe(true)
  })
  
  it('adds user classes', () => {
    expect(hasClass(shallowRender(<TableView className="asdf" />).props.className, 'asdf')).toBe(true)
  })

  it('renders a ul element', () => {
    expect(shallowRender(<TableView />).type).toBe('ul')
  })
})
