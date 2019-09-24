export default {
  state: {
    access_token: null
  },
  mutations: {
    setToken(state, accessToken) {
      state.access_token = accessToken;
      localStorage.setItem("access_token", accessToken);
    },
    clearUserData(state) {
      for (const key in state) {
        state[key] = null;
        localStorage.removeItem(key);
      }
    }
  }
};
