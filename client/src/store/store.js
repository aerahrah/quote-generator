import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlices";
import searchReduder from "./slices/searchSlices";
import quoteReducer from "./slices/quoteSlices/quoteSlices";
import fetchQuoteReducer from "./slices/quoteSlices/fetchQuoteSlice";
const store = configureStore({
  reducer: {
    auth: authReducer,
    search: searchReduder,
    quote: quoteReducer,
    fetchQuote: fetchQuoteReducer,
  },
});

export default store;
