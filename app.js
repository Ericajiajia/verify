// var express = require('express')
// //封装好的解析器，否则无法从前端得到Json数据格式 
// var bodyParser = require('body-parser')
// var app = express()
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true })); 


//  app.get('/public/*', function(req, res, next) {
//     // 使用默认参数，除了根路径要改变
//     var options = {
//         root: './',
//         dotfile: 'deny',
//         headers: {
//             'x-timestamp': Date.now(),
//             'x-sent': true
//         }
//     };
//     // 由于拿到的数据是个数组（前面用了*匹配），从index.html开始，所以filename取第一个
//     var fileName = req.params[0]
//     // 通过sendFile()函数取到主页面的内容并展现出来
//     res.sendFile(fileName, options, function(err) {
//         if (err) {
//             console.log(err);
//             res.status(err.status).end()
//         }
//         else {
//             console.log('sent', fileName)
//         }
//     })
// })
// // 端口监听
// app.listen(3000, function () {
//   console.log('Open successfully!')
// })