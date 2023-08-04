import QuoteItem from "./quoteItem";

const QuoteList = ({
  quoteData,
  deleteQuoteData,
  heartState,
  setHeartState,
}) => {
  return (
    <div className="columns-2 sm:columns-2 md:columns-3 lg:columns-3 xl:columns-4 h-auto">
      {quoteData.map((data) => (
        <QuoteItem
          key={data.Id}
          deleteQuoteData={deleteQuoteData}
          data={data}
          heartState={heartState}
          setHeartState={setHeartState}
        />
      ))}
    </div>
  );
};

export default QuoteList;
