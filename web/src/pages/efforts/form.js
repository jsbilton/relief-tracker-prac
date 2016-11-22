///////////////////////////////////////////////////
///////////////    Effort Input Form   /////////
//////////////////////////////////////////////////
const React = require('react')
const { Link, Redirect } = require('react-router')
const labelStyle = { display: 'block'}
const xhr = require('xhr')
const Service = require('../../components/service')
const ModelSelect = require('../../components/model-select')
// const LocationSelect = Service(ModelSelect, 'locations')
const TextField = require('../../components/text-field')

const EffortForm = React.createClass ({
  getInitialState() {
    return {
        name: '',
        phase: '',
        desc: '',
        organizationID: '',
        start: '',
        end: '',
        location_id: '',
        locations: [{id: "-1", name:'Choose'}] //default
    }
  },
  handleChange(field) {
    console.log("handle",  field)
    return e => {
      const newState = {}
      newState[field] = e.target.value
      this.setState(newState)
    }
  },
  handleSubmit(e) {
    e.preventDefault()
    let effort = this.state // [].concat(this.state)
    delete effort.locations

    if (this.state.id) {
      this.props.put(effort, (e, effort) => {
        if (e) return console.log(e.message)
        this.setState({ success: true })
      })
    } else {
      this.props.post(effort, (e, effort) => {
        if (e) return console.log(e.message)
        this.setState({ success: true })
      })
    }
  },
  componentDidMount() {
    xhr(process.env.REACT_APP_API + '/locations', { json: true }, (e, r, body) => {
      if (e) return console.log(e.message)
      this.setState({ locations:
        [].concat(this.state.locations, body)
      })
    })
    if (this.props.params.id) {
      this.props.get(this.props.params.id, (e, effort) => {
        if (e) return console.log(e.message)
        this.setState(effort)
      })
    }
  },
  render() {
    const formState = this.state.id ? 'Edit' : 'New'
    return (
      <div>
          <select
            value={this.state.location_id}
            onChange={this.handleChange('location_id')}>
              { this.state.locations.map(location => {
                return <option value={location.id}>{location.name}</option>
              })}
          </select>

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
              <TextField label="Name"
                  value={this.state.name}
                  onChange={this.handleChange('name')}
              />
            </div>
            <div>
              <TextField label="Phase"
                  value={this.state.phase}
                  onChange={this.handleChange('phase')}
              />
            </div>
            <div>
              <TextField label="OrganizationID"
                  value={this.state.organizationID}
                  onChange={this.handleChange('organizationID')}
              />
            </div>
            <div>
              <TextField label="Desc"
                  value={this.state.desc}
                  onChange={this.handleChange('desc')}
              />
            </div>
            <div>
              <TextField label="Start"
                  value={this.state.start}
                  onChange={this.handleChange('start')}
              />
            </div>
            <div>
              <TextField label="End"
                  value={this.state.end}
                  onChange={this.handleChange('end')}
              />
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
