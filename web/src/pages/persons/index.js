
///////////////////////////////////////////////////////
////////////      persons list file     ///////////////
///////////////////////////////////////////////////////

const React = require('react')
const { Link } = require('react-router')
const xhr = require('xhr')

const Persons = React.createClass({
  getInitialState: function () {
    return {
      persons: []
    }
  },
  componentDidMount() {
    this.props.allDocs((err, persons) => {
      if (err) return console.log(err.message)
      this.setState({ persons })
    })
  },
  render () {
    const listPerson = person =>
    // ES6 tag template below is same as "/persons" + person.id + "/show"
      <li key={person.id}>
      <Link to={`/persons/${person.id}/show`}>
      {person.firstName + ' ' + person.lastName}
      </Link></li>

    return (
      <div>
          <h1>
              Persons List
          </h1>
          <Link to="/persons/new">New Person</Link>
          <ul>
              <li>
                  { this.state.persons.map(listPerson) }
              </li>
          </ul>
          <Link to="/">Home</Link>
      </div>
    )
  }
})

module.exports = Persons
