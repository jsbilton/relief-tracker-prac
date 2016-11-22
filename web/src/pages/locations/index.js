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
    const listLocation = location =>
      <li key={location.id}>
          <Link to={`/locations/${location.id}/show`}>
            { location.name + ' ' + location.lat + ' ' + location.long }
          </Link>
      </li>

    return (
      <div>
          <h1>Locations</h1>
          <Link to="/locations/new">New Location</Link>
          <ul>
            {this.state.locations.map(listLocation)}
          </ul>
          <Link to="/">Home</Link>
      </div>
    )
  }
})

module.exports = Locations
