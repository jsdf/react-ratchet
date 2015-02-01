var React = require('react')
var cx = require('./cx')

var Button = React.createClass({
  render() {
    var extraClasses = []
    if (this.props.block) extraClasses.push('btn-block')
    if (this.props.outlined) extraClasses.push('btn-outlined')
    if (this.props.rStyle) extraClasses.push(`btn-${this.props.rStyle}`)
    var className = cx.apply(null, [this.props.className, "btn"].concat(extraClasses))

    var Component = this.props.href ? 'a' : 'button'

    return (
      <Component
        {...this.props}
        className={className}
      />
    )
  }
})

module.exports = Button
