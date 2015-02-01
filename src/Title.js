var React = require('react')
var cx = require('./cx')

var Title = React.createClass({
  render() {
    return <h1 {...this.props} className={cx(this.props.className, "title")} />
  }
})

module.exports = Title
