import QuoteItem from "./quoteItem";

const QuoteList = ({
  quoteData,
  deleteQuoteData,
  heartState,
  setHeartState,
  updateHeartState,
  setOpenUpdateModal,
  setQuoteUpdateData,
  quoteUpdateData,
  setQuoteUpdateDataId,
}) => {
  return (
    <div className="columns-2 sm:columns-2 md:columns-3 lg:columns-3 xl:columns-4 h-auto">
      {quoteData.map((data) => (
        <QuoteItem
          key={data.Id}
          deleteQuoteData={deleteQuoteData}
          data={data}
          heartState={heartState}
          updateHeartState={updateHeartState}
          setHeartState={setHeartState}
          setOpenUpdateModal={setOpenUpdateModal}
          setQuoteUpdateData={setQuoteUpdateData}
          quoteUpdateData={quoteUpdateData}
          setQuoteUpdateDataId={setQuoteUpdateDataId}
        />
      ))}
    </div>
  );
};

export default QuoteList;
