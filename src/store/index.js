import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    id: 0,
    name: '',
    fromName: '',
    num: '',
    obj: {},
  },
  mutations: {
    setid(state,code){
      state.id = code
    },
    setname(state,name){
      state.name = name
    },
    setfromName(state,name){
      state.fromName = name
    },
    setNum(state,name){
      state.num = name
    },
    setObj(state,data){
      state.obj = data
    }
  },
  actions: {
  },
  modules: {
  }
})
