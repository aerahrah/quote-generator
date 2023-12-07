import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlices";
import searchReduder from "./slices/searchSlices";
import quoteReducer from "./slices/quoteSlices/quoteSlices";
import fetchQuoteReducer from "./slices/quoteSlices/fetchQuoteSlice";
import fetchAllQuoteReducer from "./slices/quoteSlices/fetchAllQuoteSlice";
import updateQuoteReducer from "./slices/quoteSlices/updateQuoteSlice";
import themeReducer from "./slices/themeSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    search: searchReduder,
    quote: quoteReducer,
    theme: themeReducer,
    fetchQuote: fetchQuoteReducer,
    fetchAllQuote: fetchAllQuoteReducer,
    updateQuote: updateQuoteReducer,
  },
});

export default store;
