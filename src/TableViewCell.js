var React = require('react')
var cx = require('./cx')

var TableViewCell = React.createClass({
  getChevronDirection() {
    if (this.props.navigateLeft) {
      return 'left'
    } else if (this.props.navigateRight) {
      return 'right'
    } else {
      return null
    }
  },
  renderChildren() {
    var chevronDirection = this.getChevronDirection()
    if (this.props.href || chevronDirection) {
      var classes = chevronDirection ? `navigate-${chevronDirection}` : null
      return (
        <a
          href={this.props.href}
          className={classes}
          children={this.props.children}
        />
      )
    } else {
      return this.props.children
    }
  },
  renderDivider() {
    return (
      <li
        {...this.props}
        className={cx("table-view-divider", this.props.className)}
        children={this.props.children}
      />
    )
  },
  render() {
    if (this.props.divider) {
      return this.renderDivider()
    }

    return (
      <li
        {...this.props}
        className={cx("table-view-cell", this.props.className)}
        children={this.renderChildren()}
      />
    )
  }
})

module.exports = TableViewCell
