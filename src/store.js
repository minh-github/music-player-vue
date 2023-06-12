import { createStore } from "vuex";

export default createStore({
  state: {
    user: [
      {
        id: '',
        name: '',
        email: '',
      }
    ],
  },
  mutations:{
      setUser(state, userData) {
        state.user.id = userData.user.id;
        state.user.name = userData.user.name;
        state.user.email = userData.user.email;
        
        localStorage.setItem('user', JSON.stringify(userData.token));
      },
  },
});