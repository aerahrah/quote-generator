import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlices";
import searchReduder from "./slices/searchSlices";
import quoteReducer from "./slices/quoteSlices";
const store = configureStore({
  reducer: {
    auth: authReducer,
    search: searchReduder,
    quote: quoteReducer,
  },
});

export default store;
