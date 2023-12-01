import { createSlice } from "@reduxjs/toolkit";
import { fetchAllData } from "../../../services/quoteApi";

const fetchAllQuoteSlice = createSlice({
  name: "fetchAllQuote",
  initialState: {
    data: null,
    status: "loading",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAllData.fulfilled, (state, action) => {
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

export default fetchAllQuoteSlice.reducer;
