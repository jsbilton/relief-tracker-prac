const React = require('react')
const xhr = require('xhr')
const { Link, Redirect } = require('react-router')

const Location = React.createClass({
  getInitialState() {
    return {
      location: {},
      removed: false
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
  handleRemove(e) {
    e.preventDefault()
    if (confirm('Removing Item, You sure?') ) {
      xhr.del('http://localhost:4000/locations/' + this.state.location.id, { json: this.state.location}, (e, r, b) => {
        if (e) return console.log(e.message)
        this.setState({ removed: true})
      })
    }
  },
  render() {
    return (
      <div>
      { this.state.removed ? <Redirect to="/locations" /> : null}
        <h3>{ this.state.location.name }</h3>
        <Link to={`/locations/${this.state.location.id}/edit`}>Edit Location</Link>
        |
        <a href='#'
          onClick={this.handleRemove}>Remove Location</a>
        |
        <Link to="/locations">Return</Link>
      </div>
    )
  }
})

module.exports = Location
