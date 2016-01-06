jest.dontMock('../Toggle')
var Toggle = require('../Toggle')
var React = require('react')
var rendersValidElement = require('../../support/rendersValidElement')

// TODO: more tests
describe('Toggle', () => {
  it('should render', () => {
    expect(rendersValidElement(<Toggle />)).toBe(true)
  })
})
