///////////////////////////////////////////////////
///////////////    SHOW EFFORT   ///////////////
//////////////////////////////////////////////////
const React = require('react')
const xhr = require('xhr')
const { Link } = require('react-router')

const Effort = React.createClass({
  getInitialState() {
    return {
      effort: {}
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
          <h3>{this.state.effort.name}</h3>
          <Link to={`/efforts/${this.state.effort.id}/edit`}>Edit Effort</Link>
          <Link to="/efforts">Return</Link>
      </div>
    )
  }
})

module.exports = Effort
