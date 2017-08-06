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
  return new Promise((resolve, reject) => {
    request('https://api.weixin.qq.com/cgi-bin/token?'+qs.stringify(queryParams), function (err, res, body) {
      if (res) {
        console.log('in')
        console.log('result:'+JSON.parse(body).access_token)
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
      console.log('reply:'+reply)
    })
  }).then(function(err) {
    console.log(err)
  })
}

const refreshToken = function () {
  saveToken()
  setInterval(function () {
    saveToken()
  }, 7000*1000)
}


module.exports = refreshToken