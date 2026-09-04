import { createSlice } from "@reduxjs/toolkit";

const saved = JSON.parse(localStorage.getItem("rentride_user") || "null");

const authSlice = createSlice({
  name: "auth",
  initialState: { user: saved, loading: false },
  reducers: {
    restoreSession(state) { state.user = JSON.parse(localStorage.getItem("rentride_user") || "null"); },
    login(state, action) {
      state.user = action.payload;
      localStorage.setItem("rentride_user", JSON.stringify(action.payload));
    },
    logout(state) {
      state.user = null;
      localStorage.removeItem("rentride_user");
    },
    updateUser(state, action) {
      state.user = { ...state.user, ...action.payload };
      localStorage.setItem("rentride_user", JSON.stringify(state.user));
    }
  }
});
export const { restoreSession, login, logout, updateUser } = authSlice.actions;
export default authSlice.reducer;
