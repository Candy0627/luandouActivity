import Vue from 'vue'
import App from './App'
import router from './router'
import $ from 'jquery'
import qs from 'qs'
import axios from 'axios'
import store from './vuex/store'
import layer from 'vue-layer'
import 'vue-layer/lib/vue-layer.css';
import Mint from 'mint-ui'
import { Toast } from 'mint-ui'
import { Progress } from 'mint-ui'
import moment from 'moment'
moment.locale('zh-cn')
import VueClipboard  from 'vue-clipboard2'
import Clipboard from 'clipboard'
import '../static/js/rem'
// import '../static/js/coloured'
import 'vue-blu/dist/css/vue-blu.min.css'
import '../static/styles/reset.css'
import '../static/styles/animate.css'
import '../static/styles/common.css'


import 'vue-blu/dist/css/vue-blu.min.css'
import '../static/js/rem'
// import '../static/js/coloured'
import '../static/styles/reset.css'
import '../static/styles/animate.css'
import '../static/styles/common.css'

Vue.config.productionTip = false;
// Vue.use(animate);
Vue.use(Mint);
Vue.use(VueClipboard);
Vue.prototype.$layer = layer(Vue,{
    msgtime:3,//目前只有一项，即msg方法的默认消失时间，单位：秒
});
Vue.prototype.$qs = qs;


/* axios配置 */
//axios.defaults.withCredentials = true
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
Vue.prototype.$axios = axios

var querystring = require('querystring');

var baseUrl = "https://luandou.gamemorefun.net/api" //接口前缀地址
/* 
 * 封装ajax
 * obj : 全局this
 * data : ajax传入后台data数据
 * address : ajax接口地址
 * fn : 成功返回方法  带参数  obj,data  obj : this data : response
 * */
Vue.prototype.postHttp = function(obj,data,address,fn){
  obj.$axios.post(baseUrl+address,querystring.stringify(data)).then(response => {
      fn(obj,response.data);
      
    },response => {
      
    })
}
Vue.prototype.getHttp = function(obj,data,address,fn){
    obj.$axios.get(baseUrl+address,{params: data}).then(function(response){
      fn(obj,response.data)
    }).catch(function (response){
      console.log(response);
    });
}

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
// new Vue({
//     render:h => h(App),
//     router,
//     store,
// }).$mount('#app')
