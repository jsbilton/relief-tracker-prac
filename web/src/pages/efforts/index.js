/////////////////////////////////////////////////////////////
///////////////    Efforts List File   /////////////////////
///////////////////////////////////////////////////////////
const React = require('react')
const xhr = require('xhr')
const { Link  } = require('react-router')

const Efforts = React.createClass({
  getInitialState() {
    return {
       efforts: []
    }
  },
  componentDidMount() {
    this.props.allDocs((e, efforts) => {
      if (e) return console.log(e.message)
      this.setState({ efforts })
    })
  },
  render() {
    const listEffort = effort =>
      <li key={effort.id}>
        <Link to={`/efforts/${effort.id}/show`}>
        {effort.name}
        </Link>
      </li>

    return (
      <div>
         <h1>Efforts</h1>
         <Link to="/efforts/new">New Effort</Link>
         <ul>
           {this.state.efforts.map(listEffort)}
         </ul>
         <Link to="/">Home</Link>
      </div>
    )
  }
})


module.exports = Efforts
