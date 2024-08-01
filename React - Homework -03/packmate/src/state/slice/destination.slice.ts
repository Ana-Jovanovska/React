import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { Country } from "../../models/country.model";

interface DestinationState {
  countries: Country[];
  loading: boolean;
  error: string | null;
  selectedCountry: Country | null;
}

const initialState: DestinationState = {
  countries: [],
  loading: false,
  error: null,
  selectedCountry: null,
};

export const fetchCountries = createAsyncThunk(
  "destination/fetchCountries",
  async () => {
    const response = await axios.get<Country[]>(
      "https://restcountries.com/v3.1/all"
    );
    return response.data;
  }
);

const destinationSlice = createSlice({
  name: "destination",
  initialState,
  reducers: {
    setSelectedCountry(state, action: PayloadAction<Country>) {
      state.selectedCountry = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCountries.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(
      fetchCountries.fulfilled,
      (state, action: PayloadAction<Country[]>) => {
        state.countries = action.payload;
        state.loading = false;
      }
    );
    builder.addCase(fetchCountries.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || "Failed to fetch countries";
    });
  },
});

export const { setSelectedCountry } = destinationSlice.actions;
export default destinationSlice.reducer;
