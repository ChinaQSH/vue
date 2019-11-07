// 入口文件
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import app from './App.vue'
import router from './router'
new Vue({
    el:"#app",
    render:c=>c(app),
    //挂载路由
    router
})
