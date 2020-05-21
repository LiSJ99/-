var common = require('../../utils/common.js')
var app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
     output:''
  },

  goToList: function (e) {
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
              wx.navigateTo({
                url: '../list/list',
              })
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

  },

  goToGraph: function (e) {
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
              wx.navigateTo({
                url: '../graph/graph',
              })
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
  },

  goToMy: function (e) {
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
              wx.navigateTo({
                url: '../my/my',
              })
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
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
      title: '轴承状态评估'
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