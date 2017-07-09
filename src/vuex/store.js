import Vuex from 'vuex'
import Vue from 'vue'
import {CHANGE_ITEM} from './mutation-types.js'

Vue.use(Vuex)




const state = {
	cur_item:{
    song_name:"山寨",
    singer:"播放"
  }
}


const getters = {}

const mutations = {
  	[CHANGE_ITEM](state,payload){
  		state.cur_item = payload
  	}
}

const actions = {
	CHANGE_ITEM( {commit},item ){
		commit(CHANGE_ITEM,item)
	}
}




export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})