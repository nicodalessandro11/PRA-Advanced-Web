import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => ({
    isLoggedIn: false,
    userData: null,
    token: null,
  }),
  getters: {
    isLogged: (state) => state.isLoggedIn,
    getName: (state) => state.userData?.name || "",
    getEmail: (state) => state.userData?.email || "",
    getToken: (state) => state.token,
  },
  actions: {
    loginUser(userData, token) {
      this.isLoggedIn = true;
      this.userData = userData;
      this.token = token;
    },
    logoutUser() {
      this.isLoggedIn = false;
      this.userData = null;
      this.token = null;
    },
  },
});
