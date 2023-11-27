import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    searchTerm: "",
    filterCategory: "all Category",
    filterOrigin: "all quotes",
  },
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
    setFilterCategory: (state, action) => {
      state.filterCategory = action.payload;
    },
    setFilterOrigin: (state, action) => {
      state.filterOrigin = action.payload;
    },
  },
});

export const { setSearchTerm, setFilterCategory, setFilterOrigin } =
  searchSlice.actions;
export default searchSlice.reducer;
