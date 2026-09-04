import { createSlice } from "@reduxjs/toolkit";
import { cars } from "../../data/cars";

const carsSlice = createSlice({
  name: "cars",

  initialState: {
    items: cars,
    filters: {
      category: "All",
      search: "",
      maxPrice: 10000,
    },
  },

  reducers: {
    setCars(state, action) {
      state.items = action.payload;
    },

    setFilter(state, action) {
      state.filters = {
        ...state.filters,
        ...action.payload,
      };
    },

    resetFilters(state) {
      state.filters = {
        category: "All",
        search: "",
        maxPrice: 10000,
      };
    },
  },
});

export const {
  setCars,
  setFilter,
  resetFilters,
} = carsSlice.actions;

export default carsSlice.reducer;