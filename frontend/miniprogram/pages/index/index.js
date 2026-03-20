//index.js
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
            newsList: res.data.slice(0, 5) // 只显示前5条新闻
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

  goToNews: function () {
    wx.navigateTo({
      url: '/pages/news/news'
    });
  },

  goToTools: function () {
    wx.navigateTo({
      url: '/pages/tools/tools'
    });
  },

  goToTech: function () {
    wx.navigateTo({
      url: '/pages/profile/profile'
    });
  },

  viewNewsDetail: function (e) {
    const newsId = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: `/pages/news/detail?id=${newsId}`
    });
  }
})