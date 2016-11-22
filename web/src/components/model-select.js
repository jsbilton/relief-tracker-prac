const React = require('react')

const ModelSelect = React.createClass({
  getInitialState: function() {
    return {
      items: [{id: "-1", name: "Choose"}]
    }
  },
  componentDidMount() {
    this.props.allDocs((e, items) => {
      if (e) return console.log(e.message)
      this.setState({items: [].concat(this.state.items, items)})
    })
  },
  render() {
    const labelStyle = {display: 'block'}

    const option = item => <option value={item.id}>{item.name}</option>

    return (
      <div>
        <label style={labelStyle}>{this.props.label}</label>
        <select
          value={this.props.value}
          onChange={this.props.onChange}>
          {this.state.items.map(option)}
        </select>
      </div>
    )
  }
})

module.exports = ModelSelect



// const LocationSelect = Service(ModelSelect, 'locations')
//
// <LocationSelect
//   label="Locations"
//   value={this.state.effort.location_id}
//   onChange={this.handleChange('location_id')}
// />
