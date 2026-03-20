// pages/news/news.js
Page({
  data: {
    newsList: []
  },

  onLoad: function () {
    this.fetchNews();
  },

  fetchNews: function () {
    const app = getApp();
    wx.request({
      url: `${app.globalData.apiBaseUrl}/news/latest`,
      method: 'GET',
      success: (res) => {
        if (res.statusCode === 200) {
          this.setData({
            newsList: res.data
          });
        } else {
          console.error('Failed to fetch news:', res);
        }
      },
      fail: (err) => {
        console.error('Request failed:', err);
      }
    });
  },

  viewNewsDetail: function (e) {
    const newsId = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: `/pages/news/detail?id=${newsId}`
    });
  }
})