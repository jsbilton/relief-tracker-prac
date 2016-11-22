///////////////////////////////////////////////////
///////////////    SHOW EFFORT   ///////////////
//////////////////////////////////////////////////
const React = require('react')
//const xhr = require('xhr')
const { Link, Redirect } = require('react-router')
const Service = require('../../components/service')
const LocationShowBase = require('./location-show')
const LocationShow = Service(LocationShowBase, 'locations')

const Effort = React.createClass({
  getInitialState() {
    return {
      effort: {},
      removed: false
    }
  },
  handleRemove(e) {
    e.preventDefault()
    if (confirm('Do you really want to Remove me?') ) {
      this.props.remove(this.props.params.id, this.state.effort, (e, b) => {
        if (e) return console.log(e.message)
        this.setState({ removed: true })
      })
    }
  },
  componentDidMount() {
    this.props.get(this.props.params.id, (e, effort) => {
      if (e) return console.log(e.message)
      this.setState({ effort })
    })
  },
  render() {
    const effort = this.state.effort || {}
    return (
      <div>
        { this.state.removed ? <Redirect to="/efforts" /> : null}
          <h3>{effort.name}</h3>
            <p>{effort.desc}</p>
            {effort.location_id ? <LocationShow id={effort.location_id} /> : null }

          <Link to={`/efforts/${this.state.effort.id}/edit`}>Edit Effort</Link>
          |
          <a href='#'
            onClick={this.handleRemove}>Remove Effort</a>
          |
          <Link to="/efforts">Return</Link>
      </div>
    )
  }
})

module.exports = Effort
