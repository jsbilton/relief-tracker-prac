// bootstrapping the react application into our web app
const React = require('react')
const ReactDOM = require('react-dom')

const App = () => <h1>Hello, React </h1>

// the DOM intializes
ReactDOM.render(<App />, document.getElementById('root'))
