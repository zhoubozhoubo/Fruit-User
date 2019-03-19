<template>
  <div class="container">
    <i-row>
      <i-col span="24">
        <img mode="widthFix" class="goods_banner" src="../../../static/images/banner@2x.png"/>
      </i-col>
    </i-row>
    <i-row i-class="goods_type_list">
      <i-col span="6" i-class="item">
        <img src="../../../static/images/goods_type.png"/>
        <p>剪发</p>
      </i-col>
      <i-col span="6" i-class="item">
        <img src="../../../static/images/goods_type.png"/>
        <p>剪发</p>
      </i-col>
      <i-col span="6" i-class="item">
        <img src="../../../static/images/goods_type.png"/>
        <p>剪发</p>
      </i-col>
      <i-col span="6" i-class="item">
        <img src="../../../static/images/goods_type.png"/>
        <p>剪发</p>
      </i-col>
    </i-row>
    <i-row>
      <i-col span="22" offset="1" i-class="goods_today_recommend">
        <h1>
          <i-icon type="collection_fill" size="20" color="#ff9900"/>
          今日推荐
        </h1>
      </i-col>
    </i-row>
    <i-row i-class="goods_list">
      <i-col span="22" offset="1" i-class="item">
        <img src="../../../static/images/banner@2x.png"/>
        <i-icon type="add" size="30"/>
        <h2 class="name">商品名称</h2>
        <h3 class="describe">商品描述商品描述商品描述商品描述</h3>
        <p>
          <span class="money">￥2.00</span>
          <span class="original_money">￥2.00</span>
        </p>
        <span class="number">已销售1000</span>
      </i-col>
    </i-row>
    <i-row i-class="goods_list">
      <i-col span="22" offset="1" i-class="item">
        <img src="../../../static/images/banner@2x.png"/>
        <i-icon type="add" size="30"/>
        <h2 class="name">商品名称</h2>
        <h3 class="describe">商品描述商品描述商品描述商品描述</h3>
        <p>
          <span class="money">￥2.00</span>
          <span class="original_money">￥2.00</span>
        </p>
        <span class="number">已销售1000</span>
      </i-col>
    </i-row>
    <i-row i-class="goods_list">
      <i-col span="22" offset="1" i-class="item">
        <img src="../../../static/images/banner@2x.png"/>
        <i-icon type="add" size="30"/>
        <h2 class="name">商品名称</h2>
        <h3 class="describe">商品描述商品描述商品描述商品描述</h3>
        <p>
          <span class="money">￥2.00</span>
          <span class="original_money">￥2.00</span>
        </p>
        <span class="number">已销售1000</span>
      </i-col>
    </i-row>
  </div>
</template>

<script>
  export default {
    data () {
      return {}
    },

    components: {},

    methods: {},

    created () {
    }
  }
</script>

<style scoped>
</style>

<style>
  .goods_banner {
    width: 100%;
    float: left;
  }

  .goods_type_list {
    background-color: #FFFFFF;
  }

  .goods_type_list .item {
    margin: 10px 0;
    text-align: center;
  }

  .goods_type_list .item > img {
    width: 50px;
    height: 50px;
  }

  .goods_type_list .item > p {
    font-size: 14px;
    color: #1c2438;
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
    margin-bottom: 10px;
    padding: 10px 0;
    background-color: #FFFFFF;
  }

  .goods_list .item {
    position: relative;
  }

  .goods_list .item > img {
    width: 100px;
    height: 100px;
    float: left;
    margin-right: 10px;
  }

  .goods_list .item > i-icon {
    float: right;
    margin-left: 10px;
    line-height: 100px;
    color: #19be6b;
  }

  .goods_list .item > .name {
    font-size: 16px;
    font-weight: normal;
    color: #1c2438;
  }

  .goods_list .item > .describe {
    font-size: 14px;
    font-weight: normal;
    color: #495060;
  }

  .goods_list .item > p {
    position: absolute;
    bottom: 0;
    margin-left: 110px;
  }

  .goods_list .item > p > .money {
    font-size: 18px;
    color: #ed3f14;
  }

  .goods_list .item > p > .original_money {
    margin-left: 10px;
    font-size: 14px;
    color: #495060;
    text-decoration: line-through;
  }

  .goods_list .item > .number {
    position: absolute;
    bottom: 0;
    right: 0;
    margin-right: 10px;
    font-size: 14px;
    color: #1c2438;
  }
</style>
