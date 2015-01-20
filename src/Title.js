var React = require('react')
var cx = require('./cx')

var Title = React.createClass({
  render() {
    return <h1 {...this.props} className={cx("title", this.props.className)} />
  }
})

module.exports = Title
