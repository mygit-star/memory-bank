// pages/profile/profile.js
Page({
  data: {
    promotions: [],
    favorites: []
  },

  onLoad: function () {
    this.loadPromotions();
    this.loadFavorites();
  },

  loadPromotions: function () {
    // 模拟加载技术推广内容
    const mockPromotions = [
      {
        id: 1,
        title: "高效太阳能电池技术",
        description: "最新一代太阳能电池技术，转换效率提升至25%"
      },
      {
        id: 2,
        title: "储能系统解决方案",
        description: "先进的锂离子储能系统，适用于家庭和商业用途"
      }
    ];
    
    this.setData({
      promotions: mockPromotions
    });
  },

  loadFavorites: function () {
    // 模拟加载收藏内容
    const mockFavorites = [
      { id: 1, title: "如何选择家用太阳能系统" },
      { id: 2, title: "电动汽车充电基础设施建设要点" }
    ];
    
    this.setData({
      favorites: mockFavorites
    });
  }
})