<template>
  <div class="container">
    <i-row i-class="del">
      <i-col span="22" offset="1">
        <i-col span="6" i-class="delete">
          <p><i-icon type="coordinates" size="20" color="#19be6b"/>收货地址</p>
        </i-col>
        <i-col span="4" offset="14" i-class="delete" v-if="editShow">
          <p @click="delShow">删除地址</p>
        </i-col>
        <i-col span="2" offset="16" i-class="delete" v-if="!editShow">
          <p @click="delShow">完成</p>
        </i-col>
        <!--<i-col span="2" i-class="delete" v-if="!editShow">
          <i-icon type="trash" size="30" @click="del"/>
        </i-col>-->
      </i-col>
    </i-row>
    <i-row i-class="address_list"
           v-for="(address, addressIndex) in addressList"
           :key="addressIndex">
      <i-col span="22" offset="1" i-class="item">
        <i-icon type="editor" size="30" color="#19be6b" @click="edit" v-if="editShow"/>
        <i-icon type="trash" size="30" color="#19be6b" @click="del" v-if="!editShow"/>
        <p class="contact">{{address.name}}<span class="phone">{{address.phone}}</span>
          <i-tag class="i-tags" name="默认" color="green" v-if="address.is_default === 1">
            默认
          </i-tag>
        </p>
        <p class="address_com">{{address.address_com}}</p>
      </i-col>
    </i-row>
    <i-row i-class="bottom" v-if="editShow">
      <i-col span="24">
        <i-button long="true" i-class="add_address" @click="addAddress">添加收货地址</i-button>
      </i-col>
    </i-row>
    <!--删除弹窗-->
    <i-modal :visible="delModal.visible" @ok="deleteOk" @cancel="deleteCancle">
      <view style="text-align: center; color: #1c2438; font-size: 16px">确定要删除这条收货地址吗</view>
    </i-modal>
    <i-toast id="toast" />
  </div>
</template>

<script>
const {$Toast} = require('../../../static/iview/dist/base/index')
export default {
  data () {
    return {
      // 编辑
      editShow: true,
      // 地址列表
      addressList: [
        {
          name: '周波1',
          phone: '18328607281',
          address_com: '四川省成都市郫都区红旗大道北段76号',
          is_default: 1
        },
        {
          name: '周波2',
          phone: '18328607281',
          address_com: '四川省成都市郫都区红旗大道北段76号',
          is_default: 0
        },
        {
          name: '周波3',
          phone: '18328607281',
          address_com: '四川省成都市郫都区红旗大道北段76号',
          is_default: 0
        },
        {
          name: '周波4',
          phone: '18328607281',
          address_com: '四川省成都市郫都区红旗大道北段76号',
          is_default: 0
        }
      ],
      // 删除弹窗
      delModal: {
        visible: false,
        index: ''
      }
    }
  },

  components: {
  },

  methods: {
    // 显示删除地址
    delShow () {
      console.log('delShow')
      this.editShow = !this.editShow
    },
    // 编辑
    edit () {
      console.log('edit')
      wx.navigateTo({
        url: '../aoe_address/main'
      })
    },
    // 删除
    del (index) {
      console.log('del')
      this.delModal.index = index
      this.delModal.visible = true
    },
    // 确定删除
    deleteOk () {
      console.log('deleteOk')
      $Toast({
        type: 'success',
        content: '删除成功'
      })
      this.addressList.splice(this.delModal.index, 1)
      this.delModal.visible = false
    },
    // 取消删除
    deleteCancle () {
      console.log('deleteCancle')
      this.delModal.visible = false
    },
    // 添加收货地址
    addAddress () {
      console.log('addAddress')
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
    margin-right: 10px;
    padding-left: 10px;
    border-left: 1px solid #495060;
    color: #1c2438;
    font-weight: 500;
  }
  .address_list .item>.contact .default_tag{
    color: #19be6b;
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
