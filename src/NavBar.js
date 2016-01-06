var React = require('react')
var cx = require('classnames')

class NavBar extends React.Component {
  render() {
    return (
      <header
        {...this.props}
        className={cx(this.props.className, "bar-nav bar")}
      />
    )
  }
}

module.exports = NavBar
