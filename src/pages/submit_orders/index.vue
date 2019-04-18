<template>
  <div class="container">
    <i-row i-class="address" @click="chooseAddress">
      <i-col span="3" i-class="address_icon">
        <i-icon type="coordinates_fill" size="40" color="#19be6b"/>
      </i-col>
      <i-col span="18">
        <p class="contact">周波<span class="phone">18328607281</span></p>
        <p class="address_com">四川省成都市郫都区红旗大道北段76号</p>
      </i-col>
      <i-col span="3" i-class="address_icon">
        <i-icon type="enter" size="20" color="#19be6b"/>
      </i-col>
    </i-row>
    <i-row i-class="goods_list">
      <i-col span="22" offset="1" i-class="goods border_top_none">
        <img src="../../../static/images/yt.jpg"/>
        <p class="name">商品名称</p>
        <p class="describe">商品描述商品描述商品描述商品描述</p>
        <span class="money">￥2.00</span>
        <span class="number">×3</span>
        <van-stepper value="4" custom-class="option_number"/>
      </i-col>
      <i-col span="22" offset="1" i-class="goods">
        <img src="../../../static/images/yt.jpg"/>
        <p class="name">商品名称</p>
        <p class="describe">商品描述商品描述商品描述商品描述</p>
        <span class="money">￥2.00</span>
        <span class="number">×3</span>
        <van-stepper value="4" custom-class="option_number"/>
      </i-col>
      <i-col span="22" offset="1" i-class="goods">
        <img src="../../../static/images/yt.jpg"/>
        <p class="name">商品名称</p>
        <p class="describe">商品描述商品描述商品描述商品描述</p>
        <span class="money">￥2.00</span>
        <span class="number">×3</span>
        <van-stepper value="4" custom-class="option_number"/>
      </i-col>
    </i-row>
    <i-row i-class="coupon">
      <i-col span="17" offset="1">
        <p>优惠券</p>
      </i-col>
      <i-col span="3">
        <p>无可用</p>
      </i-col>
      <i-col span="1">
        <i-icon type="more" size="40" color="#19be6b" @click="showCoupon"/>
      </i-col>
    </i-row>
    <i-row i-class="goods_money">
      <i-col span="18" offset="1">
        <p>商品金额</p>
      </i-col>
      <i-col span="4">
        <p class="money">￥189.00</p>
      </i-col>
    </i-row>
    <i-row i-class="pay_way">
      <i-col span="18" offset="1">
        <p>支付方式</p>
      </i-col>
      <i-col span="4">
        <p class="wechat_pay">微信支付</p>
      </i-col>
    </i-row>
    <i-row i-class="submit_orders">
      <i-col span="16">
        <p class="total_money">￥189.00</p>
      </i-col>
      <i-col span="8">
        <i-button type="error" long="true" @click="submitOrders">提交订单</i-button>
      </i-col>
    </i-row>
    <!--优惠券弹出层-->
    <van-popup
      :show="couponShow"
      position="bottom"
      @close="closeCoupon"
      custom-class="coupon_popup"
    >
      <i-row i-class="title">
        <i-col span="21" offset="1">
          <p>优惠券</p>
        </i-col>
        <i-col span="1">
          <i-icon type="close" size="20" color="#80848f" @click="closeCoupon"/>
        </i-col>
      </i-row>
      <i-row>
        <i-col span="24">
          <i-tabs :current="couponType" color="#19be6b" @change="typeChange">
            <i-tab i-class="coupon_type"
                   v-for="(type, typeIndex) in couponTypeList"
                   :key="typeIndex"
                   :title="type.name"></i-tab>
          </i-tabs>
        </i-col>
      </i-row>
      <i-row i-class="coupon_list">
        <i-col span="22" offset="1" i-class="item">
          <p class="title">新用户专享￥20</p>
          <p class="date">有效期限：2019/03/23 -- 2019/03/30</p>
        </i-col>
        <i-col span="22" offset="1" i-class="item">
          <p class="title">满￥100减￥20</p>
          <p class="date">有效期限：2019/03/23 -- 2019/03/30</p>
        </i-col>
        <i-col span="22" offset="1" i-class="item">
          <p class="title">满￥100减￥20</p>
          <p class="date">有效期限：2019/03/23 -- 2019/03/30</p>
        </i-col>
        <i-col span="22" offset="1" i-class="item">
          <p class="title">满￥100减￥20</p>
          <p class="date">有效期限：2019/03/23 -- 2019/03/30</p>
        </i-col>
      </i-row>
    </van-popup>
    <i-toast id="toast" />
  </div>
</template>

<script>

export default {
  data () {
    return {
      // 优惠券弹出层状态
      couponShow: false,
      // 当前优惠券类型
      couponType: 0,
      // 优惠券类型列表
      couponTypeList: [
        {
          name: '可用优惠券'
        },
        {
          name: '不可用优惠券'
        }
      ]
    }
  },

  components: {
  },

  methods: {
    // 选择收货地址
    chooseAddress () {
      wx.navigateTo({
        url: '../address_list/main'
      })
    },
    // 弹出优惠券弹出层
    showCoupon () {
      this.couponShow = true
    },
    // 改变选中优惠券类型
    typeChange (res) {
      this.couponType = res.mp.detail.key
    },
    // 关闭优惠券弹出层
    closeCoupon () {
      this.couponShow = false
    },
    // 提交订单
    submitOrders () {
      console.log('submitOrders')
    }
  },

  created () {
  }
}
</script>

<style scoped>

</style>
<style>
  .address{
    padding: 10px 0;
    background: #FFFFFF;
  }
  .address .address_icon{
    text-align: center;
  }
  .address i-icon view{
    line-height: 40px;
  }
  .address .contact{
    font-size: 16px;
    color: #495060;
  }
  .address .contact .phone{
    margin-left: 10px;
    padding-left: 10px;
    border-left: 1px solid #495060;
    color: #1c2438;
    font-weight: 500;
  }
  .address .address_com{
    font-size: 14px;
    color: #495060;
  }
  .goods_list{
    padding: 5px 0;
    margin-top: 10px;
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
  .goods_list .goods .option_number{
    position: absolute;
    bottom: 10px;
    right: 0;
  }
  .goods_list .goods .option_number>view{
    width: 28px;
  }
  .goods_list .goods .option_number>.van-stepper__input{
    width: 28px;
  }
  .goods_money{
    margin-top: 10px;
    background: #FFFFFF;
    font-size: 16px;
    color: #495060;
  }
  .goods_money p{
    font-size: 16px;
    color: #495060;
    line-height: 40px;
  }
  .goods_money .money{
    font-weight: bold;
  }
  .coupon{
    margin-top: 10px;
    background: #FFFFFF;
    font-size: 16px;
    color: #495060;
  }
  .coupon p{
    font-size: 16px;
    color: #495060;
    line-height: 40px;
  }
  .pay_way{
    margin-top: 10px;
    background: #FFFFFF;
    font-size: 16px;
    color: #495060;
  }
  .pay_way p{
    font-size: 16px;
    color: #495060;
    line-height: 40px;
  }
  .pay_way .wechat_pay{
    font-weight: bold;
  }
  .coupon_popup {
    padding: 10px 0;
  }
  .coupon_popup .title p{
    font-size: 16px;
    color: #1c2438;
  }
  .coupon_popup .coupon_type{
    padding: 0 5px;
  }
  .coupon_popup .coupon_list{
    height: 400px;
    overflow-y:scroll;
    background-color: #FFFFFF;
  }
  .coupon_popup .coupon_list .item{
    padding: 10px 20px;
    border: 4px dashed #FFFFFF;
    background-color: #19be6b;
    color: #FFFFFF;
    margin-top: 20px;
  }
  .coupon_popup .coupon_list .item>.title{
    font-size: 20px;
  }
  .coupon_popup .coupon_list .item>.date{
    font-size: 14px;
    margin-top: 10px;
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
