var sliderWidth = 96; // 需要设置slider的宽度，用于计算中间位置

Page({
  data: {
    tabs: ["我的任务", "待审核", "已通过", "已退回"],
    activeIndex: 0,
    sliderOffset: 0,
    sliderLeft: 0,
    pageData: [{
        "item": [],
        "url": "123456",
        "nowPage": 0,
        "firstId": ""
      },
      {
        "item": [],
        "url": "",
        "nowPage": 0,
        "firstId": ""
      },
      {
        "item": [],
        "url": "",
        "nowPage": 0,
        "firstId": ""
      },
      {
        "item": [],
        "url": "",
        "nowPage": 0,
        "firstId": ""
      }
    ]
  },
  onShow:function() {
   this.getItem();
  },
  onLoad: function() {
    var that = this;
    var tmp = "pageData[0].item";
    
    wx.getSystemInfo({
      success: function(res) {
        that.setData({
          sliderLeft: (res.windowWidth / that.data.tabs.length - sliderWidth) / 3,
          sliderOffset: res.windowWidth / that.data.tabs.length * that.data.activeIndex
        });
        
      }
    });
    
  },

  //todo 获取我的任务列表
  getItem: function(nowPage = 0) {
    var index = this.data.activeIndex
    var that = this;
    var tmp = "pageData[" + index + "].item";
    var url = this.data.pageData[index].url
    nowPage = nowPage + 1;
    this.setData({
      [tmp]:nowPage
    })
    wx.request({
      url: url,
      method: 'POST',
      dataType: 'json',
      contentType: 'application/json',
      data:{page: nowPage},
      success(res) {
        // that.setData({
        //   [tmp]: res.data.data
        // })
      },
      fail(res) {
        that.setData({
          //[tmp]: [1]
        })
      },
      complete(res) {
      }
    });
  },

  //todo 顶部导航列表切换方法
  tabClick: function(e) {
    this.setData({
      sliderOffset: e.currentTarget.offsetLeft,
      activeIndex: e.currentTarget.id
    });
  },


  onLoad: function() {

  },
  onPullDownRefresh: function() {
    this.getItem();
    wx.stopPullDownRefresh();
  }
});