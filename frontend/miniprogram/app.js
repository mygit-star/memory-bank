// app.js
App({
  globalData: {
    userInfo: null,
    apiBaseUrl: 'http://localhost:3000/api'
  },
  onLaunch() {
    // 小程序启动时的初始化逻辑
    console.log('App launched');
  },
  onShow() {
    // 小程序显示时的逻辑
    console.log('App shown');
  },
  onHide() {
    // 小程序隐藏时的逻辑
    console.log('App hidden');
  }
})