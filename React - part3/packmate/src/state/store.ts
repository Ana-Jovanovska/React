import { configureStore } from "@reduxjs/toolkit";
import itemSlice from "../state/slice/item.slice";
import tripDetailsSlice from "./slice/tripDetails.slice";
import destinationSlice from "./slice/destination.slice";

const store = configureStore({
  reducer: {
    item: itemSlice.reducer,
    destination: destinationSlice,
    tripDetails: tripDetailsSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
