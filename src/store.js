import Vue from 'vue'
import Vuex from 'vuex'
// import generalModule from 'store/general' 
// import userModule from '.store/user'
import listModule from './store/list'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    listModule
  }
})