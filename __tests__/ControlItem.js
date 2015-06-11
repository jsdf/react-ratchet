jest.dontMock('../src/ControlItem');
jest.dontMock('../src/cx');
var ControlItem = require('../src/ControlItem');
var React = require('react/addons');
var TestUtils = React.addons.TestUtils;

describe('ControlItem', () => {
  it('should apply the Ratched CSS classes', () => {
    var ctrl = TestUtils.renderIntoDocument(
      <ControlItem />
    );
    expect(React.findDOMNode(ctrl).getAttribute('class')).toBe(' control-item');
  });

  it('should apply additional classes', () => {
    var ctrl = TestUtils.renderIntoDocument(
      <ControlItem className='test' />
    );
    expect(React.findDOMNode(ctrl).getAttribute('class')).toBe(' control-item test');
  });

  it('should set active', () => {
    var ctrl = TestUtils.renderIntoDocument(
      <ControlItem active />
    );
    expect(React.findDOMNode(ctrl).getAttribute('class')).toBe(' control-item active');
  });

  it('should pass children through', () => {
    var ctrl = TestUtils.renderIntoDocument(
      <ControlItem>Test</ControlItem>
    );
    expect(React.findDOMNode(ctrl).innerHTML).toBe('Test');
  });
});
