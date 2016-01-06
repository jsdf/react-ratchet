jest.dontMock('../Badge')
var Badge = require('../Badge')
var React = require('react')
var rendersValidElement = require('../../support/rendersValidElement')

// TODO: more tests
describe('Badge', () => {
  it('should render', () => {
    expect(rendersValidElement(<Badge />)).toBe(true)
  })
})
