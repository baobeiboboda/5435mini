var sliderWidth = 96; // 需要设置slider的宽度，用于计算中间位置

Page({
  data: {
    tabs: ["我的任务", "待审核", "已通过", "已退回"],
    activeIndex: 0,
    sliderOffset: 0,
    sliderLeft: 0,
    pageData: [{
        "item": [],
        "url": "",
        "nextItemId": ""
      },
      {
        "item": [],
        "url": "",
        "nextItemId": ""
      },
      {
        "item": [],
        "url": "",
        "nextItemId": ""
      },
      {
        "item": [],
        "url": "",
        "nextItemId": ""
      }
    ]
  },



  onLoad: function() {
    var that = this;
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
  getItem: function(url) {
    var index = this.data.activeIndex
    var that = this;
    var tmp = "pageData[" + index + "].item";
    wx.request({
      url: url,
      method: 'POST',
      dataType: 'json',
      contentType: 'application/json',
      success(res) {
        that.setData({
          [tmp]: res.data.data
        })
      },
      fail(res) {
        that.setData({
          [tmp]: [1]
        })
      },
      complete(res) {
        console.log(that.data.pageData[0].item)
      }
    });
  },

  //todo上滑动继续请求数据(分页请求)


  //todo 顶部导航列表切换方法
  tabClick: function(e) {
    this.setData({
      sliderOffset: e.currentTarget.offsetLeft,
      activeIndex: e.currentTarget.id
    });
  },

  test: function(e) {
    var index = this.data.activeIndex;
    switch (index) {
      case 1:
    }
    this.testFunciton();
  },

  testFunciton: function() {
    console.log('success');
  },

  onLoad: function() {
    
  },
  onPullDownRefresh: function(e) {
    console.log(e);
    wx.stopPullDownRefresh();
  }
});