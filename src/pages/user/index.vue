<template>
  <div class="container">
    <i-row i-class="user">
      <i-col span="24" i-class="info">
        <i-row>
          <i-col span="9">
            <p class="name">用户名</p>
          </i-col>
          <i-col span="6">
            <img src="../../../static/images/banner@2x.png"/>
          </i-col>
          <i-col span="9">
            <p class="describe">普通会员</p>
          </i-col>
        </i-row>
        <!--<p class="name">用户名</p>
        <img src="../../../static/images/banner@2x.png"/>
        <p class="describe">普通会员</p>-->
      </i-col>
      <i-col span="22" offset="1" i-class="orders">
        <i-row>
          <i-col span="7" offset="1" i-class="all_orders">
            <i-icon type="document_fill" size="20" color="#19be6b"/>
            订单中心
          </i-col>
          <i-col span="7" offset="8" i-class="more_orders">
            查看全部订单
            <i-icon type="enter" />
          </i-col>
        </i-row>
        <i-row i-class="orders_manage">
          <i-col span="6">
            <i-icon type="coupons" size="40" color="#19be6b"/>
            <p>待支付</p>
          </i-col>
          <i-col span="6">
            <i-icon type="send" size="40" color="#19be6b"/>
            <p>待配送</p>
          </i-col>
          <i-col span="6">
            <i-icon type="tasklist" size="40" color="#19be6b"/>
            <p>待收货</p>
          </i-col>
          <i-col span="6">
            <i-icon type="success" size="40" color="#19be6b"/>
            <p>已完成</p>
          </i-col>
        </i-row>
      </i-col>
    </i-row>
    <i-row i-class="menu">
      <i-col span="24">
        <i-cell-group>
          <i-cell title="我的优惠券" value="2张" is-link></i-cell>
          <i-cell title="邀请好友" is-link></i-cell>
          <i-cell title="地址管理" is-link></i-cell>
          <i-cell title="交易明细" is-link></i-cell>
          <i-cell title="关于我们" is-link></i-cell>
        </i-cell-group>
      </i-col>
    </i-row>
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
  },

  created () {
  }
}
</script>

<style scoped>
</style>

<style>
  .user {
    padding-bottom: 20px;
    background-color: #FFFFFF;
  }
  .user .info{
    padding: 10px 0 0;
    margin-bottom: 10px;
    border-bottom-left-radius: 50%;
    border-bottom-right-radius: 50%;
    background-color: #19be6b;
    color: #FFFFFF;
    text-align: center;
    line-height: 70px;
  }
  .user .info img{
    width: 70px;
    height: 70px;
    border-radius: 50%;
  }
  .user .info .name{
    font-size: 16px;
    /*margin-top: 14px;*/
    /*color: #1c2438;*/
  }
  .user .info .describe{
    font-size: 12px;
    /*color: #495060;*/
  }
  .orders {
    border-radius: 8px;
    box-shadow: 0 0 15px #e9eaec;
    line-height: 40px;
  }
  .orders .all_orders{
    font-size: 16px;
    color: #1c2438;
  }
  .orders .all_orders > i-icon view{
    float: left;
    line-height: 40px;
    margin-right: 5px;
  }
  .orders .more_orders{
    text-align: right;
    font-size: 12px;
    color: #495060;
  }
  .orders .more_orders > i-icon view{
    float: right;
    line-height: 40px;
  }
  .orders_manage{
    padding: 10px 0;
    border-top: 1px solid #e9eaec;
  }
  .orders_manage i-col{
    text-align: center;
    font-size: 14px;
    color: #495060;
    line-height: 20px;
  }
  .menu{
    margin-top: 10px;
  }
</style>
