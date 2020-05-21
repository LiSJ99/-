var app = getApp();

let bearings = [
  {
    id: '1',
    name: '轴承1',
    color: 'red',
    status: '内圈故障',
    num:'108'
  },
  {
    id: '2',
    num: '',
    name: '轴承2',
    color: 'red',
    status: '外圈故障',
    num: '121'
  },
  {
    id: '3',
    num: '',
    name: '轴承3',
    color: 'green',
    status: '正常',
    num: '133'
  },
  {
    id: '4',
    num: '',
    name: '轴承4',
    color: 'green',
    status: '正常',
    num: '188'
  },
  {
    id: '5',
    num: '',
    name: '轴承5',
    color: 'green',
    status: '正常',
    num: '225'
  },
  {
    id: '6',
    num: '',
    name: '轴承6',
    color: 'red',
    status: '滚珠故障',
    num: '261'
  }
]

function getMyFavorites() {
  let info = wx.getStorageInfoSync()  //读取本地缓存信息
  let keys = info.keys    //获取全部key信息 
  let num = keys.length   

  let myList = [];
  for (var i = 0; i < num; i++) {
    let obj = wx.getStorageSync(keys[i])
    myList.push(obj)
  }
  return myList;
}

function getMyNormalFavorites() {
  let info = wx.getStorageInfoSync()  //读取本地缓存信息
  let keys = info.keys    //获取全部key信息 
  let num = keys.length

  let myList = [];
  for (var i = 0; i < num; i++) {
    if (wx.getStorageSync(keys[i]).status == '正常') {
      let obj = wx.getStorageSync(keys[i])
      myList.push(obj)
    }
  }
  return myList;
}

function getMyFaultFavorites() {
  let info = wx.getStorageInfoSync()  //读取本地缓存信息
  let keys = info.keys    //获取全部key信息 
  let num = keys.length

  let myList = [];
  for (var i = 0; i < num; i++) {
    if (wx.getStorageSync(keys[i]).status != '正常') {
      let obj = wx.getStorageSync(keys[i])
      myList.push(obj)
    }
  }
  return myList;
}


function formatTime(date) {
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()

  var hour = date.getHours()
  var minute = date.getMinutes()
  var second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

function formatNumber(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}


function refresh()
{
  if (app.globalData.bearing1 == 0) {
    bearings[0].status = '正常';
    bearings[0].color = 'green';
    bearings[0].image = '/images/轴承.png';
  }
  else if (app.globalData.bearing1 == 1){
    bearings[0].status = '滚珠故障';
    bearings[0].color = 'red';
    bearings[0].image = '/images/滚动体.png';
  }
  else if (app.globalData.bearing1 == 2) {
    bearings[0].status = '外圈故障';
    bearings[0].color = 'red';
    bearings[0].image = '/images/外圈.png';
  }
  else if (app.globalData.bearing1 == 3) {
    bearings[0].status = '内圈故障';
    bearings[0].color = 'red';
    bearings[0].image = '/images/内圈.png';
  }

  if (app.globalData.bearing2 == 0) {
    bearings[1].status = '正常';
    bearings[1].color = 'green';
    bearings[1].image = '/images/轴承.png';
  }
  else if (app.globalData.bearing2 == 1) {
    bearings[1].status = '滚珠故障';
    bearings[1].color = 'red';
    bearings[1].image = '/images/滚动体.png';
  }
  else if (app.globalData.bearing2 == 2) {
    bearings[1].status = '外圈故障';
    bearings[1].color = 'red';
    bearings[1].image = '/images/外圈.png';
  }
  else if (app.globalData.bearing2 == 3) {
    bearings[1].status = '内圈故障';
    bearings[1].color = 'red';
    bearings[1].image = '/images/内圈.png';
  }

  if (app.globalData.bearing3 == 0) {
    bearings[2].status = '正常';
    bearings[2].color = 'green';
    bearings[2].image = '/images/轴承.png';
  }
  else if (app.globalData.bearing3 == 1) {
    bearings[2].status = '滚珠故障';
    bearings[2].color = 'red';
    bearings[2].image = '/images/滚动体.png';
  }
  else if (app.globalData.bearing3 == 2) {
    bearings[2].status = '外圈故障';
    bearings[2].color = 'red';
    bearings[2].image = '/images/外圈.png';
  }
  else if (app.globalData.bearing3 == 3) {
    bearings[2].status = '内圈故障';
    bearings[2].color = 'red';
    bearings[2].image = '/images/内圈.png';
  }

  if (app.globalData.bearing4 == 0) {
    bearings[3].status = '正常';
    bearings[3].color = 'green';
    bearings[3].image = '/images/轴承.png';
  }
  else if (app.globalData.bearing4 == 1) {
    bearings[3].status = '滚珠故障';
    bearings[3].color = 'red';
    bearings[3].image = '/images/滚动体.png';
  }
  else if (app.globalData.bearing4 == 2) {
    bearings[3].status = '外圈故障';
    bearings[3].color = 'red';
    bearings[3].image = '/images/外圈.png';
  }
  else if (app.globalData.bearing4 == 3) {
    bearings[3].status = '内圈故障';
    bearings[3].color = 'red';
    bearings[3].image = '/images/内圈.png';
  }

  if (app.globalData.bearing5 == 0) {
    bearings[4].status = '正常';
    bearings[4].color = 'green';
    bearings[4].image = '/images/轴承.png';
  }
  else if (app.globalData.bearing5 == 1) {
    bearings[4].status = '滚珠故障';
    bearings[4].color = 'red';
    bearings[4].image = '/images/滚动体.png';
  }
  else if (app.globalData.bearing5 == 2) {
    bearings[4].status = '外圈故障';
    bearings[4].color = 'red';
    bearings[4].image = '/images/外圈.png';
  }
  else if (app.globalData.bearing5 == 3) {
    bearings[4].status = '内圈故障';
    bearings[4].color = 'red';
    bearings[4].image = '/images/内圈.png';
  }

  if (app.globalData.bearing6 == 0) {
    bearings[5].status = '正常';
    bearings[5].color = 'green';
    bearings[5].image = '/images/轴承.png';
  }
  else if (app.globalData.bearing6 == 1) {
    bearings[5].status = '滚珠故障';
    bearings[5].color = 'red';
    bearings[5].image = '/images/滚动体.png';
  }
  else if (app.globalData.bearing6 == 2) {
    bearings[5].status = '外圈故障';
    bearings[5].color = 'red';
    bearings[5].image = '/images/外圈.png';
  }
  else if (app.globalData.bearing6 == 3) {
    bearings[5].status = '内圈故障';
    bearings[5].color = 'red';
    bearings[5].image = '/images/内圈.png';
  }
}

//获取轴承列表
function getBearingList()
{
  refresh();
  let list = [];
  for( var i = 0; i < bearings.length; i++){
    let obj = {};
    obj.id = bearings[i].id;
    obj.name = bearings[i].name;
    obj.color = bearings[i].color;
    obj.status = bearings[i].status;
    list.push(obj);
  }
 
  return list;
}

function getNormalList() {
  let list = [];
  for (var i = 0; i < bearings.length; i++) {
    if (bearings[i].status == '正常') {
       let obj = {};
       obj.id = bearings[i].id;
       obj.name = bearings[i].name;
       obj.color = bearings[i].color;
       obj.status = bearings[i].status;
       list.push(obj);
    }
  }
  return list;
}

function next(arr){
  
}

function getFaultList() {
  let list = [];
  for (var i = 0; i < bearings.length; i++) {
    if (bearings[i].status != '正常') {
    let obj = {};
    obj.id = bearings[i].id;
    obj.name = bearings[i].name;
    obj.color = bearings[i].color;
    obj.status = bearings[i].status;
    list.push(obj);
    }
  }
  return list;
}

//获取轴承内容
function getBearingDetail(bearingID)
{
  refresh();
  let message = {
    code:'404',
    bearing:{}
  };
  for (var i = 0; i < bearings.length; i++){
    if (bearingID == bearings[i].id ){
      message.code = '200',
      message.bearing = bearings[i];
      break;
    }
  }
  return message;
}

function getBearingNum()
{
  let num = bearings.length;
  return num;
}


function getNormalNum() {
  refresh();
  let num = 0;
  for (var i = 0; i < bearings.length; i++) {
    if (bearings[i].status == '正常') {
      num++;
    }
  }
  return num;
}

function getFaultNum() {
  refresh();
  let num = 0;
  for (var i = 0; i < bearings.length; i++) {
    if (bearings[i].status != '正常') {
      num++;
    }
  }
  return num;
}


module.exports = {
  getBearingList:getBearingList,
  getBearingDetail:getBearingDetail,
  getBearingNum: getBearingNum,
  getNormalNum: getNormalNum,
  getFaultNum: getFaultNum,
  getNormalList: getNormalList,
  getFaultList: getFaultList,
  refresh: refresh,
  formatTime: formatTime,
  getMyFavorites: getMyFavorites,
  getMyNormalFavorites: getMyNormalFavorites,
  getMyFaultFavorites: getMyFaultFavorites
  // rearrange: rearrange
}
