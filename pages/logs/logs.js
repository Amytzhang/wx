//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    vprogress: 10,
    v_array: [
      {id: 1,name:'章鱼小丸子'},
      {id:2,name:'桂花糕'},
      {id:3,name: "干炸丸子"},
      {id:4,name:'拇指煎包'},
      {id:5,name:'桂花莲藕'},
      {id:6,name:'三色凉面'},
      {id:7,name:'贝勒爷烤肉'},
      {id:8,name:'蒜炒大肠'},
      {id:9,name:'宫保两样'},
      {id:10,name:'京八件'}
    ]
  },
  tab:function(){
    wx.switchTab({
      url: '/index'
    })
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
  }
})
