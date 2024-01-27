import { createSlice } from "@reduxjs/toolkit";
import { saveData, deleteData, updateData } from "../../../services/quoteApi";
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
