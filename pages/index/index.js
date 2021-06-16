import {request} from '../../request/index'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 轮播图数据
    swiperList: [],
    // 导航数据
    catesList: [],
    // 楼层数据
    floorList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getSwiperList()
    this.getCateList()
    this.getFloorList()
  },

  async getSwiperList() {
    const swiperData = await request('home/swiperdata')
    this.setData({
      swiperList: swiperData.data.message
    })
  },

  async getCateList() {
    const cateData = await request('home/catitems')
    this.setData({
      catesList: cateData.data.message
    })
  },

  async getFloorList() {
    const floorData = await request('home/floordata')
    this.setData({
      floorList: floorData.data.message
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})