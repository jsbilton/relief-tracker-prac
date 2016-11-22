const React = require('react')
const xhr = require('xhr')
const API_URL = process.env.REACT_APP_API
const url = API_URL

const ServiceLocations = Component => React.createClass({
  allDocs (callback) {
    xhr.get(url + '/locations', {json: true}, (err, res, body) => {
      callback(err, body)
    })
  },
  get (id, callback) {
    // url + '/locations/' + id,
    xhr.get(`${url}/locations/${id}`, {json: true}, (err, res, body) => {
      callback(err, body)
    })
  },
  post (doc, callback) {
    xhr.post(`${url}/locations`, {json: doc}, (err, res, body) => {
      callback(err, body)
    })
  },
  put (id, doc, callback) {
    xhr.put(`${url}/locations/${id}`, {json: doc}, (err, res, body) => {
      callback(err, body)
    })
  },
  remove (id, body, callback) {
    xhr.del(`${url}/locations/${id}`, {json: body}, (err, res, body) => {
      callback(err, body)
    })
  },
  render() {
    return (
      <Component {...this.props}
        allDocs={this.allDocs}
        get={this.get}
        post={this.post}
        put={this.put}
        remove={this.remove}
      />
    )
  }
})
module.exports = ServiceLocations
