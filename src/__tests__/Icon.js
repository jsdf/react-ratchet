jest.dontMock('../Icon')
var Icon = require('../Icon')
var React = require('react')
var rendersValidElement = require('../../support/rendersValidElement')

// TODO: more tests
describe('Icon', () => {
  it('should render', () => {
    expect(rendersValidElement(<Icon />)).toBe(true)
  })
})
