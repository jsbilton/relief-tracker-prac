///////////////////////////////////////////////////
///////////////    Effort Input Form   /////////
//////////////////////////////////////////////////
const React = require('react')
const { Link, Redirect } = require('react-router')
const labelStyle = { display: 'block'}
const xhr = require('xhr')

const EffortForm = React.createClass ({
  getInitialState() {
    return {
      name: '',
      phase: '',
      organizationID: '',
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
    xhr.post('http://localhost:4000/efforts',
    { json: this.state},
    (e, r, b) => {
      if (e) return console.log(e.message)
      this.setState({ success: true })
    })
  },
  render() {
    return (
      <div>
        { this.state.success ? <Redirect to="/efforts" /> : null }
          <h1>New Effort Form</h1>
          <form onSubmit={this.handleSubmit}>
            <div>
              <label style={labelStyle}>Name</label>
              <input
                onChange={this.handleChange('name')}
                value={this.state.name}
                type='text'/>
            </div>
            <div>
              <label style={labelStyle}>Phase</label>
              <input
                onChange={this.handleChange('phase')}
                value={this.state.phase}
                type='text'/>
            </div>
            <div>
              <label style={labelStyle}>OrganizationID</label>
              <input
                onChange={this.handleChange('organizationID')}
                value={this.state.organizationID}
                type='text'/>
            </div>
            <div>
              <button>Save</button>
              <Link to="/efforts">Cancel</Link>
            </div>
          </form>
      </div>
    )
  }
})

module.exports = EffortForm
