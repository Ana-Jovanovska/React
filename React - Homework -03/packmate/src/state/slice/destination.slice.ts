import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { AppDispatch, RootState } from "../store";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// Define Country interface
interface Country {
  name: { common: string };
}

// Slice state interface
interface DestinationState {
  destination: string | null;
  countries: Country[];
  loading: boolean;
  error: string | null;
}

const initialState: DestinationState = {
  destination: null,
  countries: [],
  loading: false,
  error: null,
};

// Thunk to fetch countries
export const fetchCountries = createAsyncThunk(
  "destination/fetchCountries",
  async () => {
    const response = await fetch("https://restcountries.com/v3.1/all");
    const data = await response.json();
    return data;
  }
);

const destinationSlice = createSlice({
  name: "destination",
  initialState,
  reducers: {
    setDestination: (state, action: PayloadAction<string>) => {
      state.destination = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCountries.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchCountries.fulfilled,
        (state, action: PayloadAction<Country[]>) => {
          state.countries = action.payload;
          state.loading = false;
        }
      )
      .addCase(fetchCountries.rejected, (state) => {
        state.loading = false;
        state.error = "Failed to fetch countries";
      });
  },
});

export const { setDestination } = destinationSlice.actions;
export default destinationSlice.reducer;

// Custom Hook for fetching countries
export const useFetchCountries = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { countries, loading, error } = useSelector(
    (state: RootState) => state.destination
  );

  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);

  return { countries, loading, error };
};
