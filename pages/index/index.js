var app = getApp()
Page({
  data: {
    uid: '',
    pwd: '',
    jsonContent: {},
    jsonStr: "",
    InfoStr: '',
    help_status: false,
    userid_focus: false,
    passwd_focus: false,
    angle: 0,
      isLoading: false,
  },
  // onUnload: function () {
  //   wx.reLaunch({
  //     url: '../logs/logs'
  //   })
  // },
  onLoad: function() {
    var that = this;
    var uid = wx.getStorageSync('uid')
    var pwd = wx.getStorageSync('pwd')
    // var uid = app.globalData.uid;
    // var pwd = app.globalData.pwd;
    if (pwd != "" || uid != "") {
      wx.request({
        url: 'https://jw1.54tiancai.top/py/get_info?account=' + uid + '&passwd=' + pwd,
        success: function(res) {
          that.setData({
            InfoStr: res.data,
          })
          console.log(res.data);
          //账号密码错误以下功能实现跳转错误页面
          if (res.statusCode == 200) {
            app.globalData.uid = uid;
            app.globalData.pwd = pwd;
            wx.switchTab({
              url: '../classQuery/index',
            })
          } else {
            app.globalData.uid = "";
            app.globalData.pwd = "";
            wx.setStorageSync('uid', '');
            wx.setStorageSync('pwd', '');
            wx.hideToast()
          }
        }
      })
    } else {
      that.setData({
        isLoading: false
      });
    }
    
 
  },


  
  submitInfo: function(e) {
    wx.showToast({
      title: "加载中...",
      icon: "loading",
      duration: 10000
    })
    let that = this;
    app.globalData.uid = e.detail.value.uid;
    app.globalData.pwd = e.detail.value.pwd;
    if (e.detail.value.uid.length == 0 || e.detail.value.pwd.length == 0) {
      wx.showToast({
        title: '输入有误',
        image: '/images/info.png',
        icon: 'none',
        duration: 1000
      });
    } else {
      wx.showToast({
        title: "登录中...",
        icon: "loading",
        duration: 10000
      })
      wx.request({
        url: 'https://jw1.54tiancai.top/py/get_info?account=' + e.detail.value.uid + '&passwd=' + e.detail.value.pwd,
        success: function(res) {
          that.setData({
            jsonStr: res.data,
          })
          wx.hideToast()
           console.log(res.data);
          //账号密码错误以下功能实现密码错误Toast
          if (res.statusCode != 200) {
            wx.showToast({
              title: '系统异常',
              image: '/images/info.png',
              icon: 'none',
              duration: 1000
            });
          } else {
            //设置本地Storage,维持登录态用
            wx.setStorageSync('uid', e.detail.value.uid);
            wx.setStorageSync('pwd', e.detail.value.pwd);
            wx.navigateTo({
              url: '/pages/welcome/welcome?uid=' + e.detail.value.uid + '&pwd=' + e.detail.value.pwd
            })
          }
        }
      })
    }
  },
  tapHelp: function(e) {
    if (e.target.id == 'help') {
      this.hideHelp();
    }
  },
  showHelp: function(e) {
    this.setData({
      'help_status': true
    });
  },
  hideHelp: function(e) {
    this.setData({
      'help_status': false
    });
  },
  UidInput: function(e) {
    if (e.detail.value.length >= 11) {
      wx.hideKeyboard();
    }
  },
  inputFocus: function(e) {
    if (e.target.id == 'userid') {
      this.setData({
        'userid_focus': true
      });
    } else if (e.target.id == 'passwd') {
      this.setData({
        'passwd_focus': true
      });
    }
  },
  inputBlur: function(e) {
    if (e.target.id == 'userid') {
      this.setData({
        'userid_focus': false
      });
    } else if (e.target.id == 'passwd') {
      this.setData({
        'passwd_focus': false
      });
    }
  },
})