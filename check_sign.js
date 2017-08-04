var sign = require('./sign.js')
const fs = require('fs')
var express = require('express')
var http = require('http')
// 构建Express实例
var app = express()
console.log(sign('jsapi_ticket', 'http://diannanye.com/cooling/'));
/*
 *something like this
 *{
 *  jsapi_ticket: 'jsapi_ticket',
 *  nonceStr: '82zklqj7ycoywrk',
 *  timestamp: '1415171822',
 *  url: 'http://diannanye.com/cooling/',
 *  signature: '1316ed92e0827786cfda3ae355f33760c4f70c1f'
 *}
 */

// fs.readFile('./token', (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });
// const options = {
//     hostname: 'api.douban.com',
//     port: 80,
//     path: '/v2/movie/top250'
// };
// const req = http.request(options, (res) => {
//     console.log(1234)
//     console.log(`状态码: ${res.statusCode}`);
//     console.log(`响应头: ${JSON.stringify(res.headers)}`);
//     res.setEncoding('utf8');
//     res.on('data', (chunk) => {
//         // postData取数据
//         console.log(`响应主体: ${chunk}`);
//         postData += chunk
//     });
//     res.on('end', () => {
//         console.log('响应中已无数据.');
//     });
// });
// req.on('error', (e) => {
//     console.error(`请求遇到问题: ${e.message}`);
// });
// // http.request()必须要用req.end()来结束请求
// req.end();



app.listen(3000, '0.0.0.0')

// 注册页面可以看到显式数据
app.get('/data', function (req, res) {
    res.json(sign('jsapi_ticket', 'http://diannanye.com/cooling/'))
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