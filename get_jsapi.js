var redis = require('redis')
var client = redis.createClient()

var sign = require('./sign.js')

module.exports = function (req, res) {
  var url = req.query.url
  client.get('token', function (err, token) {
    if (err) {
      console.log(err)
    } else {
    let wxGetAccessTokenBaseUrl = 'https://api.weixin.qq.com/cgi-bin/ticket/getticket?access_token=' + token + '&type=jsapi'
    let options = {
    method: 'get',
    url: wxGetAccessTokenBaseUrl
  }
    request(options, function (err, response, body) {
      var ticket = JSON.parse(body).ticket
      res.json(sign(ticket, url))
    })
  }
  })
}
