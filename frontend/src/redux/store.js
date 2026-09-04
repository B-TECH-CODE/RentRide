import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import carsReducer from "./slices/carsSlice";
import wishlistReducer from "./slices/wishlistSlice";
import bookingReducer from "./slices/bookingSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    cars: carsReducer,
    wishlist: wishlistReducer,
    bookings: bookingReducer
  }
});
