import QuoteList from "../quotesComponent/quoteList";

const GetAllFavoriteQuotes = ({ quoteData, deleteQuoteData }) => {
  const favoriteQuotes = quoteData.filter(({ Favorite }) => Favorite === true);

  return (
    <div className="min-h-screen bg-gray-900 py-4">
      {favoriteQuotes.length === 0 ? (
        <p className=" !leading-relaxed text-xl md:text-2xl italic text-blue-400 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-gray-800 p-36 shadow-xl rounded-lg">
          No favorite quote.
        </p>
      ) : (
        <QuoteList
          deleteQuoteData={deleteQuoteData}
          quoteData={favoriteQuotes}
        />
      )}
    </div>
  );
};

export default GetAllFavoriteQuotes;
