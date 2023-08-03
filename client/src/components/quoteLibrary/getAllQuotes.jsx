import { fetchAllData, deleteData } from "../utils/apiUtils";
import FavoriteQuotesContainer from "../quoteFavorite/favoriteQuotesContainer";
import FavoriteQuoteList from "../quoteFavorite/favoriteQuoteList ";
import { useState, useEffect } from "react";
import Spinner from "../utils/spinner";
const GetAllQuotes = () => {
  const url = "http://localhost:3500/quote";
  const [quoteData, setQuoteData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const handleGetAllQuotes = () => {
    fetchAllData(url)
      .then((data) => {
        const filteredData = data.filter(
          (favorite) => favorite.Favorite === false
        );
        console.log(filteredData);
        setQuoteData(filteredData);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const deleteQuoteData = (id) => {
    deleteData(url, id)
      .then(() => {
        handleGetAllQuotes();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    handleGetAllQuotes();
  }, []);
  return (
    <div>
      <div className="min-h-screen bg-gray-900 py-4">
        {isLoading ? (
          <Spinner />
        ) : quoteData.length === 0 ? (
          <FavoriteQuotesContainer>
            <p className=" !leading-relaxed text-xl md:text-2xl italic text-blue-400 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-gray-800 p-36 shadow-xl rounded-lg">
              No favorite quote.
            </p>
          </FavoriteQuotesContainer>
        ) : (
          <FavoriteQuotesContainer>
            <FavoriteQuoteList
              deleteQuoteData={deleteQuoteData}
              quoteData={quoteData}
            />
          </FavoriteQuotesContainer>
        )}
      </div>
    </div>
  );
};

export default GetAllQuotes;
