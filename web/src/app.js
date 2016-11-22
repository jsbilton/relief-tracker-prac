const React = require('react')
const { BrowserRouter, Match, Miss, Link } = require('react-router')

const Home = require('./pages/home')
const About = require('./pages/about')

const Persons = require('./pages/persons/')
const Person = require('./pages/persons/show')
const PersonForm = require('./pages/persons/form')

const Service = require('./components/service')


const Efforts = require('./pages/efforts/')
const Effort = require('./pages/efforts/show')
const EffortForm = require('./pages/efforts/form')
// const ServiceEfforts = require('./components/serviceEfforts')

const Locations = require('./pages/locations/')
const Location = require('./pages/locations/show')
const LocationForm = require('./pages/locations/form')
// const ServiceLocations = require('./components/serviceLocation')

const NoMatch = () => (
  <div>
      <h3>Page Not Found</h3>
      <Link to="/">Home</Link>
  </div>
)

const App = React.createClass({
  render () {
    return (
      <BrowserRouter>
          <div>
              <Match exactly pattern="/" component={ Home } />
              <Match pattern="/about" component={ About } />

              <Match exactly pattern="/persons" component={Service(Persons, 'persons')} />
              <Match pattern="/persons/:id/show" component={Service(Person, 'persons')} />
              <Match exactly pattern="/persons/new" component={ Service(PersonForm, 'persons') } />
              <Match pattern="/persons/:id/edit" component={ Service(PersonForm, 'persons') } />

              <Match exactly pattern="/efforts" component={ Service(Efforts, 'efforts') } />
              <Match pattern="/efforts/:id/show" component={ Service(Effort, 'efforts') } />
              <Match exactly pattern="/efforts/new" component={ Service(EffortForm, 'efforts')} />
              <Match pattern="/efforts/:id/edit" component={ Service(EffortForm, 'efforts')} />

              <Match exactly pattern="/locations" component={ Service(Locations, 'locations') } />
              <Match pattern="/locations/:id/show" component={ Service(Location, 'locations') } />
              <Match exactly pattern="/locations/new" component={ Service(LocationForm, 'locations') } />
              <Match pattern="/locations/:id/edit" component={ Service(LocationForm, 'locations') } />

              <Miss component={ NoMatch } />
          </div>
      </BrowserRouter>
    )
  }
})

module.exports = App
