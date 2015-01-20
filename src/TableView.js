var React = require('react')
var cx = require('./cx')

var TableView = React.createClass({
  render() {
    return (
      <ul
        {...this.props}
        className={cx("table-view", this.props.className)}
      />
    )
  }
})

module.exports = TableView
