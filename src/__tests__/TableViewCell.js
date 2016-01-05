jest.dontMock('../TableViewCell')
var TableViewCell = require('../TableViewCell')
var React = require('react')
var rendersValidElement = require('../../support/rendersValidElement')

// TODO: more tests
describe('TableViewCell', () => {
  it('should render', () => {
    expect(rendersValidElement(<TableViewCell />)).toBe(true)
  })
})
