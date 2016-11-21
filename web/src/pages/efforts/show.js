///////////////////////////////////////////////////
///////////////    SHOW EFFORT   ///////////////
//////////////////////////////////////////////////
const React = require('react')
const xhr = require('xhr')
const { Link, Redirect } = require('react-router')

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
      xhr.del('http://localhost:4000/efforts/' + this.state.effort.id, {
        json: this.state.effort
      }, (e, r, b) => {
        if (e) return console.log(e.message)
        this.setState({ removed: true })
      })
    }
  },
  componentDidMount() {
    xhr.get("http://localhost:4000/efforts/" + this.props.params.id,
      { json: true }, (e, r, effort) => {
        if (e) return console.log(e.message)
        this.setState({ effort })
      }
    )
  },
  render() {
    return (
      <div>
        { this.state.removed ? <Redirect to="/efforts" /> : null}
          <h3>{this.state.effort.name}</h3>
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
