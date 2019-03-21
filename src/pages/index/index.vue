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
      <i-col span="12" i-class="item">
        <img src="../../../static/images/banner@2x.png" @click="hotGoodsList"/>
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
      <i-col span="8" i-class="item" v-for="(goods, goodsIndex) in goodsList" :key="goodsIndex">
        <img :src="goods.img"/>
        <div class="content">
          <p class="name">{{goods.name}}</p>
          <p class="number">已销售{{goods.number}}</p>
          <span class="money">￥{{goods.money}}</span>
          <span class="buy" @click="buy(goodsIndex)">购买</span>
          <p class="clear"></p>
        </div>
      </i-col>
    </i-row>
    <!--购买弹窗-->
    <i-modal :visible="buyModal.visible" :show-ok="buyModal.showOk" :show-cancel="buyModal.showCancel">
      <i-row i-class="buy_goods">
        <i-col span="22" offset="1" i-class="goods_info">
          <img :src="formItem.img">
          <h2 class="name">{{formItem.name}}</h2>
          <p>
            <span class="money">￥{{formItem.money}}</span>
            <span class="original_money">￥{{formItem.original_money}}</span>
          </p>
        </i-col>
      </i-row>
      <i-row i-class="buy_number">
        <i-col span="22" offset="1">
          数量
          <van-stepper value="1" custom-class="option_number"/>
        </i-col>
      </i-row>
      <i-row i-class="buy_bag">
        <i-col span="10" offset="1">
          <i-button type="warning" long="true" i-class="add_bag" @click="addBag">加入购物袋</i-button>
        </i-col>
        <i-col span="10" offset="2">
          <i-button type="error" long="true" i-class="now_buy" @click="nowBuy">立即购买</i-button>
        </i-col>
      </i-row>
    </i-modal>
    <i-toast id="toast" />
  </div>
</template>

<script>
  const {$Toast} = require('../../../static/iview/dist/base/index')
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
          duration: 500,
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
        },
        // 商品列表
        goodsList: [
          {
            id: 1,
            img: '/static/images/banner@2x.png',
            name: '商品名称1',
            money: '198.00',
            original_money: '148.00',
            number: '123'
          },
          {
            id: 1,
            img: '/static/images/banner@2x.png',
            name: '商品名称2',
            money: '198.00',
            original_money: '148.00',
            number: '123'
          },
          {
            id: 1,
            img: '/static/images/banner@2x.png',
            name: '商品名称3',
            money: '198.00',
            original_money: '148.00',
            number: '123'
          },
          {
            id: 1,
            img: '/static/images/banner@2x.png',
            name: '商品名称4',
            money: '198.00',
            original_money: '148.00',
            number: '123'
          },
          {
            id: 1,
            img: '/static/images/banner@2x.png',
            name: '商品名称5',
            money: '198.00',
            original_money: '148.00',
            number: 123
          }
        ],
        // 购买对话框
        buyModal: {
          visible: false,
          showOk: false,
          showCancel: false
        },
        // 初始化表单
        formItem: {
          id: 0,
          img: '',
          name: '',
          money: '',
          original_money: '',
          number: ''
        }
      }
    },

    components: {},

    methods: {
      // 跳转热卖商品列表
      hotGoodsList () {
        console.log('hotGoodsList')
        wx.navigateTo({
          url: '../goods_list/main'
        })
      },
      // 购买对话框
      buy (index) {
        console.log('buy')
        this.formItem.id = this.goodsList[index].id
        this.formItem.img = this.goodsList[index].img
        this.formItem.name = this.goodsList[index].name
        this.formItem.money = this.goodsList[index].money
        this.formItem.original_money = this.goodsList[index].original_money
        this.formItem.number = this.goodsList[index].number
        this.buyModal.visible = true
      },
      // 添加到购物袋
      addBag () {
        console.log('addBag')
        this.buyModal.visible = false
        $Toast({
          type: 'success',
          content: '加入成功'
        })
      },
      // 立即购买
      nowBuy () {
        console.log('nowBuy')
        this.buyModal.visible = false
        $Toast({
          type: 'success',
          content: '购买成功'
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

  .buy_goods .goods_info{
    position: relative;
    background-color: #f8f8f9;
  }

  .buy_goods .goods_info > img{
    width: 100px;
    height: 100px;
    float: left;
    margin-right: 10px;
  }

  .buy_goods .goods_info > .name{
    margin-top: 10px;
    font-size: 16px;
    color: #1c2438;
  }

  .buy_goods .goods_info > p{
    position: absolute;
    bottom: 5px;
    margin-left: 110px;
  }

  .buy_goods .goods_info > p > .money{
    font-size: 16px;
    color: #ed3f14;
  }

  .buy_goods .goods_info > p > .original_money{
    margin-left: 10px;
    font-size: 12px;
    color: #495060;
    text-decoration: line-through;
  }
  .buy_number {
    line-height:50px;
    border-bottom:1px solid #f8f8f9;
    margin-bottom:10px;
  }
  .buy_number .option_number{
    float: right;
  }
  .buy_number .option_number>view{
    width: 28px;
  }
  .buy_number .option_number>.van-stepper__input{
    width: 28px;
  }
  .buy_bag .add_bag{
    border-radius: 4px;
  }
  .buy_bag .now_buy{
    border-radius: 4px;
  }
</style>
