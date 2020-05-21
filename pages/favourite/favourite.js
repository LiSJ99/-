var common = require('../../utils/common.js')
var app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    showModalStatus: false,
    currentStatus: 0,
    bearings: [],
    normal: [],
    fault: [],
    currentTab: 0
  },



  goToDetail: function (e) {
    let id = e.currentTarget.dataset.id
    let device_num = 'device' + id
    console.log(device_num);
    wx.showLoading({
      title: '加载中',
    })
    wx.request({
      url: 'https://api.phmlearn.com/component/data/zhoucheng',
      method: "POST",
      header: {
        "Content-Type": "	application/x-www-form-urlencoded"
      },
      data: {
        "access_token": app.globalData.access_token,
        atrribute: "DE_time",
        divice_id: "119"
      },
      success: function (res) {
        console.log(res.data);
        let DE_time = res.data.data.data[0]
        wx.request({
          url: 'https://api.phmlearn.com/component/data/zhoucheng',
          method: "POST",
          header: {
            "Content-Type": "	application/x-www-form-urlencoded"
          },
          data: {
            "access_token": app.globalData.access_token,
            atrribute: "FE_time",
            divice_id: "119"
          },
          success: function (res) {
            console.log(res.data);
            let FE_time = res.data.data.data[0]
            wx.request({
              url: 'https://api.phmlearn.com/component/data/zhoucheng',
              method: "POST",
              header: {
                "Content-Type": "	application/x-www-form-urlencoded"
              },
              data: {
                "access_token": app.globalData.access_token,
                atrribute: "BA_time",
                divice_id: "119"
              },
              success: function (res) {
                console.log(res.data);
                let BA_time = res.data.data.data[0]
                let de_time = parseFloat(DE_time)
                let fe_time = parseFloat(FE_time)
                let ba_time = parseFloat(BA_time)
                wx.navigateTo({
                  url: '../detail/detail?id=' + id + '&de_time=' + de_time + '&fe_time=' + fe_time + '&ba_time=' + ba_time,
                })
                wx.hideLoading();
              }
            })
          }
        })
      }
    })
  },

  // 滚动切换标签样式
  switchTab: function (e) {
    this.setData({
      currentTab: e.detail.current
    });
    this.checkCor();
  },

  //判断当前滚动超过一屏时，设置tab标题滚动条。
  checkCor: function () {
    if (this.data.currentTab > 4) {
      this.setData({
        scrollLeft: 300
      })
    } else {
      this.setData({
        scrollLeft: 0
      })
    }
  },



  //点击切换
  clickTab0: function (e) {
    var that = this;
    if (this.data.currentTab === 0) {
      return false;
    } else {
      that.setData({
        currentTab: 0,
      })
    }
  },

  clickTab1: function (e) {
    var that = this;
    if (this.data.currentTab === 1) {
      return false;
    } else {
      that.setData({
        currentTab: 1,
      })
    }
  },

  clickTab2: function (e) {
    var that = this;
    if (this.data.currentTab === 2) {
      return false;
    } else {
      that.setData({
        currentTab: 2,
      })
    }
  },


  powerDrawer: function (e) {
    wx.showModal({
      title: '导出数据',
      content: '轴承1 故障\n 轴承2 故障\n 轴承3 正常\n 轴承4 正常\n 轴承5 正常\n 轴承6 正常\n 轴承7 正常',
      success(res) {
        if (res.confirm) {
          console.log('用户点击确定')
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },



  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let list = common.getMyFavorites()
    let list_normal = common.getMyNormalFavorites()
    let list_fault = common.getMyFaultFavorites()
    // console.log(list)
    this.setData({
      bearings: list,
      normal: list_normal,
      fault: list_fault
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
    wx.setNavigationBarTitle({
      title: '收藏列表'
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
  //下拉刷新
  onPullDownRefresh: function () {
    var that = this;
    wx.showLoading({
      title: '正在处理中',
    })
    wx.request({
      url: 'https://api.phmlearn.com/component/upload/2/167',
      method: "POST",
      header: {
        "Content-Type": "	application/x-www-form-urlencoded"
      },
      data: {
        "access_token": app.globalData.access_token,
        "file_name": app.globalData.input_fileName1
      },
      success: function (res) {
        console.log(res.data);
        app.globalData.output_fileName1 = res.data.data.file_name;
        wx.request({
          url: 'https://api.phmlearn.com/component/upload/ML/model/93/170',
          method: "POST",
          header: {
            "Content-Type": "	application/x-www-form-urlencoded"
          },
          data: {
            "access_token": app.globalData.access_token,
            "file_name": app.globalData.output_fileName1
          },
          success: function (res) {
            console.log(res.data);
            app.globalData.bearing1 = res.data.data.predict[0];
          }
        })
      }
    })
    wx.request({
      url: 'https://api.phmlearn.com/component/upload/2/167',
      method: "POST",
      header: {
        "Content-Type": "	application/x-www-form-urlencoded"
      },
      data: {
        "access_token": app.globalData.access_token,
        "file_name": app.globalData.input_fileName2
      },
      success: function (res) {
        console.log(res.data);
        app.globalData.output_fileName2 = res.data.data.file_name;
        wx.request({
          url: 'https://api.phmlearn.com/component/upload/ML/model/93/170',
          method: "POST",
          header: {
            "Content-Type": "	application/x-www-form-urlencoded"
          },
          data: {
            "access_token": app.globalData.access_token,
            "file_name": app.globalData.output_fileName2
          },
          success: function (res) {
            console.log(res.data);
            app.globalData.bearing2 = res.data.data.predict[0];
          }
        })
      }
    })
    wx.request({
      url: 'https://api.phmlearn.com/component/upload/2/167',
      method: "POST",
      header: {
        "Content-Type": "	application/x-www-form-urlencoded"
      },
      data: {
        "access_token": app.globalData.access_token,
        "file_name": app.globalData.input_fileName3
      },
      success: function (res) {
        console.log(res.data);
        app.globalData.output_fileName3 = res.data.data.file_name;
        wx.request({
          url: 'https://api.phmlearn.com/component/upload/ML/model/93/170',
          method: "POST",
          header: {
            "Content-Type": "	application/x-www-form-urlencoded"
          },
          data: {
            "access_token": app.globalData.access_token,
            "file_name": app.globalData.output_fileName3
          },
          success: function (res) {
            console.log(res.data);
            app.globalData.bearing3 = res.data.data.predict[0];
          }
        })
      }
    })
    wx.request({
      url: 'https://api.phmlearn.com/component/upload/2/167',
      method: "POST",
      header: {
        "Content-Type": "	application/x-www-form-urlencoded"
      },
      data: {
        "access_token": app.globalData.access_token,
        "file_name": app.globalData.input_fileName4
      },
      success: function (res) {
        console.log(res.data);
        app.globalData.output_fileName4 = res.data.data.file_name;
        wx.request({
          url: 'https://api.phmlearn.com/component/upload/ML/model/93/170',
          method: "POST",
          header: {
            "Content-Type": "	application/x-www-form-urlencoded"
          },
          data: {
            "access_token": app.globalData.access_token,
            "file_name": app.globalData.output_fileName4
          },
          success: function (res) {
            console.log(res.data);
            app.globalData.bearing4 = res.data.data.predict[0];
          }
        })
      }
    })
    wx.request({
      url: 'https://api.phmlearn.com/component/upload/2/167',
      method: "POST",
      header: {
        "Content-Type": "	application/x-www-form-urlencoded"
      },
      data: {
        "access_token": app.globalData.access_token,
        "file_name": app.globalData.input_fileName5
      },
      success: function (res) {
        console.log(res.data);
        app.globalData.output_fileName5 = res.data.data.file_name;
        wx.request({
          url: 'https://api.phmlearn.com/component/upload/ML/model/93/170',
          method: "POST",
          header: {
            "Content-Type": "	application/x-www-form-urlencoded"
          },
          data: {
            "access_token": app.globalData.access_token,
            "file_name": app.globalData.output_fileName5
          },
          success: function (res) {
            console.log(res.data);
            app.globalData.bearing5 = res.data.data.predict[0];
          }
        })
      }
    })
    wx.request({
      url: 'https://api.phmlearn.com/component/upload/2/167',
      method: "POST",
      header: {
        "Content-Type": "	application/x-www-form-urlencoded"
      },
      data: {
        "access_token": app.globalData.access_token,
        "file_name": app.globalData.input_fileName6
      },
      success: function (res) {
        console.log(res.data);
        app.globalData.output_fileName6 = res.data.data.file_name;
        wx.request({
          url: 'https://api.phmlearn.com/component/upload/ML/model/93/170',
          method: "POST",
          header: {
            "Content-Type": "	application/x-www-form-urlencoded"
          },
          data: {
            "access_token": app.globalData.access_token,
            "file_name": app.globalData.output_fileName6
          },
          complete(res) {
            setTimeout(function () {
              wx.hideLoading();
            }, 1000)

          },
          success: function (res) {
            console.log(res.data);
            app.globalData.bearing6 = res.data.data.predict[0];

          }
        })
      }
    })
    let list = common.getBearingList()
    let list_normal = common.getNormalList()
    let list_fault = common.getFaultList()
    // console.log(list)
    this.setData({
      bearings: list,
      normal: list_normal,
      fault: list_fault
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