const fs = require('fs')
const qs = require('querystring')
const request = require('request')
const redis = require('redis')
var client = redis.createClient()
// access_token的获取
const getAccessToken = function () {
  let queryParams = {
    'grant_type': 'client_credential',
    'appid': 'wxee993e4eb3e309d3',
    'secret': '1a6ed69a9afc46846df2c10126897718'
  }

  let wxGetAccessTokenBaseUrl = 'https://api.weixin.qq.com/cgi-bin/token?'+qs.stringify(queryParams)
  let options = {
    method: 'get',
    url: wxGetAccessTokenBaseUrl
  }
  return new Promise((resolve, reject) => {
    request(options, function (err, res, body) {
      if (res) {
        resolve(JSON.parse(body))
      } else {
        reject(err)
      }
    })
  })
}
//保存与更新
const saveToken = function () {
  getAccessToken().then(res => {
    let token = res['access_token']
    client.set('token', token, function (err, reply) {
      console.log(reply)
    })
  })
}

const refreshToken = function () {
  saveToken()
  setInterval(function () {
    saveToken()
  }, 7000*1000)
}


module.exports = refreshToken