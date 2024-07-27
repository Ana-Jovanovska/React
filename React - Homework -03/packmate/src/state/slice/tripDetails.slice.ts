import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FormValues } from "../../Pages/TripDetails/TripDetails";

interface tripDetailsState {
  value: FormValues | null;
}

const initialState: tripDetailsState = {
  value: null,
};

const tripDetailsSlice = createSlice({
  name: "tripDetails",
  initialState,
  reducers: {
    onSubmit(state, { payload: item }: PayloadAction<FormValues>) {
      state.value = item;
    },
  },
});

export const { onSubmit } = tripDetailsSlice.actions;

export default tripDetailsSlice;
