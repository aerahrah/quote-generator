import { fetchAllData, deleteData } from "../utils/apiUtils";
import { useState, useEffect } from "react";
import Spinner from "../utils/spinner";
import FavoriteQuotesContainer from "./favoriteQuotesContainer";
import FavoriteQuoteList from "./favoriteQuoteList ";

const FavoriteQuotesLibrary = () => {
  const url = "http://localhost:3500/quote";
  const [isLoading, setIsLoading] = useState(false);
  const [quoteData, setQuoteData] = useState([]);

  const deleteQuoteData = (id) => {
    deleteData(url, id)
      .then(() => {
        getAllFavoriteQuotes();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getAllFavoriteQuotes = () => {
    setIsLoading(true);
    fetchAllData(url)
      .then((data) => {
        setQuoteData(data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    getAllFavoriteQuotes();
  }, []);

  return (
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
  );
};

export default FavoriteQuotesLibrary;
