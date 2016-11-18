// bootstrapping the react application into our web app
const React = require('react')
const ReactDOM = require('react-dom')


const App = require('./app')

// the DOM intializes
ReactDOM.render(<App />, document.getElementById('root'))
