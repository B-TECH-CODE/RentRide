import { createSlice } from "@reduxjs/toolkit";

const initial = JSON.parse(localStorage.getItem("rentride_wishlist") || "[]");
const slice = createSlice({
  name: "wishlist",
  initialState: initial,
  reducers: {
    toggleWishlist(state, action) {
      const id = action.payload;
      const i = state.indexOf(id);
      if (i >= 0) state.splice(i, 1); else state.push(id);
      localStorage.setItem("rentride_wishlist", JSON.stringify(state));
    }
  }
});
export const { toggleWishlist } = slice.actions;
export default slice.reducer;
