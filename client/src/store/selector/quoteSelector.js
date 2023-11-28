export const selectQuote = (state) => state.quote;
export const selectQuoteData = (state) => state.quote.data;
export const selectQuoteStatus = (state) => state.quote.status;
export const selectQuoteError = (state) => state.quote.error;

export const selectFetchQuoteData = (state) => state.fetchQuote.staticData;
export const selectFetchQuoteStatus = (state) => state.fetchQuote.status;
