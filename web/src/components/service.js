const React = require('react')
const xhr = require('xhr')
const API_URL = process.env.REACT_APP_API
const url = API_URL

const Service = (Component, model) => React.createClass({
  allDocs (callback) {
    xhr.get(`url/${model}`, {json: true}, (err, res, body) => {
      callback(err, body)
    })
  },
  get (id, callback) {
    // url + '/model/' + id,
    xhr.get(`${url}/${model}/${id}`, {json: true}, (err, res, body) => {
      callback(err, body)
    })
  },
  post (doc, callback) {
    xhr.post(`${url}/${model}`, {json: doc}, (err, res, body) => {
      callback(err, body)
    })
  },
  put (id, doc, callback) {
    xhr.put(`${url}/${model}/${id}`, {json: doc}, (err, res, body) => {
      callback(err, body)
    })
  },
  remove (id, body, callback) {
    xhr.del(`${url}/${model}/${id}`, {json: body}, (err, res, body) => {
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
module.exports = Service
