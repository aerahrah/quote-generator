import { createSlice } from "@reduxjs/toolkit";
import { fetchAllData } from "../../../services/quoteApi";

const fetchAllQuoteSlice = createSlice({
  name: "fetchAllQuote",
  initialState: {
    refetchData: false,
    data: null,
    status: "loading",
    error: null,
  },
  reducers: {
    handleRefetchData: (state) => {
      state.refetchData = !state.refetchData;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAllData.fulfilled, (state, action) => {
        console.log(action.payload);
        state.status = "succeeded";
        state.data = action.payload;
        state.error = null;
      })
      .addCase(fetchAllData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { handleRefetchData } = fetchAllQuoteSlice.actions;
export default fetchAllQuoteSlice.reducer;
