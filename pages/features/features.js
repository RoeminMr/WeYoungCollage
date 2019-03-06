// pages/features/features.js
var app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    uid: '',
    pwd: '',
    notices: " ",
    grids: [
      {
        name: '我的信息',
        navurl: '/pages/stuInfo/stuInfo',
        gridIcon: '/images/studentInfo.png'
      },
      {
        name: '校历/地图',
        navurl: '/pages/calendar/calendar',
        gridIcon: '/images/table.png'
      },
      // {
      //   name: '扫码找书',
      //   navurl: '/pages/bookSearch/bookInfo/isbn/iputIsbn',
      //   gridIcon: '/images/scanCode.png'
      // },
      {
        name: '成绩查询',
        navurl: '/pages/score/showScore/showScore',
        gridIcon: '/images/score_HL.png'
      },
      // {
      //   name: '电费查询',
      //   navurl: '/pages/electricity/electricityBind',
      //   gridIcon: '/images/electricity.png'
      // },
      {
        name: '通讯录',
        navurl: '/pages/tel/departmentTel/departmentTel',
        gridIcon: '/images/contacts.png'
      },
      // {
      //   name: '图书欠费',
      //   navurl: '/pages/tel/departmentTel/departmentTel',
      //   gridIcon: '/images/contacts.png'
      // },
      {
        name: '校园出行',
        navurl: '/pages/Transport/Transport',
        gridIcon: '/images/transport.png'
      },
      // {
      //   name: '圣诞帽',
      //   navurl: '/pages/sdm/index/index',
      //   gridIcon: '/images/sdm.png'
      // },
      // {
      //   name: '表白墙',
      //   navurl: '/pages/biaobai/index/index',
      //   gridIcon: '/images/sdm.png'
      // },
      {
        name: '关于我们',
        navurl: '/pages/features/about',
        gridIcon: '/images/about_HL.png'
      },
    ],
    swiperPic: [{
      url: 'http://tu.54tiancai.top/gqx/banner/banner5.jpg?e=' + Math.random()
      },
      {
        url: 'http://tu.54tiancai.top/gqx/banner/banner1.jpg?e=' + Math.random()
      },
      {
        url: 'http://tu.54tiancai.top/gqx/banner/banner2.jpg?e=' + Math.random()
      },
      {
        url: 'http://tu.54tiancai.top/gqx/banner/banner3.jpg?e=' + Math.random()
      },
      {
        url: 'http://tu.54tiancai.top/gqx/banner/banner4.jpg?e=' + Math.random()
      }
    ]
  },

  //账户注销登录
  logout: function() {
    app.globalData.uid = "";
    app.globalData.pwd = "";
    wx.setStorageSync('uid', '');
    wx.setStorageSync('pwd', '');
    wx.setStorageSync('kb', '');
    //  wx.clearStorage();
    wx.redirectTo({
      url: '/pages/index/index'
    })

    // wx.clearStorage({
    //   key: 'key',
    //   classStr: res.data,

    //   })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this;
    wx.showToast({
      title: "loading",
      icon: "loading",
      duration: 5000
    })
    that.setData({
      uid: app.globalData.uid,
      pwd: app.globalData.pwd,
    });
    wx.hideToast()


    wx.request({
      url: 'https://jw1.54tiancai.top/3/notices.php',
      success: function (res) {
        that.setData({
          notices: res.data.notices,
        })
        wx.hideToast()
        // console.log(res.data);
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    var that = this;
    that.onLoad();
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function(res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
    }
    return {
      title: '还没用过 “微广青”😱还不快来试试？',
      path: 'pages/features/features',
      success: function(res) {
        // 转发成功
      },
      fail: function(res) {
        // 转发失败
      }
    }
  }

})