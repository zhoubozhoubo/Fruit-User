<template>
  <div class="container">
    <i-row i-class="goods_list">
      <i-col span="22" offset="1" i-class="title">
        <p>商品信息</p>
      </i-col>
      <i-col span="22" offset="1" i-class="goods border_top_none">
        <img src="../../../static/images/yt.jpg"/>
        <p class="name">商品名称</p>
        <p class="describe">商品描述商品描述商品描述商品描述</p>
        <span class="money">￥2.00</span>
        <span class="number">×3</span>
      </i-col>
      <i-col span="22" offset="1" i-class="goods">
        <img src="../../../static/images/yt.jpg"/>
        <p class="name">商品名称</p>
        <p class="describe">商品描述商品描述商品描述商品描述</p>
        <span class="money">￥2.00</span>
        <span class="number">×3</span>
      </i-col>
      <i-col span="22" offset="1" i-class="goods">
        <img src="../../../static/images/yt.jpg"/>
        <p class="name">商品名称</p>
        <p class="describe">商品描述商品描述商品描述商品描述</p>
        <span class="money">￥2.00</span>
        <span class="number">×3</span>
      </i-col>
    </i-row>
    <i-row i-class="submit_orders">
      <i-col span="16">
        <p class="total_money">￥189.00</p>
      </i-col>
      <i-col span="8">
        <i-button type="error" long="true" @click="goPay">去支付</i-button>
      </i-col>
    </i-row>
    <i-row i-class="address_info">
      <i-col span="22" offset="1" i-class="title">
        <p>收货信息</p>
      </i-col>
      <i-col span="6" offset="1">
        <span>联系人：</span>
      </i-col>
      <i-col span="15">
        <span>周波</span>
      </i-col>
      <i-col span="6" offset="1">
        <span>联系电话：</span>
      </i-col>
      <i-col span="15">
        <span>18328607281</span>
      </i-col>
      <i-col span="6" offset="1">
        <span>收货地址：</span>
      </i-col>
      <i-col span="15">
        <span>收货人地址收货人地址收货人地址</span>
      </i-col>
    </i-row>
    <i-row i-class="orders_info">
      <i-col span="22" offset="1" i-class="title">
        <p>订单信息</p>
      </i-col>
      <i-col span="22" offset="1">
        <span class="label_left">下单时间：</span><span class="label_right">2019-04-20 12:00:00</span>
      </i-col>
      <i-col span="22" offset="1">
        <span class="label_left">订单号：</span><span class="label_right">123151345234</span>
      </i-col>
      <i-col span="22" offset="1">
        <span class="label_left">商品总价：</span><span class="label_right">￥189.00</span>
      </i-col>
      <i-col span="22" offset="1">
        <span class="label_left">订单运费：</span><span class="label_right">￥189.00</span>
      </i-col>
      <i-col span="22" offset="1">
        <span class="label_left">订单总价：</span><span class="label_right">￥189.00</span>
      </i-col>
    </i-row>
    <i-toast id="toast" />
  </div>
</template>

<script>

export default {
  data () {
    return {
    }
  },

  components: {
  },

  methods: {
    // 去支付
    goPay () {
      console.log('goPay')
    }
  },

  created () {
  }
}
</script>

<style scoped>

</style>
<style>
  .title{
    margin-bottom: 5px;
  }
  .title>p{
    float:left;
    font-size: 16px;
    line-height:30px;
    border-bottom:2px solid #19be6b;
  }
  .label_left{
    float: left;
    font-size: 14px;
    color: #495060;
    line-height: 25px;
  }
  .label_right{
    float: right;
    font-size: 14px;
    color: #495060;
    line-height: 25px;
  }
  .goods_list{
    padding: 5px 0;
    background-color: #FFFFFF;
  }
  .goods_list .border_top_none{
    border-top: none!important;
  }
  .goods_list .goods{
    position: relative;
    padding: 10px 0;
    border-top: 1px solid #e9eaec;
  }
  .goods_list .goods>img{
    width: 80px;
    height: 80px;
    float: left;
    margin-right: 10px;
  }
  .goods_list .goods>.name{
    font-size: 16px;
    color: #1c2438;
  }
  .goods_list .goods>.describe{
    font-size: 12px;
    color: #495060;
  }
  .goods_list .goods>.money{
    position: absolute;
    bottom: 10px;
    left: 90px;
    font-size: 18px;
    color: #ed3f14;
  }
  .goods_list .goods>.number{
    position: absolute;
    bottom: 10px;
    right: 0;
    font-size: 14px;
    color: #495060;
  }
  .address_info{
    padding: 5px 0;
    margin-top: 10px;
    font-size: 14px;
    background-color: #FFFFFF;
  }
  .address_info span{
    color: #495060;
    line-height: 25px;
  }
  .orders_info{
    padding: 5px 0;
    margin-top: 10px;
    margin-bottom: 44px;
    font-size: 14px;
    background-color: #FFFFFF;
  }


  .submit_orders{
    position: fixed;
    bottom: 0;
    width: 100%;
    background-color: #FFFFFF;
  }
  .submit_orders .total_money{
    border-top:1px solid #e9eaec;
    padding-left: 10px;
    line-height:39px;
    font-size:26px;
    color: #ed3f14;
  }
</style>
