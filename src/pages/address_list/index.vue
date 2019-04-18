<template>
  <div class="container">
    <i-row i-class="del">
      <i-col span="22" offset="1">
          <i-col span="6" i-class="delete">
            <p><i-icon type="coordinates" size="20" color="#19be6b"/>收货地址</p>
          </i-col>
      </i-col>
    </i-row>
    <i-row i-class="address_list"
           v-for="(address, addressIndex) in addressList"
           :key="addressIndex"
           @click="chooseAddress(addressIndex)">
      <i-col span="22" offset="1" i-class="item">
        <i-icon type="success_fill" size="30" color="#19be6b" v-if="chooseIndex === addressIndex"/>
        <p class="contact">{{address.name}}<span class="phone">{{address.phone}}</span></p>
        <p class="address_com">{{address.address_com}}</p>
      </i-col>
    </i-row>
    <i-row i-class="bottom">
      <i-col span="24">
        <i-button long="true" i-class="add_address" @click="addAddress">添加收货地址</i-button>
      </i-col>
    </i-row>
  </div>
</template>

<script>

export default {
  data () {
    return {
      // 地址列表
      addressList: [
        {
          name: '周波1',
          phone: '18328607281',
          address_com: '四川省成都市郫都区红旗大道北段76号'
        },
        {
          name: '周波2',
          phone: '18328607281',
          address_com: '四川省成都市郫都区红旗大道北段76号'
        },
        {
          name: '周波3',
          phone: '18328607281',
          address_com: '四川省成都市郫都区红旗大道北段76号'
        },
        {
          name: '周波4',
          phone: '18328607281',
          address_com: '四川省成都市郫都区红旗大道北段76号'
        }
      ],
      // 选中地址
      chooseIndex: ''
    }
  },

  components: {
  },

  methods: {
    // 选中收货地址
    chooseAddress (index) {
      this.chooseIndex = index
    },
    // 添加收货地址
    addAddress () {
      wx.navigateTo({
        url: '../aoe_address/main'
      })
    }
  },

  created () {
  }
}
</script>

<style scoped>

</style>
<style>
  .del {
    background-color: #FFFFFF;
  }
  .del .delete {
    line-height: 44px;
  }
  .del .delete > p{
    color: #1c2438;
    font-size: 14px;
  }
  .del .delete > p > i-icon view{
    float:left;
    line-height:44px;
  }
  .address_list{
    background-color: #FFFFFF;
    border-top: 1px solid #f8f8f9;
  }
  .address_list .item{
    padding: 10px 0;
  }
  .address_list .item > i-icon view{
    float: right;
    line-height: 43px;
  }
  /*.address_list .item>.address{
    font-size: 18px;
    color: #1c2438;
    font-weight: 500;
  }*/
  .address_list .item>.contact{
    font-size: 16px;
    color: #495060;
  }
  .address_list .item>.contact>.phone{
    margin-left: 10px;
    padding-left: 10px;
    border-left: 1px solid #495060;
    color: #1c2438;
    font-weight: 500;
  }
  .address_list .item>.address_com{
    font-size: 14px;
    color: #495060;
  }
  .bottom{
    position: fixed;
    width: 100%;
    bottom: 0;
    z-index: 1;
  }
  .bottom .add_address{
    font-size:18px;
    color: #FFFFFF!important;
    background-color: #19be6b!important;
  }
</style>
