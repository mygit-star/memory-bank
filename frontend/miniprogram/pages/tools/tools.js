// pages/tools/tools.js
Page({
  data: {
    toolsList: []
  },

  onLoad: function () {
    this.fetchTools();
  },

  fetchTools: function () {
    const app = getApp();
    wx.request({
      url: `${app.globalData.apiBaseUrl}/tools`,
      method: 'GET',
      success: (res) => {
        if (res.statusCode === 200) {
          this.setData({
            toolsList: res.data
          });
        } else {
          console.error('Failed to fetch tools:', res);
        }
      },
      fail: (err) => {
        console.error('Request failed:', err);
      }
    });
  },

  useTool: function (e) {
    const toolId = e.currentTarget.dataset.id;
    // 根据工具ID跳转到对应的工具页面
    console.log('Using tool with ID:', toolId);
    wx.showToast({
      title: '功能开发中...',
      icon: 'none'
    });
  }
})