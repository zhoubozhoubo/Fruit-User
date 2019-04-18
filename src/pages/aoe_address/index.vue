<template>
  <div class="container">
    <i-row i-class="address_info">
      <i-col span="24">

        <!--<i-cell title="联系人">
          <i-input slot="footer" right placeholder="姓名" :value="address.name"/>
        </i-cell>
        <i-cell title="联系人" i-class="cell_none">
          <i-input slot="footer" right placeholder="姓名" :value="address.name"/>
        </i-cell>
        <i-cell title="联系电话">
          <i-input slot="footer" type="number" right placeholder="联系电话" :value="address.phone"/>
        </i-cell>
        <i-cell title="联系电话" i-class="cell_none">
          <i-input slot="footer" type="number" right placeholder="联系电话" :value="address.phone"/>
        </i-cell>-->

        <i-input :value="address.name" title="联系人" autofocus placeholder="姓名"/>
        <i-input :value="address.phone" type="number" title="联系电话" placeholder="联系电话"/>
        <i-cell title="收货地址" is-link @click="showArea" :value="address.address"></i-cell>
        <!--<i-input :value="address.address" placeholder="选择地区"/>-->
        <!--<i-cell title="详细地址"></i-cell>-->
        <i-input :value="address.address_com" placeholder="请输入详细地址"/>
      </i-col>
    </i-row>
    <!--<i-row>
      <i-col span="24">
        <van-field
          :value="address.name"
          label="用户名"
          placeholder="请输入用户名"
        />
        <van-field
          :value="address.phone"
          label="手机号"
          placeholder="请输入手机号"
        />
        <van-cell
          title="地区"
          is-link
          @click="showArea"
        />
        <van-field
          :value="address.address"
          placeholder="选择地区"
        />
        <van-cell
          title="详细地址"
        />
        <van-field
          :value="address.address_com"
          placeholder="请输入详细地址"
        />
      </i-col>
    </i-row>-->
    <i-row i-class="bottom">
      <i-col span="24">
        <i-button long="true" i-class="save_address" @click="saveAddress">保存收货地址</i-button>
      </i-col>
    </i-row>
    <van-popup
      :show="areaShow"
      position="bottom"
      @close="closeArea">
      <van-area :area-list="areaList"
                @cancel="areaCancel"
                @confirm="areaConfirm"/>
    </van-popup>
  </div>
</template>

<script>

export default {
  data () {
    return {
      // 地址信息
      address: [
        {
          name: '',
          phone: '',
          address: '',
          address_com: ''
        }
      ],
      // 地区列表显示
      areaShow: false,
      // 地区列表
      areaList: {
        province_list: {
          110000: '北京市',
          120000: '天津市'
        },
        city_list: {
          110100: '北京市',
          110200: '县',
          120100: '天津市',
          120200: '县'
        },
        county_list: {
          110101: '东城区',
          110102: '西城区',
          110105: '朝阳区',
          110106: '丰台区',
          120101: '和平区',
          120102: '河东区',
          120103: '河西区',
          120104: '南开区',
          120105: '河北区'
        }
      }
    }
  },

  components: {
  },

  methods: {
    // 显示地区列表
    showArea () {
      console.log('showArea')
      this.areaShow = true
    },
    // 关闭地区列表
    closeArea () {
      console.log('closeArea')
      this.areaShow = false
    },
    // 取消选择地区
    areaCancel () {
      console.log('areaCancel')
      this.areaShow = false
    },
    // 确定选择地区
    areaConfirm () {
      console.log('areaConfirm')
      this.areaShow = false
    },
    // 保存收货地址
    saveAddress () {
      console.log('saveAddress')
      wx.navigateBack({
        delta: 1
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
  .address_info{
    color: #495060;
  }
  .bottom{
    position: fixed;
    width: 100%;
    bottom: 0;
    z-index: 1;
  }
  .bottom .save_address{
    font-size:18px;
    color: #FFFFFF!important;
    background-color: #19be6b!important;
  }
</style>
