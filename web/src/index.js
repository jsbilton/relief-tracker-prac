// bootstrapping the react application into our web app
const React = require('react')
const ReactDOM = require('react-dom')


const App = require('./app')

// the DOM intializes target container where component will be rendered to
// this function renders components to the page/app
ReactDOM.render(<App />, document.getElementById('root'))
