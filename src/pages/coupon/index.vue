<template>
  <div class="container">
    <i-row id="type_bar" i-class="type_bar">
      <i-col span="24">
        <i-row :class="{menu_fixed: typeTop}">
          <i-col span="24">
            <i-tabs :current="couponType" color="#19be6b" @change="typeChange">
              <i-tab i-class="coupon_type"
                     v-for="(type, typeIndex) in couponTypeList"
                     :key="typeIndex"
                     :title="type.name"></i-tab>
            </i-tabs>
          </i-col>
        </i-row>
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
    </i-row>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        // 类型栏吸顶
        typeTop: false,
        // 当前优惠券类型
        couponType: 0,
        // 优惠券类型列表
        couponTypeList: [
          {
            name: '未使用'
          },
          {
            name: '已使用'
          },
          {
            name: '已失效'
          }
        ]
      }
    },

    components: {
    },

    methods: {
      // 优惠券类型吸顶
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
      // 改变选中优惠券类型
      typeChange (res) {
        this.couponType = res.mp.detail.key
      }
    },

    created () {
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
    height: 38px;
  }
  .coupon_type{
    padding: 0 5px;
  }
  .coupon_list{
    padding: 5px 0;
    /*margin-top: 10px;*/
    background-color: #FFFFFF;
  }
  .coupon_list .item{
    padding: 10px 20px;
    border: 4px dashed #FFFFFF;
    background-color: #19be6b;
    color: #FFFFFF;
    margin-top: 20px;
  }
  .coupon_list .item>.title{
    font-size: 20px;
  }
  .coupon_list .item>.date{
    font-size: 14px;
    margin-top: 10px;
  }
</style>
