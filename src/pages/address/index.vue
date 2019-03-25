<template>
  <div class="container">
    <i-row i-class="del">
      <i-col span="22" offset="1">
          <i-col span="6" i-class="delete">
            <p><i-icon type="coordinates" size="20" color="#19be6b"/>收货地址</p>
          </i-col>
          <i-col span="4" offset="14" i-class="delete" v-if="editShow">
            <p>删除地址</p>
          </i-col>
          <i-col span="4" offset="15" i-class="delete" v-if="!editShow">
            <i-icon type="trash" size="30" @click="del"/>
          </i-col>
      </i-col>
    </i-row>
    <i-row i-class="address_list">
      <i-col span="22" offset="1" i-class="item">
        <i-icon type="editor" size="30" color="#19be6b" @click="edit"/>
        <p class="address">弘康馨居</p>
        <p class="address_com">四川省成都市郫都区红旗大道北段76号</p>
        <p class="contact">周波<span class="phone">18328607281</span></p>
      </i-col>
    </i-row>
    <i-row i-class="address_list">
      <i-col span="22" offset="1" i-class="item">
        <i-icon type="editor" size="30" color="#19be6b" @click="edit"/>
        <p class="address">弘康馨居</p>
        <p class="address_com">四川省成都市郫都区红旗大道北段76号</p>
        <p class="contact">周波<span class="phone">18328607281</span></p>
      </i-col>
    </i-row>
    <i-row i-class="address_list">
      <i-col span="22" offset="1" i-class="item">
        <i-icon type="editor" size="30" color="#19be6b" @click="edit"/>
        <p class="address">弘康馨居</p>
        <p class="address_com">四川省成都市郫都区红旗大道北段76号</p>
        <p class="contact">周波<span class="phone">18328607281</span></p>
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
      // 编辑
      editShow: true
    }
  },

  components: {
  },

  methods: {
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
  .del .delete > i-icon view{
    float: right;
    line-height: 44px;
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
    line-height: 65px;
  }
  .address_list .item>.address{
    font-size: 18px;
    color: #1c2438;
    font-weight: 500;
  }
  .address_list .item>.address_com{
    font-size: 14px;
    color: #495060;
  }
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
