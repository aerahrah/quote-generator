import QuoteItem from "./quoteItem";

const QuoteList = ({
  quoteData,
  heartState,
  setHeartState,
  updateHeartState,
 
}) => {
  return (
    <div className="columns-2 sm:columns-2 md:columns-3 lg:columns-3 xl:columns-4 h-auto">
      {quoteData.map((data) => (
        <QuoteItem
          key={data.Id}
          data={data}
          heartState={heartState}
          updateHeartState={updateHeartState}
          setHeartState={setHeartState}
        />
      ))}
    </div>
  );
};

export default QuoteList;
