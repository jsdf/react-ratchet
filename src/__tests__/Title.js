jest.dontMock('../Title')
var Title = require('../Title')
var React = require('react')
var rendersValidElement = require('../../support/rendersValidElement')

// TODO: more tests
describe('Title', () => {
  it('should render', () => {
    expect(rendersValidElement(<Title />)).toBe(true)
  })
})
