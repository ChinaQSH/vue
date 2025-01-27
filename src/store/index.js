/*
vuex最核心的管理对象
 */
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import state from './state.js'
import actions from './actions.js'
import getters from './getters.js'
import mutations from './mutations.js'
export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})
