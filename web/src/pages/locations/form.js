const React = require('react')
const { Link, Redirect } =require('react-router')
const labelStyle = { display: 'block' }
const xhr = require('xhr')

const LocationForm = React.createClass({
  getInitialState() {
    return {
      name: '',
      lat: '',
      long: '',
      success: false
    }
  },
  handleChange(field) {
    return e => {
      const newState = {}
      newState[field] = e.target.value
      this.setState(newState)
    }
  },
  handleSubmit(e) {
    e.preventDefault()
    if (this.state.id) {
      xhr.put('http://localhost:4000/locations/' + this.state.id, { json: this.state}, (e, r, b) => {
        if (e) return console.log(e.message)
        this.setState({ success: true })
      })
    } else {
      xhr.post('http://localhost:4000/locations', { json: this.state}, (e, r, b) => {
        if (e) return console.log(e.message)
        this.setState({ success: true })
      })
    }
  },
  componentDidMount() {
    if (this.props.params.id) {
      xhr.get('http://localhost:4000/locations/' + this.props.params.id, { json: true}, (e, r, location) => {
        if (e) return console.log(e.message)
        this.setState(location)
      })
    }
  },
  render() {
    const formState = this.state.id ? 'Edit' : 'New'
    return (
      <div>
        { this.state.success && this.state.id ? <Redirect to={`/locations/${this.state.id}/show`} /> : null }

        { this.state.success && !this.state.id ? <Redirect to={`/locations`} /> : null }

          <h1>{formState} Location Form</h1>
          <form onSubmit={this.handleSubmit}>
              <div>
                  <label style={labelStyle}>Name</label>
                  <input
                    onChange={this.handleChange('name')}
                    value={this.state.name}
                    type="text" />
              </div>
              <div>
                  <label style={labelStyle}>Latitude</label>
                  <input
                      onChange={this.handleChange('lat')}
                      value={this.state.lat}
                      type="text" />
              </div>
              <div>
                  <label style={labelStyle}>Longitude</label>
                  <input
                      onChange={this.handleChange('long')}
                      value={this.state.long}
                      type="text" />
              </div>
              <div>
                  <button>Save</button>
                  <Link to="/location">Cancel</Link>
              </div>
          </form>
      </div>
    )
  }
})

module.exports = LocationForm
