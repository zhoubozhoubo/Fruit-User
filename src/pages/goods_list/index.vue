<template>
  <div class="container">
    <i-row>
      <i-col span="24">
        <img mode="widthFix" class="goods_banner" src="../../../static/images/banner@2x.png"/>
      </i-col>
    </i-row>
    <i-row i-class="search" :class="{menu_fixed: store_designer}">
      <i-col span="24">
        <van-search background="#FFFFFF"
          :value="searchValue"
          placeholder="请输入搜索关键词"
          use-action-slot
          @search="onSearch"
        >
          <view slot="action" @tap="onSearch">搜索</view>
        </van-search>
      </i-col>
    </i-row>
    <i-row i-class="goods_list" id="store_designer">
      <i-col span="22" offset="1" i-class="item">
        <img src="../../../static/images/banner@2x.png" @click="goodsDetails"/>
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
      return {
        // 搜索关键字
        searchValue: '',
        store_designer: false
      }
    },

    components: {},

    methods: {
      // 搜索
      onSearch () {
        console.log('onSearch')
      },
      // 跳转商品列详情
      goodsDetails () {
        wx.navigateTo({
          url: '../goods_details/main'
        })
      }
    },

    created () {
    },
    onPageScroll: function (e) {
      let that = this
      // 驻店匠人吸顶
      let storequery = wx.createSelectorQuery()
      storequery.select('#store_designer').boundingClientRect()
      storequery.exec(function (storeres) {
        if (storeres[0].top < 54) {
          that.store_designer = true
        } else {
          that.store_designer = false
        }
      })
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
  .goods_banner {
    width: 100%;
    float: left;
  }
  .search{
    margin-bottom: 10px;
  }
  .search .van-cell{
    background-color: #f8f8f9;
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
