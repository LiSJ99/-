//app.js
App({
  onLaunch: function () {

    // if (!wx.cloud) {
    //   console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    // } else {
    //   wx.cloud.init({
    //     // env 参数说明：
    //     //   env 参数决定接下来小程序发起的云开发调用（wx.cloud.xxx）会默认请求到哪个云环境的资源
    //     //   此处请填入环境 ID, 环境 ID 可打开云控制台查看
    //     //   如不填则使用默认环境（第一个创建的环境）
    //     // env: 'my-env-id',
    //     traceUser: true,
    //   })
    // }

    this.globalData = {
      input_fileName1: 'TEST11.csv',
      input_fileName2: 'TEST21.csv',
      input_fileName3: 'TEST31.csv',
      input_fileName4: 'TEST71.csv',
      input_fileName5: 'TEST101.csv',
      input_fileName6: 'TEST131.csv',
      device1: '108',
      device2: '121',
      device3: '133',
      device4: '188',
      device5: '225',
      device6: '261',
      access_token: '64d8228f31474b11b88c51782da8729c.9e673c6ea1b9717303545ab3eba05bd3',
      output_fileName1: '',
      output_fileName2: '',
      output_fileName3: '',
      output_fileName4: '',
      output_fileName5: '',
      output_fileName6: '',
      bearing1: '',
      bearing2: '',
      bearing3: '',
      bearing4: '',
      bearing5: '',
      bearing6: '',
    }
  }
})
