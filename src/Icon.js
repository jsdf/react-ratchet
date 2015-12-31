var React = require('react')
var cx = require('./cx')

class Icon extends React.Component {
  getIconClasses() {
    var props = this.props
    return Object.keys(props)
      .filter((propName) => props[propName] === true)
      .map((iconName) => `icon-${iconName}`)
      .join(' ')
  }

  render() {
    var {type} = this.props
    var typeClassName = type ? `icon-${type}` : null
    return (
      <span
        {...this.props}
        className={cx(this.props.className, this.getIconClasses(), typeClassName, "icon")}
      />
    )
  }
}

module.exports = Icon
