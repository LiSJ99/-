// pages/my/my.js
var common = require('../../utils/common.js')
var app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    number:0,
    nickName:"未登录",
    src:"/images/index1.png",
    newsList: [],
    num: 0,
    num_normal: 0,
    num_fault: 0
  },
  // 获取个人信息
  getMyInfo:function(e){
    //console.log(e.detail.userInfo)
    let info = e.detail.userInfo
    this.setData({
      src:info.avatarUrl,
      nickName:info.nickName,
      isLogin:true
    })

  },

  gotofavourite:function(e){
    wx.navigateTo({
      url: '../favourite/favourite',
    })
  },

  goToList: function (e) {
    wx.navigateTo({
      url: '../list/list',
    })
  },

  goToNormal: function (e) {
    wx.navigateTo({
      url: '../normal/normal',
    })
  },

  goToFault: function (e) {
    wx.navigateTo({
      url: '../fault/fault',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let num = common.getBearingNum()
    let num_normal = common.getNormalNum()
    let num_fault = common.getFaultNum()

    this.setData({
      num: num,
      num_normal:num_normal,
      num_fault: num_fault
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    if( this.data.isLogin ){
      this.getMyFavorites()
    }
    wx.setNavigationBarTitle({
      title: '个人中心'
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    // wx.showLoading({
    //   title: '正在处理中',
    // })
    // wx.request({
    //   url: 'https://api.phmlearn.com/component/upload/2/167',
    //   method: "POST",
    //   header: {
    //     "Content-Type": "	application/x-www-form-urlencoded"
    //   },
    //   data: {
    //     "access_token": app.globalData.access_token,
    //     "file_name": app.globalData.input_fileName1
    //   },
    //   success: function (res) {
    //     console.log(res.data);
    //     app.globalData.output_fileName1 = res.data.data.file_name;
    //     wx.request({
    //       url: 'https://api.phmlearn.com/component/upload/ML/model/93/170',
    //       method: "POST",
    //       header: {
    //         "Content-Type": "	application/x-www-form-urlencoded"
    //       },
    //       data: {
    //         "access_token": app.globalData.access_token,
    //         "file_name": app.globalData.output_fileName1
    //       },
    //       success: function (res) {
    //         console.log(res.data);
    //         app.globalData.bearing1 = res.data.data.predict[0];
    //       }
    //     })
    //   }
    // })
    // wx.request({
    //   url: 'https://api.phmlearn.com/component/upload/2/167',
    //   method: "POST",
    //   header: {
    //     "Content-Type": "	application/x-www-form-urlencoded"
    //   },
    //   data: {
    //     "access_token": app.globalData.access_token,
    //     "file_name": app.globalData.input_fileName2
    //   },
    //   success: function (res) {
    //     console.log(res.data);
    //     app.globalData.output_fileName2 = res.data.data.file_name;
    //     wx.request({
    //       url: 'https://api.phmlearn.com/component/upload/ML/model/93/170',
    //       method: "POST",
    //       header: {
    //         "Content-Type": "	application/x-www-form-urlencoded"
    //       },
    //       data: {
    //         "access_token": app.globalData.access_token,
    //         "file_name": app.globalData.output_fileName2
    //       },
    //       success: function (res) {
    //         console.log(res.data);
    //         app.globalData.bearing2 = res.data.data.predict[0];
    //       }
    //     })
    //   }
    // })
    // wx.request({
    //   url: 'https://api.phmlearn.com/component/upload/2/167',
    //   method: "POST",
    //   header: {
    //     "Content-Type": "	application/x-www-form-urlencoded"
    //   },
    //   data: {
    //     "access_token": app.globalData.access_token,
    //     "file_name": app.globalData.input_fileName3
    //   },
    //   success: function (res) {
    //     console.log(res.data);
    //     app.globalData.output_fileName3 = res.data.data.file_name;
    //     wx.request({
    //       url: 'https://api.phmlearn.com/component/upload/ML/model/93/170',
    //       method: "POST",
    //       header: {
    //         "Content-Type": "	application/x-www-form-urlencoded"
    //       },
    //       data: {
    //         "access_token": app.globalData.access_token,
    //         "file_name": app.globalData.output_fileName3
    //       },
    //       success: function (res) {
    //         console.log(res.data);
    //         app.globalData.bearing3 = res.data.data.predict[0];
    //       }
    //     })
    //   }
    // })
    // wx.request({
    //   url: 'https://api.phmlearn.com/component/upload/2/167',
    //   method: "POST",
    //   header: {
    //     "Content-Type": "	application/x-www-form-urlencoded"
    //   },
    //   data: {
    //     "access_token": app.globalData.access_token,
    //     "file_name": app.globalData.input_fileName4
    //   },
    //   success: function (res) {
    //     console.log(res.data);
    //     app.globalData.output_fileName4 = res.data.data.file_name;
    //     wx.request({
    //       url: 'https://api.phmlearn.com/component/upload/ML/model/93/170',
    //       method: "POST",
    //       header: {
    //         "Content-Type": "	application/x-www-form-urlencoded"
    //       },
    //       data: {
    //         "access_token": app.globalData.access_token,
    //         "file_name": app.globalData.output_fileName4
    //       },
    //       success: function (res) {
    //         console.log(res.data);
    //         app.globalData.bearing4 = res.data.data.predict[0];
    //       }
    //     })
    //   }
    // })
    // wx.request({
    //   url: 'https://api.phmlearn.com/component/upload/2/167',
    //   method: "POST",
    //   header: {
    //     "Content-Type": "	application/x-www-form-urlencoded"
    //   },
    //   data: {
    //     "access_token": app.globalData.access_token,
    //     "file_name": app.globalData.input_fileName5
    //   },
    //   success: function (res) {
    //     console.log(res.data);
    //     app.globalData.output_fileName5 = res.data.data.file_name;
    //     wx.request({
    //       url: 'https://api.phmlearn.com/component/upload/ML/model/93/170',
    //       method: "POST",
    //       header: {
    //         "Content-Type": "	application/x-www-form-urlencoded"
    //       },
    //       data: {
    //         "access_token": app.globalData.access_token,
    //         "file_name": app.globalData.output_fileName5
    //       },
    //       success: function (res) {
    //         console.log(res.data);
    //         app.globalData.bearing5 = res.data.data.predict[0];
    //       }
    //     })
    //   }
    // })
    // wx.request({
    //   url: 'https://api.phmlearn.com/component/upload/2/167',
    //   method: "POST",
    //   header: {
    //     "Content-Type": "	application/x-www-form-urlencoded"
    //   },
    //   data: {
    //     "access_token": app.globalData.access_token,
    //     "file_name": app.globalData.input_fileName6
    //   },
    //   success: function (res) {
    //     console.log(res.data);
    //     app.globalData.output_fileName6 = res.data.data.file_name;
    //     wx.request({
    //       url: 'https://api.phmlearn.com/component/upload/ML/model/93/170',
    //       method: "POST",
    //       header: {
    //         "Content-Type": "	application/x-www-form-urlencoded"
    //       },
    //       data: {
    //         "access_token": app.globalData.access_token,
    //         "file_name": app.globalData.output_fileName6
    //       },
    //       complete(res) {
    //         setTimeout(function () {
    //           wx.hideLoading();
    //         }, 1000)

    //       },
    //       success: function (res) {
    //         console.log(res.data);
    //         app.globalData.bearing6 = res.data.data.predict[0];

    //       }
    //     })
    //   }
    // })
    let num = common.getBearingNum()
    let num_normal = common.getNormalNum()
    let num_fault = common.getFaultNum()

    this.setData({
      num: num,
      num_normal: num_normal,
      num_fault: num_fault
    })
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})