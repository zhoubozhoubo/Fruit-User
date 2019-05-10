import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()

const HttpUrl = 'http://127.0.0.1:8003/'

Vue.prototype.myConfig = {
  'HttpUrl': HttpUrl,
  // 用户登录接口
  'LoginIndex': HttpUrl + 'api/5cbc3b77297e5',
  // 用户登录检测接口
  'LoginCheck': HttpUrl + 'api/5cbc43e233672',
  // 用户登录注册接口
  'LoginPerfect': HttpUrl + 'api/5cbc51cec85bd',
  // 首页banner列表接口
  'BannerList': HttpUrl + 'api/5cbc5d613bee8',
  // 商品分类列表接口
  'GoodsTypeList': HttpUrl + 'api/5c8f365c71082',
  // 推荐商品分类以及分类下商品列表
  'GoodsTypeListGoods': HttpUrl + 'api/5cb44c4f0ba5b',
  // 商品列表
  'GoodsList': HttpUrl + 'api/5cb6946b3a801'
}
