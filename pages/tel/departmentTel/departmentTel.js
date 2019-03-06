// pages/tel/departmentTel.js
var base64 = require("../../../images/base64");
/**
 * 2018年3月9日 12点49分预留各部门的icon后续慢慢加，这个功能不着急
 */
Page({
  /**
   * 页面的初始数据
   */
  data: {
    //存储存储各部门电话的数组
    telNumber: [
    {
        name: '学工部（125）',
      tel: 36717468
      },
      {
        name: '教务处（235）',
        tel: 36761739
      },
      {
        name: '体育部（410）',
        tel: 37437363
      },
      {
        name: '思政部（408）',
        tel: 37437350
      },
      {
        name: '继续教育学院（9-304）',
        tel: 36713996
      },
      {
        name: '计算机系（212）',
        tel: 37437316
      },
      {
        name: '艺术设计系（106）',
        tel: 36714087
      },
      {
        name: '财经系（224）',
        tel: 36763482
      },
      {
        name: '外语系（432）',
        tel: 37437321
      },
      {
        name: '工商管理系（124）',
        tel: 36019846
      },
      {
        name: '青少年与社会工作系（316）',
        tel: 36710502
      },
      {
        name: '团委电话（学生活动中心412）',
        tel: 36762231
      },
      {
        name: '学校招生就业（学生活动中心202）',
        tel: 37250936
      },
      {
        name: '学校医务室（学生活动中心一楼）',
        tel: 37347380
      },
      {
        name: '心理咨询中心（学生活动中心406）',
        tel: 36714043
      },
      {
        name: '清水居送水（创业街）',
        tel: 13527839277
      }
    
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.setData({
      icon: base64.icon20
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

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
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },
  /**
   * 点击电话号码拨出电话事件的处理函数
   */
  callPhone: function(event) {
    wx.makePhoneCall({
      phoneNumber: event.target.id
    })
  },
  /**
   * 长按号码复制到粘贴板的处理函数
   */
  copyIt: function(event) {
    wx.setClipboardData({
      data: event.target.id
    })
    wx.showToast({
      title: '已复制到粘贴版',
      icon: 'none',
      duration: 1000
    });
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function(res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      // console.log(res.target)
    }
    return {
      title: '各系部联系电话',
      path: 'pages/tel/departmentTel',
      // imageUrl: "https://airmole.cn/wechat/wxapp/images/QueryTel.jpg"
    }
  }
})