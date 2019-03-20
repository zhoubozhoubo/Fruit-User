<template>
  <div class="container">
    <swiper class="index_swiper"
      :indicator-dots="swiper.indicatorDots"
      :autoplay="swiper.autoplay"
      :interval="swiper.interval"
      :duration="swiper.duration"
      :indicator-color="swiper.indicatorColor"
      :indicator-active-color="swiper.indicatorActiveColor"
    >
      <block v-for="(banner, bannerIndex) in swiper.bannerList" :key="bannerIndex">
        <swiper-item>
          <img mode="widthFix" :src="banner.img"/>
        </swiper-item>
      </block>
    </swiper>
    <i-row i-class="goods_type_list">
      <i-col span="12" i-class="item" @click="goodsList">
        <img src="../../../static/images/banner@2x.png"/>
      </i-col>
      <i-col span="12" i-class="item">
        <img src="../../../static/images/banner@2x.png"/>
      </i-col>
    </i-row>
    <i-row>
      <i-col span="22" offset="1" i-class="goods_today_recommend">
        <h1>
          <i-icon type="collection_fill" size="20" color="#ff9900"/>
          今日特价
        </h1>
      </i-col>
    </i-row>
    <i-row i-class="goods_list">
      <i-col span="8" i-class="item">
        <img src="../../../static/images/banner@2x.png"/>
        <div class="content">
          <p class="name">商品名称</p>
          <p class="number">已销售1000</p>
          <span class="money">￥2.00</span>
          <span class="buy">购买</span>
          <p class="clear"></p>
        </div>
      </i-col>
      <i-col span="8" i-class="item">
        <img src="../../../static/images/banner@2x.png"/>
        <div class="content">
          <p class="name">商品名称</p>
          <p class="number">已销售1000</p>
          <span class="money">￥2.00</span>
          <span class="buy">购买</span>
          <p class="clear"></p>
        </div>
      </i-col>
      <i-col span="8" i-class="item">
        <img src="../../../static/images/banner@2x.png"/>
        <div class="content">
          <p class="name">商品名称</p>
          <p class="number">已销售1000</p>
          <span class="money">￥2.00</span>
          <span class="buy">购买</span>
          <p class="clear"></p>
        </div>
      </i-col>
      <i-col span="8" i-class="item">
        <img src="../../../static/images/banner@2x.png"/>
        <div class="content">
          <p class="name">商品名称</p>
          <p class="number">已销售1000</p>
          <span class="money">￥2.00</span>
          <span class="buy">购买</span>
          <p class="clear"></p>
        </div>
      </i-col>
    </i-row>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        // 轮播图配置
        swiper: {
          // 指示点
          indicatorDots: true,
          // 自动播放
          autoplay: true,
          // 切换时间间隔
          interval: 3000,
          // 动画时长
          duration: 1000,
          // 指示点颜色
          indicatorColor: 'rgba(255, 255, 255, 0.3)',
          // 当前选中的指示点颜色
          indicatorActiveColor: '#FFFFFF',
          // 轮播图片列表
          bannerList: [
            {
              img: '/static/images/banner@2x.png'
            },
            {
              img: '/static/images/banner@2x.png'
            },
            {
              img: '/static/images/banner@2x.png'
            }
          ]
        }
      }
    },

    components: {},

    methods: {
      // 跳转商品列表
      goodsList () {
        wx.navigateTo({
          url: '../goods_list/main'
        })
      }
    },

    created () {
    }
  }
</script>

<style scoped>
  .index_swiper{
    height: 180px;
  }
  .index_swiper img{
    width: 100%;
  }
</style>

<style>

  .goods_type_list {
    background-color: #FFFFFF;
  }

  .goods_type_list .item {
    margin: 10px 0;
    padding: 0 10px;
  }

  .goods_type_list .item > img {
    width: 100%;
    height: 50px;
    border-radius: 8px;
  }

  .goods_today_recommend > h1 {
    font-size: 18px;
    font-weight: normal;
    line-height: 40px;
    color: #1c2438;
  }

  .goods_today_recommend > h1 > i-icon {
    float: left;
    margin-right:5px;
    line-height: 40px;
  }

  .goods_list {
    padding: 0 0 10px;
  }

  .goods_list .item {
    margin-bottom: 10px;
    padding: 0 5px;
  }

  .goods_list .item > img {
    width: 100%;
    height: 100px;
    display: block;
    margin: 0 auto;
  }

  .goods_list .item > .content {
    padding: 4px 8px 8px;
    background-color: #FFFFFF;
  }

  .goods_list .item > .content > .name {
    font-size: 14px;
    color: #1c2438;
  }

  .goods_list .item > .content > .number {
    font-size: 10px;
    line-height: 25px;
    color: #495060;
  }

  .goods_list .item > .content > .money {
    float: left;
    font-size: 14px;
    color: #ed3f14;
  }

  .goods_list .item > .content > .buy {
    float: right;
    padding: 0 4px;
    border: 1px solid #ed3f14;
    border-radius: 4px;
    font-size: 12px;
    color: #ed3f14;
  }

</style>
