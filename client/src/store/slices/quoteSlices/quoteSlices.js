import { createSlice } from "@reduxjs/toolkit";
import {
  saveData,
  deleteData,
  updateData,
  fetchAllData,
} from "../../../services/quoteApi";
const quoteSlice = createSlice({
  name: "quote",
  initialState: {
    message: "",
    quoteId: "",
    favoriteQuoteId: "",
    status: "idle",
    error: null,
  },
  reducers: {
    clearMessage: (state) => {
      state.message = "";
    },
    clearQuoteId: (state) => {
      state.quoteId = "";
    },
    clearFavoriteQuoteId: (state) => {
      state.favoriteQuoteId = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(saveData.fulfilled, (state, action) => {
        const { favorite, _id } = action.payload.createQuote;
        console.log(favorite);
        if (favorite) {
          state.favoriteQuoteId = _id;
        } else {
          state.quoteId = _id;
        }
        state.message = action.payload.message;
        state.status = "succeeded";
        state.error = null;
      })
      .addCase(saveData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(updateData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
        state.error = null;
      })
      .addCase(updateData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(deleteData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.message = action.payload.message;
        state.error = null;
      })
      .addCase(deleteData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { clearMessage, clearFavoriteQuoteId, clearQuoteId } =
  quoteSlice.actions;
export default quoteSlice.reducer;
