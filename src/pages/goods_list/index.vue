<template>
  <div class="container">
    <i-row>
      <i-col span="24">
        <img mode="widthFix" class="goods_banner" src="../../../static/images/banner@2x.png"/>
      </i-col>
    </i-row>
    <i-row id="search_bar" i-class="search_bar">
      <i-col span="24">
        <i-row i-class="search" :class="{menu_fixed: searchTop}">
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
      </i-col>
    </i-row>
    <i-row i-class="goods_list" v-for="(goods, goodsIndex) in goodsList" :key="goodsIndex">
      <i-col span="22" offset="1" i-class="item">
        <i-row>
          <i-col span="8">
            <img :src="goods.img" @click="goodsDetails"/>
          </i-col>
          <i-col span="15" offset="1">
            <i-row>
              <i-col span="20" @click="goodsDetails">
                <i-row>
                  <i-col span="24">
                    <h2 class="name">{{goods.name}}</h2>
                  </i-col>
                </i-row>
                <i-row>
                  <i-col span="24">
                    <h3 class="describe">{{goods.describe}}</h3>
                  </i-col>
                </i-row>
              </i-col>
              <i-col span="3" offset="1">
                <i-icon type="add" size="30" @click="addBag"/>
              </i-col>
            </i-row>
            <i-row @click="goodsDetails">
              <i-col span="6">
                <span class="money">￥{{goods.money}}</span>
              </i-col>
              <i-col span="5" offset="1">
                <span class="original_money">￥{{goods.original_money}}</span>
              </i-col>
              <i-col span="8" offset="4">
                <span class="number">已销售{{goods.number}}</span>
              </i-col>
            </i-row>
          </i-col>
        </i-row>
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
        // 商品类型id
        goodsTypeId: '',
        // 搜索关键字
        searchValue: '',
        // 搜索栏吸顶
        searchTop: false,
        // 商品列表
        goodsList: []
      }
    },

    components: {},

    methods: {
      // 获取商品列表
      getGoodsList () {
        let vm = this
        wx.request({
          url: vm.myConfig.GoodsList,
          method: 'GET',
          data: {
            goodsTypeId: vm.goodsTypeId
          },
          success (res) {
            console.log(res)
            vm.goodsList = res.data.data
          }
        })
      },
      // 搜索栏吸顶
      searchFixed () {
        let that = this
        let search = wx.createSelectorQuery()
        search.select('#search_bar').boundingClientRect()
        search.exec(function (res) {
          if (res[0].top < 0) {
            that.searchTop = true
          } else {
            that.searchTop = false
          }
        })
      },
      // 搜索
      onSearch () {
        console.log('onSearch')
      },
      // 添加到购物袋
      addBag () {
        console.log('addBag')
        $Toast({
          type: 'success',
          content: '加入成功'
        })
      },
      // 跳转商品列详情
      goodsDetails () {
        wx.navigateTo({
          url: '../goods_details/main'
        })
      }
    },
    onLoad: function (option) {
      this.goodsTypeId = option.goodsTypeId
      // 获取商品列表
      this.getGoodsList()
    },

    created () {
    },
    onPageScroll: function (e) {
      // 搜索栏吸顶
      this.searchFixed()
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
  .search_bar{
    height: 50px;
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

  .goods_list .item img {
    /*width: 100px;*/
    width: 100%;
    height: 100px;
    float: left;
    /*margin-right: 10px;*/
  }

  .goods_list .item i-icon {
    /*float: right;*/
    /*margin-left: 10px;*/
    line-height: 75px;
    color: #19be6b;
  }

  .goods_list .item .name {
    font-size: 16px;
    font-weight: normal;
    color: #1c2438;
  }

  .goods_list .item .describe {
    font-size: 14px;
    font-weight: normal;
    color: #495060;
  }

  .goods_list .item p {
    /*position: absolute;*/
    /*bottom: 0;*/
    /*margin-left: 110px;*/
  }

  .goods_list .item span {
    line-height: 24px;
  }

  .goods_list .item .money {
    font-size: 18px;
    color: #ed3f14;
  }

  .goods_list .item .original_money {
    /*margin-left: 10px;*/
    font-size: 14px;
    color: #495060;
    text-decoration: line-through;
  }

  .goods_list .item .number {
    /*position: absolute;*/
    /*bottom: 0;*/
    /*right: 0;*/
    /*margin-right: 10px;*/
    font-size: 14px;
    color: #1c2438;
  }
</style>
