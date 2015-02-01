var React = require('react')
var cx = require('./cx')
var Icon = require('./Icon')

var NavButton = React.createClass({
  render() {
    var side = this.props.right ? 'right' : 'left'
    var classes = cx(this.props.className, `btn-nav btn-link btn pull-${side}`)
    var icon = <Icon type={`${side}-nav`} />

    var Component = this.props.href ? 'a' : 'button'

    if (side == 'left') {
      return (
        <Component {...this.props} className={classes}>
          {icon}
          {this.props.children}
        </Component>
      )
    } else { // right
      return (
        <Component {...this.props} className={classes}>
          {this.props.children}
          {icon}
        </Component>
      )
    }
  }
})

module.exports = NavButton
