import { createSlice } from "@reduxjs/toolkit";

const saved = JSON.parse(localStorage.getItem("rentride_bookings") || "[]");
const slice = createSlice({
  name: "bookings",
  initialState: saved,
  reducers: {
    addBooking(state, action) {
      state.unshift(action.payload);
      localStorage.setItem("rentride_bookings", JSON.stringify(state));
    },
    cancelBooking(state, action) {
      const b = state.find(x => x.id === action.payload);
      if (b) b.status = "Cancelled";
      localStorage.setItem("rentride_bookings", JSON.stringify(state));
    }
  }
});
export const { addBooking, cancelBooking } = slice.actions;
export default slice.reducer;
