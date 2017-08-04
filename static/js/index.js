var shareLink = 'http://diannanye.com/cooling/index.html';
shareLink = encodeURI(shareLink);
(function () {
  var sendData = {url: shareLink}
  $.ajax({
    type: 'GET',
    url: '/data',
    data: sendData
  })
    .done(function(data){
              wx.config({
                debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
                appId: 'wxee993e4eb3e309d3', // 必填，公众号的唯一标识
                timestamp: parseInt(data.timestamp), // 必填，生成签名的时间戳
                nonceStr: data.noncestr, // 必填，生成签名的随机串
                signature: data.signature, // 必填，签名，见附录1
                jsApiList: ['onMenuShareAppMessage', 'onMenuShareTimeline', 'onMenuShareQQ', 'onMenuShareWeibo', 'onMenuShareQZone'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
              })
  })
    .done(function () {
      console.log(0)
    })
    .fail(function(error){
    console.log(error)
  })
  wx.ready(function () {
    setTimeout(function () {
      // body...
      wx.onMenuShareTimeline({
        title: '滇南叶-Cooling茶支介绍', // 分享标题
        link: shareLink, // 分享链接
        imgUrl: 'http://diannanye.com/cooling/static/pic/share_pic.jpg', // 分享图标
        success: function () {
        },
        cancel: function () {
        }
      })
      wx.onMenuShareAppMessage({
        title: '滇南叶-Cooling茶支介绍', // 分享标题
        desc: '滇南叶Cooling茶支，茶与薄荷的现代全新体验。', // 分享描述
        link: shareLink, // 分享链接
        imgUrl: 'http://diannanye.com/cooling/static/pic/share_pic.jpg', // 分享图标
        success: function () { 
        },
        cancel: function () { 
        }
      })
      wx.onMenuShareQQ({
          title: '滇南叶-Cooling茶支介绍', // 分享标题
          desc: '滇南叶Cooling茶支，茶与薄荷的现代全新体验。', // 分享描述
          link: shareLink, // 分享链接
          imgUrl: 'http://diannanye.com/cooling/static/pic/share_pic.jpg', // 分享图标
          success: function () {
             // 用户确认分享后执行的回调函数
          },
          cancel: function () {
             // 用户取消分享后执行的回调函数
          }
      })
      wx.onMenuShareWeibo({
          title: '滇南叶-Cooling茶支介绍', // 分享标题
          desc: '滇南叶Cooling茶支，茶与薄荷的现代全新体验。', // 分享描述
          link: shareLink, // 分享链接
          imgUrl: 'http://diannanye.com/cooling/static/pic/share_pic.jpg', // 分享图标
          success: function () {
             // 用户确认分享后执行的回调函数
          },
          cancel: function () {
              // 用户取消分享后执行的回调函数
          }
      })
      wx.onMenuShareQZone({
          title: '滇南叶-Cooling茶支介绍', // 分享标题
          desc: '滇南叶Cooling茶支，茶与薄荷的现代全新体验。', // 分享描述
          link: shareLink, // 分享链接
          imgUrl: 'http://diannanye.com/cooling/static/pic/share_pic.jpg', // 分享图标
          success: function () { 
             // 用户确认分享后执行的回调函数
          },
          cancel: function () { 
              // 用户取消分享后执行的回调函数
          }
      })
    }, 1000)
  }) 
})();









// 问题：分享链接是不是http://diannanye.com/cooling/index.html，
// 然后给别人看看是不是完整了