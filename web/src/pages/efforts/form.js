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
    if (this.state.id) {
      xhr.put('http://localhost:4000/efforts/' + this.state.id, { json: this.state}, (e, r, b) => {
        if (e) return console.log(e.message)
        this.setState({ success: true })
      })
    } else {
      xhr.post('http://localhost:4000/efforts', { json: this.state }, (e, r, b) => {
        if (e) return console.log(e.message)
        this.setState({ success: true })
      })
    }
  },
  componentDidMount() {
    if (this.props.params.id) {
      xhr.get('http://localhost:4000/efforts/' + this.props.params.id, { json: true}, (e, r, effort) => {
        if (e) return console.log(e.message)
        this.setState(effort)
      })
    }
  },
  render() {
    const formState = this.state.id ? 'Edit' : 'New'
    return (
      <div>
          { this.state.success && this.state.id
            ? <Redirect to={`efforts/${this.state.id}/show`} />
        : null }
          { this.state.success && !this.state.id
            ? <Redirect to={`/efforts/`} />
        : null }
          <h3>{formState} Form</h3>
          <form
            onSubmit={this.handleSubmit}>
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
