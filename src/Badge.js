var React = require('react')
var cx = require('./cx')

class Badge extends React.Component {
  render() {
    var extraClasses = []
    if (this.props.inverted) extraClasses.push('badge-inverted')
    if (this.props.rStyle) extraClasses.push(`badge-${this.props.rStyle}`)
    var className = cx.apply(null, [this.props.className, "badge"].concat(extraClasses))

    return (
      <span
        {...this.props}
        className={className}
      />
    )
  }
}

module.exports = Badge
