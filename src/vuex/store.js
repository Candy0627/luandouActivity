import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const store = new Vuex.Store({
    // 定义状态
    state: {
        along_cdk:false,
        more_cdk:false
    },
    mutations:{
        newCdk(state,msg){
            state.along_cdk = msg;
            state.more_cdk = msg
        }
    }
})
export default store