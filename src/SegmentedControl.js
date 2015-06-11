var React = require('react');
var cx = require('./cx');

var SegmentedControl = React.createClass({
	render() {
		return (
			<div className={cx('segmented-control', this.props.className)}>
				{this.props.children}
			</div>
		);
	}
});

module.exports = SegmentedControl;
