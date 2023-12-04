import { createSlice } from "@reduxjs/toolkit";
import { updateData, updateHeartStateApi } from "../../../services/quoteApi";
const updateQuoteSlice = createSlice({
  name: "search",
  initialState: {
    isUpdateModalOpen: false,
    isAddModalOpen: false,
    heartState: "",
    quoteData: "",
    message: "",
    status: "",
    error: "",
  },
  reducers: {
    toggleUpdateModalOpen: (state) => {
      state.isUpdateModalOpen = !state.isUpdateModalOpen;
    },
    toggleAddModalOpen: (state) => {
      state.isAddModalOpen = !state.isAddModalOpen;
    },
    setHeartState: (state, action) => {
      state.heartState = action.payload;
    },
    setQuoteUpdateData: (state, action) => {
      state.quoteData = action.payload;
    },
    clearQuoteUpdateData: (state) => {
      state.quoteData = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(updateData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.message = action.payload;
        state.error = null;
      })
      .addCase(updateData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(updateHeartStateApi.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateHeartStateApi.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.message = action.payload;
        state.error = null;
      })
      .addCase(updateHeartStateApi.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const {
  toggleUpdateModalOpen,
  toggleAddModalOpen,
  setQuoteUpdateData,
  clearQuoteUpdateData,
  setHeartState,
} = updateQuoteSlice.actions;

export default updateQuoteSlice.reducer;
