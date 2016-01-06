jest.dontMock('../NavButton')
var NavButton = require('../NavButton')
var React = require('react')
var rendersValidElement = require('../../support/rendersValidElement')

// TODO: more tests
describe('NavButton', () => {
  it('should render', () => {
    expect(rendersValidElement(<NavButton />)).toBe(true)
  })
})
