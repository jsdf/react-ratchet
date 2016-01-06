var React = require('react')
var cx = require('classnames')

class Title extends React.Component {
  render() {
    return <h1 {...this.props} className={cx(this.props.className, "title")} />
  }
}

module.exports = Title
