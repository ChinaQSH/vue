// 入口文件
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import app from './App.vue'
import router from './router'
import store from './store'
import { Button } from 'mint-ui';
Vue.component(Button.name, Button);//标签<mt-button>
new Vue({
    el:"#app",
    render:c=>c(app),
    //挂载路由
    router,
    store
})
