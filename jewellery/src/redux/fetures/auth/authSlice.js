import { createSlice } from "@reduxjs/toolkit";

const userJSON = localStorage.getItem("userLogin")|| "{}";
const user = userJSON ? JSON.parse(userJSON) : "{}";
const tokenJSON = localStorage.getItem("token");
const token = tokenJSON ? JSON.parse(tokenJSON) : "";

const authSlice = createSlice({
  name: "auth",
  initialState: { user, token },
  reducers: {
    login: (state, { payload }) => {
    console.log("-->")
      state.user = payload.data;
      state.token = payload.token;
      localStorage.setItem("userLogin", JSON.stringify(payload.data));
      localStorage.setItem("token", JSON.stringify(payload.token));
    },
    logOut: (state, action) => {
      console.log("----->");
      state.user = {};
      state.token = "";
      localStorage.clear();
    },
  },
});

export default authSlice.reducer;
export const { login, logOut } = authSlice.actions;
