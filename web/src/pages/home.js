const React = require('react')
const { Link } = require('react-router')

const Home = React.createClass({
  render () {
    return (
      <div>
          <h1>
              Welcome Home
          </h1>
          <h3>Menu</h3>
          <ol>
              <li>
                  <Link to="/about">About</Link>
              </li>
          </ol>
      </div>
    )
  }
})

module.exports = Home
