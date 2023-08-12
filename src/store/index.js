import { createStore, Store } from 'vuex'
import createPersistedState from 'vuex-persistedstate';
export default createStore({
  state: {
    isAuthenticated:false,
    token:'',
    configData: ''
  },
  mutations: {
    loginUser(state) {
      state.isAuthenticated = true;
    },
    setToken(state,token) {
      state.token = token;
    },
    setConfigData(state,data) {
      state.configData = data;
    }
  },
  actions: {
    loginUser({ commit }, body) {
      commit("loginUser");
    }, 
  },
  plugins: [createPersistedState({ storage: window.sessionStorage })],
  getters: {
    isAuthenticatedUser(state,getters){
      return state.isAuthenticated;
    },
    getToken(state){
      return state.token;
    },
    getConfigData(state){
      return state.configData;
    }
  },
  modules: {},
});