import QuoteList from "../quotesComponent/quoteList";
import UpdateQuoteModal from "../quotesComponent/updateQuoteModal";
const QuoteContainer = ({
  quoteData,
  deleteQuoteData,
  heartState,
  setHeartState,
  updateHeartState,
  openUpdateModal,
  setOpenUpdateModal,
  setQuoteUpdateData,
  quoteUpdateData,
  setQuoteUpdateDataId,
  quoteUpdateDataId,
  getAllQuotes,
  favoriteMode,
}) => {
  const filteredQuote = quoteData.filter(({ Favorite }) =>
    favoriteMode ? Favorite : !Favorite
  );

  const noQuoteMessage = favoriteMode
    ? " No favorite quote."
    : "No Quote in Library.";
  return (
    <div className="min-h-screen bg-gray-900 py-4">
      {filteredQuote.length === 0 ? (
        <div className=" !leading-relaxed text-xl md:text-2xl italic text-blue-400 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-gray-800 h-[24rem] flex items-center md:max-w-[60vw] lg:max-w-[40vw] max-w-[80vw] w-full justify-center shadow-xl rounded-lg">
          <p className="whitespace-nowrap	"> {noQuoteMessage} </p>
        </div>
      ) : (
        <QuoteList
          deleteQuoteData={deleteQuoteData}
          quoteData={filteredQuote}
          heartState={heartState}
          setHeartState={setHeartState}
          updateHeartState={updateHeartState}
          setOpenUpdateModal={setOpenUpdateModal}
          setQuoteUpdateData={setQuoteUpdateData}
          setQuoteUpdateDataId={setQuoteUpdateDataId}
        />
      )}
      <UpdateQuoteModal
        openUpdateModal={openUpdateModal}
        setOpenUpdateModal={setOpenUpdateModal}
        setQuoteUpdateData={setQuoteUpdateData}
        quoteUpdateData={quoteUpdateData}
        quoteUpdateDataId={quoteUpdateDataId}
        setQuoteUpdateDataId={setQuoteUpdateDataId}
        getAllQuotes={getAllQuotes}
      />
    </div>
  );
};

export default QuoteContainer;
