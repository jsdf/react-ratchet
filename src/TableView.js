var React = require('react')
var cx = require('./cx')

var TableView = React.createClass({
  render() {
    return (
      <ul
        {...this.props}
        className={cx(this.props.className, "table-view")}
      />
    )
  }
})

module.exports = TableView
