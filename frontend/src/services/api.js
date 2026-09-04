// Demo API service. Replace these functions with fetch/axios calls when a backend is connected.
import { cars } from "../data/cars";

export const api = {
  getCars: async () => cars,
  getCar: async (id) => cars.find(car => car.id === id),
  createBooking: async (booking) => booking
};
