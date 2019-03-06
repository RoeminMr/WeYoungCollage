var app = getApp()
Page({
  data: {
    uid: '',
    pwd: '',
    classStr: '',
    classStr1: '',
    marginleft: '52',
    help_status: false,
    ClassDetail: "",
    data:"",
    key:"",
  },
  onLoad: function (options) {
    wx.showToast({
      title: "loading",
      icon: "loading",
      duration: 15000
    })


    
    var that = this;
    that.setData({
      uid: app.globalData.uid,
      pwd: app.globalData.pwd,

    });
    if (app.globalData.uid == '' || app.globalData.pwd == '') {
      wx.redirectTo({
        url: '/pages/index/index'
      })

    } 
    
    
    else{
      wx.request({
        url: '' + app.globalData.uid + '&passwd=' + app.globalData.pwd,
        success: function (res) {
          that.setData({
            classStr1: res.data,
            // remind:"完成",
          })

          wx.setStorage({
            key: "kb1",
            data: res.data,

          })
          
          wx.hideToast()
          console.log(res.data);
          if (res.data.status == '500') {
            wx.navigateTo({
              url: '/pages/error/queryerror?ErrorTips=' + "教务异常，暂时无法查询",
            })
          }
          if (res.data == '密码有误') {
            wx.setStorageSync('uid', '');
            wx.setStorageSync('pwd', '');
            wx.redirectTo({
              url: '/pages/index/index'
            })
          }
        }
  
      })
      
      

    //  var uid = wx.getStorageSync('uid')  //uid是用户名
    //  var pwd = wx.getStorageSync('pwd')  //pwd是密码
    // // var key = console.log('res.data');
    // if (pwd != "" || uid != "") {
    //        wx.getStorage({
    //     key: 'kb',
    //     success(res) {
    //       that.setData({
    //         classStr1: res.data
    //       })
    //     }
    //   })//如果本地缓存不为空要执行的代码
    // } else {
    //   wx.request({
    //     url: '' + app.globalData.uid + '&pwd=' + app.globalData.pwd,
    //     success: function (res) {
    //       that.setData({
    //         classStr1: res.data,
    //         // remind:"完成",
    //       })
    //       }
    //       })//如果本地缓存为空，要执行的代码
    //   wx.setStorage({
    //     key: "kb",
    //     data: res.data,
    //   })
    // }


   

    }
  },
  
  // /**
  //  * 生命周期函数--监听页面显示
  //  */
  // onShow: function () {
  //   wx.getStorage({
  //     key: 'kb1',
  //     success: function (res) {
  //       that.setData({
  //         classStr1: res.data,
  //       })
  //     }
  //   })
  // },


  onPullDownRefresh: function () {
    var that = this;
    that.onLoad();
    wx.stopPullDownRefresh();
    wx.showToast({
      title: "刷新完成",
      icon: "succeed",
      duration: 2000
    })
  },
  tapHelp: function (e) {
    if (e.target.id == 'help') {
      this.hideHelp();
    }
  },
  showHelp: function (e) {
    this.setData({
      'help_status': true,
      'ClassDetail': e.currentTarget.dataset.set
    });
  },
  hideHelp: function (e) {
    this.setData({
      'help_status': false
    });
  },
  /**
   * 长按复制到粘贴板的处理函数
   */
  copyIt: function (event) {
    wx.setClipboardData({
      data: event.target.id
    })
    wx.showToast({
      title: '已复制到粘贴版',
      icon: 'none',
      duration: 1000
    });
  },
})
      // wx.getStorage({
      //   key: 'key',
      //   success(res) {
      //     console.log(res.data)
      //   }
      // })
      //     wx.setStorage({
      //       key: "key",
      //       data: res.data,
      //     })






