var sliderWidth = 96; // 需要设置slider的宽度，用于计算中间位置

Page({
  data: {
    tabs: ["我的任务", "待审核", "已通过", "已退回"],
    activeIndex: 0,
    sliderOffset: 0,
    sliderLeft: 0
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
    //todo 我的任务列表
  },
  tabClick: function(e) {
    this.setData({
      sliderOffset: e.currentTarget.offsetLeft,
      activeIndex: e.currentTarget.id
    });
  },

  test: function(e){
    var index = this.data.activeIndex;
    switch(index){
      case 1:
    }
    this.testFunciton();
  },

  testFunciton: function(){
    console.log('success');
  },

  onLoad: function() {

  },
  onPullDownRefresh: function(e) {
    console.log(e);
    wx.stopPullDownRefresh();
  }
});