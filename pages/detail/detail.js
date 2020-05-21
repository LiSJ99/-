// pages/detail/detail.js
var common = require('../../utils/common.js')
var app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    // src: '/images/轴承.png',
    time:'',
    id: '',
    bearing: {},
    isAdd:false,
    de_time: '',
    fe_time: '',
    ba_time: ''
  },

  //添加收藏
  addFavorites: function () {
    let bearing = this.data.bearing
    wx.setStorageSync(bearing.id, bearing)
    this.setData({
      isAdd: true
    })
  },
  //取消收藏
  cancelFavorites: function () {
    let bearing = this.data.bearing
    wx.removeStorageSync(bearing.id)
    this.setData({
      isAdd: false
    })
  },

  

  goToDetail: function (e) {
    wx.navigateTo({
      url: '../history/history',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var time = common.formatTime(new Date());
    this.setData({
      id: options.id,
      time: time,
      fe_time: options.fe_time,
      de_time: options.de_time,
      ba_time: options.ba_time
    })
    let id = options.id

    //检查当前新闻是否在收藏夹中
    var newbearing = wx.getStorageSync(id)
    //已存在
    if (newbearing != '') {
      this.setData({
        isAdd: true,
        bearing: newbearing
      })
    }
    //不存在
    else {
      let result = common.getBearingDetail(id)
      //获取新闻内容
      if (result.code == '200') {
        this.setData({
          bearing: result.bearing,
          isAdd: false
        })
      }
    }
    
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
    wx.setNavigationBarTitle({
      title: '详细信息'
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