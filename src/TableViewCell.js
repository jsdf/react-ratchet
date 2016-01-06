var React = require('react')
var cx = require('classnames')

class TableViewCell extends React.Component {
  getChevronDirection() {
    if (this.props.navigateLeft) {
      return 'left'
    } else if (this.props.navigateRight) {
      return 'right'
    } else {
      return null
    }
  }

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
  }

  renderDivider() {
    return (
      <li
        {...this.props}
        className={cx(this.props.className, "table-view-divider")}
        children={this.props.children}
        href={null}
      />
    )
  }

  render() {
    if (this.props.divider) {
      return this.renderDivider()
    }

    return (
      <li
        {...this.props}
        className={cx(this.props.className, "table-view-cell")}
        children={this.renderChildren()}
      />
    )
  }
}

module.exports = TableViewCell
