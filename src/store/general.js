export default {
  state: {
    proccesing: false,
    error: null
  },
  mutations: {
    SET_PROCCESING(state, payload) {
      state.proccesing = payload
    },
    SET_ERROR(state, payload) {
      state.proccesing = payload
    },
    CLEAN_ERROR(state, payload) {
        state.error=null
    }
  },
  getters: {
    getProccesing: (state) => state.proccesing,
    getError: (state)=> state.error,
  }
}