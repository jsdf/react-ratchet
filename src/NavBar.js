var React = require('react')
var cx = require('./cx')

var NavBar = React.createClass({
  render() {
    return (
      <header
        {...this.props}
        className={cx("bar bar-nav", this.props.className)}
      />
    )
  }
})

module.exports = NavBar
