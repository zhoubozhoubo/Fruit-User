<template>
  <div class="container">
    <!--<i-row>-->
    <!--<i-col>-->
    <i-row id="del_bar" i-class="del_bar">
      <i-col span="24">
        <i-row i-class="del" :class="{menu_fixed: delTop}">
          <i-col span="2" offset="1" i-class="radio">
            <van-checkbox :value="checkAll" checked-color="#19be6b" @change="allChange"></van-checkbox>
          </i-col>
          <i-col span="2" offset="18" i-class="delete" v-if="editShow" @click="editGoods">
            <p>编辑</p>
          </i-col>
          <i-col span="2" offset="16" i-class="delete" v-if="!editShow" @click="editGoods">
            <p>完成</p>
          </i-col>
          <i-col span="2" i-class="delete" v-if="!editShow">
            <i-icon type="trash" size="30" @click="del"/>
          </i-col>
        </i-row>
      </i-col>
    </i-row>
    <!--<van-checkbox-group :value="checkList" @change="onChange">
      <i-row i-class="goods_list" v-for="(goods, goodsIndex) in goodsList" :key="goodsIndex">
        <i-col span="2" offset="1" i-class="radio">
          <van-checkbox :name="goods.id" checked-color="#19be6b"></van-checkbox>
        </i-col>
        <i-col span="20" i-class="item">
          <img :src="goods.img"/>
          <h2 class="name">{{goods.name}}</h2>
          <h3 class="describe">{{goods.describe}}</h3>
          <span class="money">￥{{goods.money}}</span>
          <van-stepper :value="goods.number" custom-class="option_number"/>
        </i-col>
      </i-row>
    </van-checkbox-group>-->
    <van-checkbox-group :value="checkList" @change="onChange">
      <i-row i-class="goods_list" v-for="(goods, goodsIndex) in goodsList" :key="goodsIndex">
        <i-col span="22" offset="1" i-class="goods">
          <i-row>
            <i-col span="2" offset="1" i-class="radio">
              <van-checkbox :name="goods.id" checked-color="#19be6b"></van-checkbox>
            </i-col>
            <i-col span="20" i-class="item">
              <img :src="goods.img"/>
              <h2 class="name">{{goods.name}}</h2>
              <h3 class="describe">{{goods.describe}}</h3>
              <span class="money">￥{{goods.money}}</span>
              <van-stepper integer disable-input :value="goods.number" custom-class="option_number" @change="changeGoodsNumber"/>
            </i-col>
          </i-row>
        </i-col>
      </i-row>
    </van-checkbox-group>
    <i-row i-class="bottom_bar">
      <i-col span="24">
        <i-row i-class="bottom" v-if="editShow">
          <i-col span="4" offset="1" i-class="radio">
            <van-checkbox :value="checkAll" checked-color="#19be6b" @change="allChange">全选</van-checkbox>
          </i-col>
          <i-col span="12" offset="1" i-class="total_money">
            总计
            <span class="money">￥29.19</span>
            <span class="tips">(不含运费)</span>
          </i-col>
          <i-col span="6" i-class="buy">
            <i-button type="error" long="true" i-class="settlement" @click="goSettlement">去结算</i-button>
          </i-col>
        </i-row>
      </i-col>
    </i-row>
      <!--</i-col>-->
    <!--</i-row>-->
    <!--删除弹窗-->
    <i-modal :visible="delModal.visible" @ok="deleteOk" @cancel="deleteCancle">
      <view style="text-align: center; color: #1c2438; font-size: 16px">确定要删除这{{delModal.number}}种商品吗</view>
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
      // 删除栏吸顶
      delTop: false,
      // 是否全选
      checkAll: false,
      // 选中列表
      checkList: [],
      // 商品列表
      goodsList: [
        {
          id: 1,
          img: '/static/images/yt.jpg',
          name: '商品1',
          describe: '商品描述商品描述商品描述商品描述',
          money: '11.00',
          number: 1
        },
        {
          id: 2,
          img: '/static/images/pp.jpg',
          name: '商品2',
          describe: '商品描述商品描述商品描述商品描述',
          money: '11.00',
          number: 2
        },
        {
          id: 3,
          img: '/static/images/yt.jpg',
          name: '商品3',
          describe: '商品描述商品描述商品描述商品描述',
          money: '11.00',
          number: 3
        },
        {
          id: 4,
          img: '/static/images/pp.jpg',
          name: '商品4',
          describe: '商品描述商品描述商品描述商品描述',
          money: '11.00',
          number: 4
        },
        {
          id: 5,
          img: '/static/images/yt.jpg',
          name: '商品5',
          describe: '商品描述商品描述商品描述商品描述',
          money: '11.00',
          number: 5
        }
      ],
      // 删除弹窗
      delModal: {
        visible: false,
        number: 0
      }
    }
  },

  components: {
  },

  methods: {
    // 编辑
    editGoods () {
      this.editShow = !this.editShow
    },
    // 删除栏吸顶
    delFixed () {
      let that = this
      let del = wx.createSelectorQuery()
      del.select('#del_bar').boundingClientRect()
      del.exec(function (res) {
        if (res[0].top < 0) {
          that.delTop = true
        } else {
          that.delTop = false
        }
      })
    },
    // 全选
    allChange () {
      this.checkAll = !this.checkAll
      if (this.checkAll === true) {
        for (let i = 0; i < this.goodsList.length; i++) {
          this.checkList[i] = String(this.goodsList[i].id)
        }
      } else {
        this.checkList = []
      }
    },
    // 改变商品数量
    changeGoodsNumber (res) {
      console.log(res)
    },
    // 选框
    onChange (res) {
      this.checkList = res.mp.detail.sort()
      if (this.checkList.length === this.goodsList.length) {
        this.checkAll = true
      } else {
        this.checkAll = false
      }
    },
    // 删除
    del () {
      this.delModal.number = this.checkList.length
      if (this.delModal.number === 0) {
        $Toast({
          type: 'warning',
          content: '请选择要删除的商品'
        })
      } else {
        this.delModal.visible = true
      }
    },
    // 确定删除
    deleteOk () {
      console.log('deleteOk')
      for (let i = 0; i < this.checkList.length; i++) {
        for (let j = 0; j < this.goodsList.length; j++) {
          if (this.goodsList[j].id === Number(this.checkList[i])) {
            this.goodsList.splice(j, 1)
          }
        }
      }
      $Toast({
        type: 'success',
        content: '删除成功'
      })
      this.checkList = []
      this.delModal.visible = false
    },
    // 取消删除
    deleteCancle () {
      console.log('deleteCancle')
      this.delModal.visible = false
    },
    // 去结算
    goSettlement () {
      console.log('goSettlement')
    }
  },

  created () {
  },
  onPageScroll: function (e) {
    // 删除栏吸顶
    this.delFixed()
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
  .del_bar{
    height: 44px;
  }
  .del{
    /*position: fixed;*/
    /*width: 100%;*/
    /*z-index: 1;*/
    background-color: #FFFFFF;
  }
  .del .radio{
    margin-top: 10px;
  }
  .del .delete{
    line-height: 44px;
  }
  .del .delete > p{
    color: #1c2438;
    font-size: 14px;
  }
  .del .delete > i-icon view{
    float: right;
    line-height: 44px;
  }
  .goods_list {
    margin-top: 10px;
  }
  .goods_list .goods{
    border-radius: 4px;
    background-color: #FFFFFF;
  }
  .goods_list .radio {
    margin-top: 50px;
  }
  .goods_list .item  {
    position: relative;
    padding: 10px 0;
    /*background-color: #FFFFFF;*/
  }
  .goods_list .item > img {
    width: 100px;
    height: 100px;
    float: left;
    margin-right: 10px;
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

  .goods_list .item > .money {
    position: absolute;
    bottom: 10px;
    font-size: 18px;
    color: #ed3f14;
  }
  .goods_list .item .option_number{
    position: absolute;
    bottom: 10px;
    right: 0;
  }
  .goods_list .item .option_number>view{
    width: 28px;
  }
  .goods_list .item .option_number>.van-stepper__input{
    width: 28px;
  }
  .bottom_bar{
    height: 50px;
  }
  .bottom{
    position: fixed;
    width: 100%;
    bottom: 0;
    z-index: 1;
    background-color: #FFFFFF;
  }
  .bottom .radio{
    margin-top: 10px;
    font-size: 14px;
  }
  .bottom .total_money{
    font-size: 16px;
    line-height: 40px;
  }
  .bottom .total_money>.money{
    color: #ed3f14;
    margin-right: 10px;
  }
  .bottom .total_money>.tips{
    color: #495060;
  }
  .container .i-modal-body{
    text-align: center!important;
  }
</style>
