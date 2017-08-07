var shareLink = window.location.href
console.log(shareLink)
(function () {
  var sendData = {url: shareLink}
  $.ajax({
    type: 'GET',
    url: '/data',
    data: sendData
  })
    .done(function(data){
              wx.config({
                debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，
若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
                appId: 'wxee993e4eb3e309d3', // 必填，公众号的唯一标识
                timestamp: parseInt(data.timestamp), // 必填，生成签名的时间戳
                nonceStr: data.nonceStr, // 必填，生成签名的随机串
                signature: data.signature, // 必填，签名，见附录1
                jsApiList: ['onMenuShareAppMessage', 'onMenuShareTimeline', 'onMenuShareQQ', 'onMenuShareWeibo', 'onMenuShareQZone'] // 必填，需要使用的JS接口列表，所有JS接口列
表见附录2
              })
              alert(wx.config)
  })
    .done(function () {
      console.log('ajax done')
  })
    .fail(function(error){
    console.log('test Error: ', error)
  })
  wx.ready(function () {
      console.log('success')  // body...
      wx.onMenuShareTimeline({    //分享到朋友圈
        title: '滇南叶-Cooling茶支介绍', // 分享标题
        link: shareLink, // 分享链接
        imgUrl: 'http://diannanye.com/pic/logo.jpg', // 分享图标
        success: function () {
        },
        cancel: function () {
        }
      })
      wx.onMenuShareAppMessage({    //分享给朋友
        title: '滇南叶-Cooling茶支介绍', // 分享标题
        desc: '传统茶香与薄荷清新交织，带来现代品茶全新体验。', // 分享描述
        link: shareLink, // 分享链接
        imgUrl: 'http://diannanye.com/pic/logo.jpg', // 分享图标
        success: function () {
        },
        cancel: function () {
        }
      })
      wx.onMenuShareQQ({      //分享到QQ
          title: '滇南叶-Cooling茶支介绍', // 分享标题
          desc: '传统茶香与薄荷清新交织，带来现代品茶全新体验。', // 分享描述
          link: shareLink, // 分享链接
          imgUrl: 'http://diannanye.com/pic/logo.jpg', // 分享图标
          success: function () {
          },
          cancel: function () {
             // 用户取消分享后执行的回调函数
          }
      })
      wx.onMenuShareWeibo({    //分享到腾讯微博
          title: '滇南叶-Cooling茶支介绍', // 分享标题
          desc: '传统茶香与薄荷清新交织，带来现代品茶全新体验。', // 分享描述
          link: shareLink, // 分享链接
          imgUrl: 'http://diannanye.com/pic/logo.jpg', // 分享图标
          success: function () {
             // 用户确认分享后执行的回调函数
          },
          cancel: function () {
              // 用户取消分享后执行的回调函数
          }
      })
      wx.onMenuShareQZone({     //分享到QQ空间
          title: '滇南叶-Cooling茶支介绍', // 分享标题
          desc: '传统茶香与薄荷清新交织，带来现代品茶全新体验。', // 分享描述
          link: shareLink, // 分享链接
          imgUrl: 'http://diannanye.com/pic/logo.jpg', // 分享图标
          success: function () {
             // 用户确认分享后执行的回调函数
          },
          cancel: function () {
              // 用户取消分享后执行的回调函数
          }
      })
      })
  wx.error(function (res) {
    console.log(res)
  })
})();
