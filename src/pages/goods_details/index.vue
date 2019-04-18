<template>
  <div class="container">
    <i-row>
      <i-col span="24">
        <img mode="widthFix" class="goods_img" src="../../../static/images/banner2.jpg"/>
      </i-col>
    </i-row>
    <i-row i-class="goods_info" id="goods_info">
      <i-col span="22" offset="1" i-class="info" :class="{menu_fixed: goodsInfoTop}">
        <p class="name">商品名称</p>
        <p class="describe">商品描述商品描述商品描述商品描述商品描述</p>
        <span class="money">￥24.00</span>
        <span class="original_money">￥28.00</span>
        <span class="number">销量：123件</span>
      </i-col>
    </i-row>
    <i-row i-class="goods_details">
      <i-col span="22" offset="1">
        <p>商品详情</p>
      </i-col>
    </i-row>
    <i-row i-class="goods_content">
      <i-col span="22" offset="1">
        <p>商品详情商品详情商品详情商品详情商品详情商品详情商品详情商品详情商品详情商品详情商品详情商品详情商品详情商品详情商品详情商品详情商品详情商品详情商品详情商品详情商品详情商品详情商品详情商品详情商品详情商品详情商品详情商品详情商品详情商品详情商品详情商品详情商品详情商品详情商品详情商品详情商品详情商品详情商品详情商品详情商品详情商品详情商品详情商品详情商品详情商品详情商品详情商品详情商品详情商品详情商品详情商品详情商品详情商品详情商品详情商品详情商品详情商品详情商品详情商品详情商品详情商品详情商品详情商品详情商品详情商品详情商品详情商品详情商品详情商品详情商品详情商品详情商品详情商品详情商品详情商品详情商品详情商品详情商品详情商品详情商品详情商品详情商品详情商品详情商品详情商品详情商品详情商品详情商品详情商品详情商品详情商品详情商品详情商品详情商品详情商品详情商品详情商品详情商品详情商品详情商品详情商品详情商品详情商品详情商品详情商品详情商品详情商品详情商品详情商品详情商品详情商品详情商品详情商品详情商品详情商品详情商品详情商品详情商品详情商品详情商品详情商品详情商品详情商品详情商品详情商品详情商品详情商品详情商品详情商品详情商品详情商品详情商品详情商品详情商品详情商品详情商品详情商品详情商品详情商品详情商品详情商品详情商品详情商品详情商品详情商品详情商品详情商品详情商品详情商品详情</p>
      </i-col>
    </i-row>
    <i-row i-class="bag_buy">
      <i-col span="4" i-class="bag">
        <i-icon type="service_fill" size="30" @click="goBag"/>
      </i-col>
      <i-col span="10">
        <i-button type="warning" long="true" @click="addBag">加入购物袋</i-button>
      </i-col>
      <i-col span="10">
        <i-button type="error" long="true" @click="nowBuy">立即购买</i-button>
      </i-col>
    </i-row>
    <i-toast id="toast" />
  </div>
</template>

<script>
  const {$Toast} = require('../../../static/iview/dist/base/index')
  export default {
    data () {
      return {
        goodsInfoTop: false
      }
    },

    components: {},

    methods: {
      // 商品信息栏吸顶
      goodsInfoFixed () {
        let that = this
        let goodsInfo = wx.createSelectorQuery()
        goodsInfo.select('#goods_info').boundingClientRect()
        goodsInfo.exec(function (res) {
          if (res[0].top < 30) {
            that.goodsInfoTop = true
          } else {
            that.goodsInfoTop = false
          }
        })
      },
      // 添加到购物袋
      addBag () {
        console.log('addBag')
        $Toast({
          type: 'success',
          content: '加入成功'
        })
      },
      // 跳转购物袋
      goBag () {
        console.log('goBag')
        wx.switchTab({
          url: '../bag/main'
        })
      },
      // 立即购买
      nowBuy () {
        console.log('nowBuy')
        wx.navigateTo({
          url: '../submit_orders/main'
        })
      }
    },

    created () {
    },
    onPageScroll: function (e) {
      // 商品信息栏吸顶
      this.goodsInfoFixed()
    }
  }
</script>

<style scoped>
  .goods_img {
    width: 100%;
    float: left;
  }
  .menu_fixed{
    width:100%;
    position: fixed;
    top:30px;
    z-index: 1;
  }
</style>
<style>
  .goods_info {
    height: 73px;
  }
  .goods_info .info{
    margin-top: -30px;
    padding: 8px 10px 0;
    border-radius: 5px;
    background-color: #FFFFFF;
  }
  .goods_info .info > span{
    line-height: 40px;
  }
  .goods_info .info > .name{
    font-size: 16px;
    color: #1c2438;
    line-height: 30px;
  }
  .goods_info .info > .describe{
    font-size: 14px;
    color: #ff9900;
  }
  .goods_info .info > .money{
    float: left;
    font-size: 20px;
    color: #ed3f14;
  }
  .goods_info .info > .original_money{
    float: left;
    margin-left: 10px;
    font-size: 14px;
    color: #495060;
    text-decoration: line-through ;
  }
  .goods_info .info > .number{
    float: right;
    font-size: 16px;
    color: #1c2438;
  }
  .goods_details{
    margin-top: 8px;
    font-size: 16px;
    background-color: #FFFFFF;
  }
  .goods_details p{
    float:left;
    margin-top:5px;
    line-height:30px;
    border-bottom:2px solid #19be6b;
  }
  .goods_content{
    background-color: #FFFFFF;
  }
  .bag_buy {
    position: fixed;
    bottom: 0;
    width: 100%;
    background-color: #FFFFFF;
  }
  .bag_buy .bag {
    text-align: center;
  }
  .bag_buy .bag>i-icon {
    line-height: 35px;
    color: #19be6b;
  }
</style>
