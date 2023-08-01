import FavoriteQuoteItem from "./favoriteQuoteItem";

const FavoriteQuoteList = ({ quoteData, deleteQuoteData }) => {
  return (
    <div className="columns-2 sm:columns-2 md:columns-3 lg:columns-3 xl:columns-4  h-auto h-auto">
      {quoteData.map((data) => (
        <FavoriteQuoteItem deleteQuoteData={deleteQuoteData} data={data} />
      ))}
    </div>
  );
};

export default FavoriteQuoteList;
