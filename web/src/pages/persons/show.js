//   show person
const React = require('react')
const xhr = require('xhr')
const { Link } = require('react-router')

const Person = React.createClass({
  getInitialState () {
    return {
       person: []
    }
  },
  componentDidMount() {
    xhr.get('http://localhost:4000/persons/' + this.props.params.id, {
      json: true
    }, (err, response, person) => {
      if (err) return console.log(err.message)
      this.setState({ person })
    })
  },
  render () {
    return (
      <div>
          <h1>
            {this.state.person.firstName + ' ' + this.state.person.lastName}
          </h1>
          <Link to="/persons">Return</Link>
      </div>
    )
  }
})

module.exports = Person
