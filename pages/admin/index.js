// pages/admin/index.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    testdata: [{
        id: 1
      },
      {
        id: 2
      },
      {
        id: 3
      }
    ],
    hidden: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    console.log(1);
    console.log(app.globalData.accessToken);
  },
  test: function(event) {
    console.log(event.currentTarget.dataset.test)
    wx.navigateTo({
      url: '../timeline/timeline?id=' + event.currentTarget.dataset.test
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function(event) {
    console.log(event);
    var test = [{
        id: Math.random()
      },
      {
        id: Math.random()
      },
      {
        id: Math.random()
      },
      {
        id: Math.random()
      },
      {
        id: Math.random()
      },
      {
        id: Math.random()
      },
      {
        id: Math.random()
      },
      {
        id: Math.random()
      },
      {
        id: Math.random()
      },
      {
        id: Math.random()
      }
    ];
    test = test.concat(this.data.testdata);

    this.setData({
      testdata: test
    });
    console.log(this.data.testdata);
    wx.stopPullDownRefresh();
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {
    var that = this;
    // wx.showNavigationBarLoading()
    var test = this.data.testdata;
    this.setData({
      hidden: false
    });
    wx.request({
      url: 'http:/www.wesntele.com',
      method: 'POST',
      dataType: 'json',
      success(res) {
        console.log(res.data.data);
        test = test.concat(res.data.data)
      },
      fail(res) {
        console.log(1);
      },
      complete() {
        that.setData({
          testdata: test
        });
        that.setData({
          hidden: true
        });
      }
    })
    // test = test.concat([
    //   { id: Math.random() },
    //   { id: Math.random() },
    //   { id: Math.random() },
    //   { id: Math.random() },
    //   { id: Math.random() },
    //   { id: Math.random() },
    //   { id: Math.random() },
    //   { id: Math.random() },
    //   { id: Math.random() },
    //   { id: Math.random() }
    // ])
    //this.setData({testdata:test});
    //this.setData({ hidden: true });

    //wx.stopPullDownRefresh()
  },
  testout() {
    that.setData({
      hidden: true
    })
    return true;
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})