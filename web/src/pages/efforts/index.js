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
    xhr.get('http://localhost:4000/efforts', {
      json: true
    }, (e, r, efforts) => {
      if (e) return console.log(e.message)
      this.setState({efforts})
    })
  },
  render() {
    const listEffort = effort =>
      <li key>{effort.id}

      <Link to={`/efforts/${effort.id}/show`}>
        {effort.name}
      </Link></li>




    return (
      <div>
         <ul>
           {this.state.efforts.map(listEffort)}
         </ul>
         <Link to="/">Home</Link>
      </div>
    )
  }
})


module.exports = Efforts
