var React = require('react')
var cx = require('./cx')

class ControlItem extends React.Component {
    render() {
		var classes = ['control-item'];
		if (this.props.active) classes.push('active');
		classes = classes.concat(this.props.className);

		return (
			<a className={cx.apply(null, classes)}>{this.props.children}</a>	
		);
	}
}

module.exports = ControlItem;
