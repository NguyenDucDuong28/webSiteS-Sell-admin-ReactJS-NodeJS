import { createSlice } from "@reduxjs/toolkit";

export const authentocatinSilce = createSlice({
  name: "authentocatin",
  initialState: { logged: false, user: null, token: null, expiresIn: 0 },
  reducers: {
    logout: (state) => {
      state.logged = false;
      state.user = null;
      state.token = null;
      state.expiresIn = 0;
    },
    logged: (state, param) => {
      state.token = param.payload.token;
      state.expiresIn = param.payload.expiresIn;
      state.user = param.payload.user;
      state.logged = true;
      console.log("Đã ghi nhận state đăng nhập", state.user.token);
      console.log(state.token);
    },
  },
});

export const { logged, logout } = authentocatinSilce.actions;
export default authentocatinSilce.reducer;
