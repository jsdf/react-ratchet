jest.dontMock('../NavBar')
var NavBar = require('../NavBar')
var React = require('react')
var rendersValidElement = require('../../support/rendersValidElement')

// TODO: more tests
describe('NavBar', () => {
  it('should render', () => {
    expect(rendersValidElement(<NavBar />)).toBe(true)
  })
})
