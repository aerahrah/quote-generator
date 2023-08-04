import QuoteList from "../quotesComponent/quoteList";

const GetAllQuotes = ({
  quoteData,
  deleteQuoteData,
  heartState,
  setHeartState,
}) => {
  const notFavoriteQuotes = quoteData.filter(
    ({ Favorite }) => Favorite === false
  );

  return (
    <div className="min-h-screen bg-gray-900 py-4">
      {notFavoriteQuotes.length === 0 ? (
        <div className=" !leading-relaxed text-xl md:text-2xl italic text-blue-400 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-gray-800 h-[24rem] flex items-center   md:max-w-[60vw] lg:max-w-[40vw] max-w-[80vw] w-full justify-center shadow-xl rounded-lg">
          <p className="whitespace-nowrap	"> No Quote in Library.</p>
        </div>
      ) : (
        <QuoteList
          deleteQuoteData={deleteQuoteData}
          quoteData={notFavoriteQuotes}
          heartState={heartState}
          setHeartState={setHeartState}
        />
      )}
    </div>
  );
};

export default GetAllQuotes;
