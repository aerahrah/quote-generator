import QuoteItem from "./quoteItem";

const QuoteList = ({
  quoteData,
}) => {
  return (
    <div className="columns-2 sm:columns-2 md:columns-3 lg:columns-3 xl:columns-4 h-auto">
      {quoteData.map((data) => (
        <QuoteItem
          key={data.Id}
          data={data}
        />
      ))}
    </div>
  );
};

export default QuoteList;
