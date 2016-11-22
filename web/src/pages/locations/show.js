const React = require('react')
const xhr = require('xhr')
const { Link } = require('react-router')

const Location = React.createClass({
  getInitialState() {
    return {
      location: {}
    }
  },
  componentDidMount() {
    xhr.get('http://localhost:4000/locations/' + this.props.params.id,
    { json: true},
    (e, r, location) => {
      if (e) return console.log(e.message)
      this.setState({ location })
    })
  },
  render() {
    return (
      <div>
        <h3>{ this.state.location.name }</h3>
        <Link to={`/locations/${this.state.location.id}/edit`}>Edit Location</Link>
        |
        <Link to="/locations">Return</Link>
      </div>
    )
  }
})

module.exports = Location
