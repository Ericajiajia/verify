var crypto = require('crypto')

var createNonceStr = function () {
  return Math.random().toString(36).substr(2, 15)
}

var createTimestamp = function () {
  return parseInt(new Date().getTime() / 1000) + ''
}

var sign = function (jsapi_ticket, url) {
  var nonceStr = createNonceStr();
  var timestamp = createTimestamp();
  var ret = {
    jsapi_ticket: jsapi_ticket,
    nonceStr: nonceStr,
    timestamp: timestamp,
    url: url
  }
  var str = "jsapi_ticket=" + jsapi_ticket + "&noncestr=" + nonceStr + "&timestamp=" + timestamp + "&url=" + url;
  ret.signature = crypto.createHash('sha1').update(str).digest('hex');
  return ret
}
module.exports = sign

/**
* @synopsis 签名算法 
*
* @param jsapi_ticket 用于签名的 jsapi_ticket
* @param url 用于签名的 url ，注意必须动态获取，不能 hardcode
*
* @returns
*/