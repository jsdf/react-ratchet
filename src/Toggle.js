var React = require('react')
var cx = require('./cx')

var Toggle = React.createClass({
  componentDidMount() {
    // ensure ratchet toggles initialised
    require('../vendor/toggles')
    React.findDOMNode(this.refs.toggle).addEventListener('toggle', this.handleToggle)
  },
  componentWillUnmount() {
    React.findDOMNode(this.refs.toggle).removeEventListener('toggle', this.handleToggle)
  },
  handleToggle(e) {
    var inverse = !this.props.active
    if (e.detail.isActive == inverse) {
      this.props.onToggle(inverse)
    }
  },
  render() {
    var extraClasses = []
    if (this.props.active) extraClasses.push('active')
    var className = cx.apply(null, [this.props.className, "toggle"].concat(extraClasses))

    return (
      <div {...this.props} className={className} ref="toggle">
        <div className="toggle-handle" />
      </div>
    )
  }
})

module.exports = Toggle
