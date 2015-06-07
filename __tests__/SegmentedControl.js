jest.dontMock('../src/SegmentedControl');
jest.dontMock('../src/cx');
var SegmentedControl = require('../src/SegmentedControl');
var React = require('react/addons');
var TestUtils = React.addons.TestUtils;

describe('SegmentedControl', () => {
	it('should set the correct className', () => {
		var ctrl = TestUtils.renderIntoDocument(
			<SegmentedControl />
		);
		expect(React.findDOMNode(ctrl).getAttribute('class')).toBe(' segmented-control');
	});

	it('should set addition classes', () => {
		var ctrl = TestUtils.renderIntoDocument(
			<SegmentedControl className='test' />
		);
		expect(React.findDOMNode(ctrl).getAttribute('class')).toBe(' segmented-control test');
	});

	it('should pass children props through', () => {
		var ctrl = TestUtils.renderIntoDocument(
			<SegmentedControl><span>This is a child</span></SegmentedControl>
		);
		expect(React.findDOMNode(ctrl).children.length).toBe(1);
	});
});
