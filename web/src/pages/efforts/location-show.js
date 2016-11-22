const React = require('react')

const LocationShow = React.createClass({
  getInitialState: function() {
    return {
      name: 'Todo Location'
    }
  },
  componentDidMount() {
      this.props.get(this.props.id, (e, location) => {
        if (e) return console.log(e.message)
        this.setState(location)
      })
  },
  render() {
    return (
      <p>{this.state.name}</p>
    )
  }
})

module.exports = LocationShow
