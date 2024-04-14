import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

// Get user data and token from cookies
const user = Cookies.get("userLogin") ? JSON.parse(Cookies.get("userLogin")) : {};
const token = Cookies.get("token") || "";

const authSlice = createSlice({
  name: "auth",
  initialState: { user, token },
  reducers: {
    login: (state, { payload }) => {
      state.user = payload.data;
      state.token = payload.token;
      Cookies.set("userLogin", JSON.stringify(payload.data));
      Cookies.set("token", payload.token);
    },
    logOut: (state, action) => {
      console.log("----->");
      state.user = {};
      state.token = "";
      Cookies.remove("userLogin");
      Cookies.remove("token");
    },
  },
});

export default authSlice.reducer;
export const { login, logOut } = authSlice.actions;
