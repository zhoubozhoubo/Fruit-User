<template>
  <div class="container">
    <i-row>
      <i-col span="24" i-class="login">
        <i-button type="success" i-class="authorize_login" open-type="getUserInfo" @click="authorizeLogin">授权登录</i-button>
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

    components: {},

    methods: {
      // 授权登录
      authorizeLogin () {
        console.log('authorizeLogin')
        // 查看是否授权
        wx.getSetting({
          success (res) {
            console.log(res)
            if (res.authSetting['scope.userInfo']) {
              console.log('ok')
              wx.getUserInfo({
                success (res) {
                  const userInfo = res.userInfo
                  wx.setStorage({
                    key: 'userInfo',
                    data: userInfo
                  })
                }
              })
            } else {
              console.log('not ok')
            }
          }
        })
        // wx.openSetting({
        //   success (res) {
        //     console.log(res.authSetting)
        //     // res.authSetting = {
        //     //   "scope.userInfo": true,
        //     //   "scope.userLocation": true
        //     // }
        //   }
        // })
        this.wxLogin()
      },
      // 微信login获取code
      wxLogin () {
        let vm = this
        wx.login({
          success (res) {
            if (res.code) {
              console.log(res)
              // 发起网络请求
              // wx.request({
              //   url: 'https://test.com/onLogin',
              //   data: {
              //     code: res.code
              //   }
              // })
              vm.login(res.code)
            } else {
              console.log('登录失败！' + res.errMsg)
            }
          }
        })
      },
      // 登录
      login (code) {
        let vm = this
        wx.request({
          url: vm.myConfig.LoginIndex,
          method: 'POST',
          data: {
            code: code
          },
          success (res) {
            // 将服务器返回的用户登录态存在本地Storage
            let data = res.data.data
            wx.setStorage({
              key: 'third_Session',
              data: data.third_Session
            })
            // 检测账号
            vm.check()
          }
        })
      },
      // 登录检测
      check () {
        let vm = this
        let thirdSession = wx.getStorageSync('third_Session')
        wx.request({
          url: vm.myConfig.LoginCheck,
          method: 'POST',
          data: {
            third_Session: thirdSession
          },
          success: function (res) {
            console.log(res)
            if (res.data.code === -19) {
              // 账号未注册
              wx.navigateTo({
                url: '../user_register/main'
              })
            } else if (res.data.code === -1) {
              // 账号信息不完善
              wx.navigateTo({
                url: '../user_register/main'
              })
            } else if (res.data.code === 1) {
              // 成功
              wx.navigateTo({
                url: '../index/main'
              })
            }
          }
        })
      }
    },
    created () {
      wx.checkSession({
        success () {
          // session_key 未过期，并且在本生命周期一直有效
          console.log('session_key 未过期')
          // wx.switchTab({
          //   url: '../index/main'
          // })
        },
        fail () {
          // session_key 已经失效，需要重新执行登录流程
          console.log('session_key 已经失效')
          // wx.login() // 重新登录
        }
      })
    }
  }
</script>

<style scoped>
</style>
<style>
  .login{
    text-align: center;
  }
</style>
