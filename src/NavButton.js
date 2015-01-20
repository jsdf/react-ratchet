var React = require('react')
var cx = require('./cx')

var NavButton = React.createClass({
  render() {
    var side = this.props.right ? 'right' : 'left'
    var classes = cx(`btn btn-link btn-nav pull-${side}`, this.props.className)
    var icon = <span className={`icon icon-${side}-nav`}></span>

    if (side == 'left') {
      return (
        <button {...this.props} className={classes}>
          {icon}
          {this.children}
        </button>
      )
    } else { // right
      return (
        <button {...this.props} className={classes}>
          {this.children}
          {icon}
        </button>
      )
    }
  }
})

module.exports = NavButton
