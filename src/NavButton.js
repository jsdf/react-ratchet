var React = require('react')
var cx = require('classnames')
var Icon = require('./Icon')

class NavButton extends React.Component {
  render() {
    var side = this.props.right ? 'right' : 'left'
    var classes = cx(this.props.className, `btn-nav btn-link btn pull-${side}`)
    var iconClass = this.props.icon ? this.props.icon : side + "-nav"
    var icon = <Icon type={iconClass} />

    var props;
    if (this.props.hasOwnProperty('transition')) {
      props = {"data-transition": this.props.transition, ...this.props }
    } else {
      props = this.props
    }

    var Component = this.props.href ? 'a' : 'button'

    if (side == 'left') {
      return (
        <Component {...props} className={classes}>
          {icon}
          {this.props.children}
        </Component>
      )
    } else { // right
      return (
        <Component {...props} className={classes}>
          {this.props.children}
          {icon}
        </Component>
      )
    }
  }
}

module.exports = NavButton
