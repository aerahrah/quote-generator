import { createSlice } from "@reduxjs/toolkit";
import { fetchData } from "../../../services/quoteApi";
const fetchQuoteSlice = createSlice({
  name: "fetchQuote",
  initialState: {
    staticData: null,
    status: "loading",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.staticData = action.payload[0];
        state.error = null;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default fetchQuoteSlice.reducer;
