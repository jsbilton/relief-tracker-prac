const React = require('react')
const xhr = require('xhr')
const API_URL = process.env.REACT_APP_API
const url = API_URL

const ServiceEfforts = Component => React.createClass({
  allDocs (callback) {
    xhr.get(url + '/efforts', {json: true}, (err, res, body) => {
      callback(err, body)
    })
  },
  get (id, callback) {
    // url + '/efforts/' + id,
    xhr.get(`${url}/efforts/${id}`, {json: true}, (err, res, body) => {
      callback(err, body)
    })
  },
  post (doc, callback) {
    xhr.post(`${url}/efforts`, {json: doc}, (err, res, body) => {
      callback(err, body)
    })
  },
  put (id, doc, callback) {
    xhr.put(`${url}/efforts/${id}`, {json: doc}, (err, res, body) => {
      callback(err, body)
    })
  },
  remove (id, body, callback) {
    xhr.del(`${url}/efforts/${id}`, {json: body}, (err, res, body) => {
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
module.exports = ServiceEfforts
