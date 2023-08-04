import QuoteList from "../quotesComponent/quoteList";

const GetAllFavoriteQuotes = ({
  quoteData,
  deleteQuoteData,
  heartState,
  setHeartState,
}) => {
  const favoriteQuotes = quoteData.filter(({ Favorite }) => Favorite === true);

  return (
    <div className="min-h-screen bg-gray-900 py-4">
      {favoriteQuotes.length === 0 ? (
        <div className=" !leading-relaxed text-xl md:text-2xl italic text-blue-400 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-gray-800 h-[24rem] flex items-center   md:max-w-[60vw] lg:max-w-[40vw] max-w-[80vw] w-full justify-center shadow-xl rounded-lg">
          <p className="whitespace-nowrap	"> No favorite quote.</p>
        </div>
      ) : (
        <QuoteList
          deleteQuoteData={deleteQuoteData}
          quoteData={favoriteQuotes}
          heartState={heartState}
          setHeartState={setHeartState}
        />
      )}
    </div>
  );
};

export default GetAllFavoriteQuotes;
