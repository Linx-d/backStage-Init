import Vue from 'vue'
import Vuex from 'vuex'
import authority from "./authority"

Vue.use(Vuex)


export default new Vuex.Store({
  modules: {
    authority
  }
})
