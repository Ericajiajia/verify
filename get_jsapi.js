var fs = require('fs')
var qs = require('querystring')
var request = require('request')
var redis = require('redis')
var client = redis.createClient()

function getJsapi () {
  let token
  client.get('token', function (err, reply) {
    if (err) {
      console.log(err)
    } else {
      return reply
    }
  })
  let wxGetAccessTokenBaseUrl = 'https://api.weixin.qq.com/cgi-bin/ticket/getticket?access_token=' + token + '&type=jsapi'
  let options = {
    method: 'get',
    url: wxGetAccessTokenBaseUrl
  }
  return new Promise((resolve, reject) => {
    request(options, function (err, res, body) {
      console.log('jsapi:'+JSON.parse(body))
      resolve(JSON.parse(body))
    })
  })
}
module.exports = getJsapi