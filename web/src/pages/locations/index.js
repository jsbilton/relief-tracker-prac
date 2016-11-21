const React = require('react')
const { Link } = require('react-router')
const xhr = require('xhr')

const Locations = React.createClass({
  getInitialState() {
    return {
      locations: []
    }
  },
  componentDidMount() {
    xhr.get('http://localhost:4000/locations', { json: true}, (e, r, locations) => {
      if (e) return console.log(e.message)
      this.setState({ locations })
    })
  },
  render() {
    const listLocations = location =>
    <li>{location.name}</li>
    return (
      <div>
        <h1>Locations</h1>
        <ul>{this.state.locations.map(listLocations)}</ul>
        <Link to="/">Home</Link>
      </div>
    )
  }
})

module.exports = Locations
