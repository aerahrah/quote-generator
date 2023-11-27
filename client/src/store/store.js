import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlices";
import searchReduder from "./slices/searchSlices";
const store = configureStore({
  reducer: {
    auth: authReducer,
    search: searchReduder,
  },
});

export default store;
