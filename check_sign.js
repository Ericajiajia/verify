var sign = require('./sign.js');
var express = require('express')
var http = require('http')
// 构建Express实例
var app = express()
console.log(sign('jsapi_ticket'));
/*
 *something like this
 *{
 *  jsapi_ticket: 'jsapi_ticket',
 *  nonceStr: '82zklqj7ycoywrk',
 *  timestamp: '1415171822',
 *  url: 'http://example.com',
 *  signature: '1316ed92e0827786cfda3ae355f33760c4f70c1f'
 *}
 */


app.listen(3000, '0.0.0.0')

// 注册页面可以看到显式数据
app.get('/data', function (req, res) {
    res.json(sign('jsapi_ticket'))
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