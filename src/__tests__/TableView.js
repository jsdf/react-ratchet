jest.dontMock('../TableView')
var TableView = require('../TableView')
var React = require('react')
var rendersValidElement = require('../../support/rendersValidElement')

// TODO: more tests
describe('TableView', () => {
  it('should render', () => {
    expect(rendersValidElement(<TableView />)).toBe(true)
  })
})
