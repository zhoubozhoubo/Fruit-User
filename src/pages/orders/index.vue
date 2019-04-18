<template>
  <div class="container">
    <i-row id="type_bar" i-class="type_bar">
      <i-col span="24">
        <i-row :class="{menu_fixed: typeTop}">
          <i-col span="24">
            <i-tabs :current="ordersType" scroll color="#19be6b" @change="typeChange">
              <i-tab i-class="orders_type"
                     v-for="(type, typeIndex) in ordersTypeList"
                     :key="typeIndex"
                     :title="type.name"></i-tab>
            </i-tabs>
          </i-col>
        </i-row>
      </i-col>
    </i-row>
    <i-row i-class="orders_list">
      <i-col span="22" offset="1" i-class="title">
        <p class="number">订单号：1234567890</p>
        <p class="status">待付款</p>
      </i-col>
      <i-col span="22" offset="1" i-class="goods">
        <img src="../../../static/images/yt.jpg"/>
        <p class="name">商品名称</p>
        <p class="describe">商品描述商品描述商品描述商品描述</p>
        <span class="money">￥2.00</span>
        <span class="number">×3</span>
      </i-col>
      <i-col span="22" offset="1" i-class="goods">
        <img src="../../../static/images/pp.jpg"/>
        <p class="name">商品名称</p>
        <p class="describe">商品描述商品描述商品描述商品描述</p>
        <span class="money">￥2.00</span>
        <span class="number">×3</span>
      </i-col>
      <i-col span="22" offset="1" i-class="total">
        <p>
          共21个商品&nbsp;&nbsp;
          合计:<span class="total_money">￥29.99</span>
          （含运费:￥10.00）
        </p>
      </i-col>
      <i-col span="5" offset="13" i-class="option">
        <i-button i-class="cancel_orders" @click="nowBuy">取消订单</i-button>
      </i-col>
      <i-col span="5" i-class="option">
        <i-button i-class="pay_orders" @click="nowBuy">立即支付</i-button>
      </i-col>
    </i-row>
    <i-row i-class="orders_list">
      <i-col span="22" offset="1" i-class="title">
        <p class="number">订单号：1234567890</p>
        <p class="status">待付款</p>
      </i-col>
      <i-col span="22" offset="1" i-class="goods">
        <img src="../../../static/images/yt.jpg"/>
        <p class="name">商品名称</p>
        <p class="describe">商品描述商品描述商品描述商品描述</p>
        <span class="money">￥2.00</span>
        <span class="number">×3</span>
      </i-col>
      <i-col span="22" offset="1" i-class="goods">
        <img src="../../../static/images/pp.jpg"/>
        <p class="name">商品名称</p>
        <p class="describe">商品描述商品描述商品描述商品描述</p>
        <span class="money">￥2.00</span>
        <span class="number">×3</span>
      </i-col>
      <i-col span="22" offset="1" i-class="total">
        <p>
          共21个商品&nbsp;&nbsp;
          合计:<span class="total_money">￥29.99</span>
          （含运费:￥10.00）
        </p>
      </i-col>
      <i-col span="5" offset="13" i-class="option">
        <i-button i-class="cancel_orders" @click="nowBuy">取消订单</i-button>
      </i-col>
      <i-col span="5" i-class="option">
        <i-button i-class="pay_orders" @click="nowBuy">立即支付</i-button>
      </i-col>
    </i-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // 类型栏吸顶
      typeTop: false,
      // 当前订单类型
      ordersType: 0,
      // 订单类型列表
      ordersTypeList: [
        {
          name: '全部'
        },
        {
          name: '待支付'
        },
        {
          name: '待配送'
        },
        {
          name: '待收货'
        },
        {
          name: '已完成'
        },
        {
          name: '退款中'
        },
        {
          name: '已退款'
        },
        {
          name: '已取消'
        }
      ]
    }
  },

  components: {
  },

  methods: {
    // 订单类型吸顶
    typeFixed () {
      let that = this
      let type = wx.createSelectorQuery()
      type.select('#type_bar').boundingClientRect()
      type.exec(function (res) {
        if (res[0].top < 0) {
          that.typeTop = true
        } else {
          that.typeTop = false
        }
      })
    },
    // 改变选中订单类型
    typeChange (res) {
      console.log(res)
      this.ordersType = res.mp.detail.key
    }
  },

  created () {
  },
  onLoad (option) {
    this.ordersType = option.ordersType
  },
  onPageScroll: function (e) {
    //  订单类型吸顶
    this.typeFixed()
  }
}
</script>

<style scoped>
  .menu_fixed{
    width:100%;
    position: fixed;
    top: 0;
    z-index: 1;
  }
</style>

<style>
  .type_bar{
    height: 40px;
  }
  .orders_type{
    padding: 0 5px;
  }
  .orders_list{
    padding: 5px 0;
    margin-top: 10px;
    background-color: #FFFFFF;
  }
  .orders_list .title{
    font-size: 14px;
    line-height: 30px;
  }
  .orders_list .title>.number{
    float: left;
    color: #1c2438;
  }
  .orders_list .title>.status{
    float: right;
    color: #ed3f14;
  }
  .orders_list .goods{
    position: relative;
    padding: 10px 0;
    /*border-top: 1px solid #e9eaec;*/
  }
  .orders_list .goods>img{
    width: 80px;
    height: 80px;
    float: left;
    margin-right: 10px;
  }
  .orders_list .goods>.name{
    font-size: 16px;
    color: #1c2438;
  }
  .orders_list .goods>.describe{
    font-size: 12px;
    color: #495060;
  }
  .orders_list .goods>.money{
    position: absolute;
    bottom: 10px;
    left: 90px;
    font-size: 14px;
    color: #ed3f14;
  }
  .orders_list .goods>.number{
    position: absolute;
    bottom: 10px;
    right: 0;
    font-size: 14px;
    color: #495060;
  }
  .orders_list .total>p{
    padding-top: 5px;
    text-align: right;
    font-size: 14px;
    color: #1c2438;
    /*border-top: 1px solid #e9eaec;*/
  }
  .orders_list .total>p>.total_money{
    color: #ed3f14;
  }
  .orders_list .option .cancel_orders{
    width: 70px;
    height: auto;
    padding: 2px 5px;
    line-height: 20px;
    color: #495060!important;
    background-color: #FFFFFF!important;
    border: 1px solid #495060!important;
  }
  .orders_list .option .pay_orders{
    width: 70px;
    height: auto;
    padding: 2px 5px;
    line-height: 20px;
    color: #ed3f14!important;
    background-color: #FFFFFF!important;
    border: 1px solid #ed3f14!important;
  }
</style>
