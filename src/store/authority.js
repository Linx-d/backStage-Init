const authority = {
  state: {
    authority: 0,
  },
  getters: {
    authority: (state) => state.authority,
  },
  mutations: {
    SET_AUTHORITY1(state) { 
      state.authority = 1;
    },
    SET_AUTHORITY2(state) {
      state.authority = 2;
    },
  },
  actions: {},
  modules: {},
};
export default authority;
