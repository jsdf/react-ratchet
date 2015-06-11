var React = require('react')
var cx = require('./cx')

var ControlItem = React.createClass({
	render() {
		var classes = ['control-item'];
		if (this.props.active) classes.push('active');
		classes = classes.concat(this.props.className);

		return (
			<a className={cx.apply(null, classes)}>{this.props.children}</a>	
		);
	}
});

module.exports = ControlItem;
