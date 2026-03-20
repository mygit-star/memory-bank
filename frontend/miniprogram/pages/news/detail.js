// pages/news/detail.js
Page({
  data: {
    newsDetail: null
  },

  onLoad: function (options) {
    const newsId = options.id;
    this.fetchNewsDetail(newsId);
  },

  fetchNewsDetail: function (id) {
    const app = getApp();
    wx.request({
      url: `${app.globalData.apiBaseUrl}/news/detail/${id}`,
      method: 'GET',
      success: (res) => {
        if (res.statusCode === 200) {
          this.setData({
            newsDetail: res.data
          });
        } else {
          console.error('Failed to fetch news detail:', res);
          wx.showToast({
            title: '获取资讯详情失败',
            icon: 'error'
          });
        }
      },
      fail: (err) => {
        console.error('Request failed:', err);
        wx.showToast({
          title: '请求失败',
          icon: 'error'
        });
      }
    });
  }
})