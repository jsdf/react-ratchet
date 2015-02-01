var React = require('react')
var cx = require('./cx')

var NavBar = React.createClass({
  render() {
    return (
      <header
        {...this.props}
        className={cx(this.props.className, "bar-nav bar")}
      />
    )
  }
})

module.exports = NavBar
