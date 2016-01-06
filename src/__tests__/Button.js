jest.dontMock('../Button')
var Button = require('../Button')
var React = require('react')
var rendersValidElement = require('../../support/rendersValidElement')

// TODO: more tests
describe('Button', () => {
  it('should render', () => {
    expect(rendersValidElement(<Button />)).toBe(true)
  })
})
