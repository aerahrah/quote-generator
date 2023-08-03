import QuoteList from "../quotesComponent/quoteList";

const GetAllQuotes = ({ quoteData, deleteQuoteData }) => {
  const notFavoriteQuotes = quoteData.filter(
    ({ Favorite }) => Favorite === false
  );

  return (
    <div className="min-h-screen bg-gray-900 py-4">
      {notFavoriteQuotes.length === 0 ? (
        <p className=" !leading-relaxed text-xl md:text-2xl italic text-blue-400 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-gray-800 p-36 shadow-xl rounded-lg">
          No Quote in the library..
        </p>
      ) : (
        <QuoteList
          deleteQuoteData={deleteQuoteData}
          quoteData={notFavoriteQuotes}
        />
      )}
    </div>
  );
};

export default GetAllQuotes;
