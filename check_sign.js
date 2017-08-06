var sign = require('./sign.js')
var refreshToken = require('./access_token.js')
var getJsapi = require('./get_jsapi.js')
var express = require('express')
var http = require('http')
// 构建Express实例
var app = express()

app.listen(3001, '0.0.0.0', function () {console.log(1)})
refreshToken()
// 注册页面可以看到显式数据
app.get('/data', function (req, res) {
    getJsapi()
    .then(function (result) {
        var obj = sign(result.jsapi, 'http://diannanye.com/cooling/')
        console.log('sign:'+obj)
        res.json(obj)
    })
})
 app.get('/*', function(req, res, next) {
    // 使用默认参数，除了根路径要改变
    var options = {
        root: './',
        dotfile: 'deny',
        headers: {
            'x-timestamp': Date.now(),
            'x-sent': true
        }
    };
    // 由于拿到的数据是个数组（前面用了*匹配），从index.html开始，所以filename取第一个
    var fileName = req.params[0]
    // 通过sendFile()函数取到主页面的内容并展现出来
    res.sendFile(fileName, options, function(err) {
        if (err) {
            console.log(err);
            res.status(err.status).end()
        }
        else {
            console.log('sent', fileName)
        }
    })
})

