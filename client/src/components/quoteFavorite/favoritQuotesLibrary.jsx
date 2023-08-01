import { fetchAllData, deleteData } from "../utils/apiUtils";
import { useState, useEffect } from "react";
import Spinner from "../utils/spinner";
import FavoriteQuotesContainer from "./favoriteQuotesContainer";
import FavoriteQuoteList from "./favoriteQuoteList ";
import Card from "../card";

const FavoriteQuotesLibrary = () => {
  const url = "http://localhost:3500/quote";
  const [isLoading, setIsLoading] = useState(false);
  const [quoteData, setQuoteData] = useState([]);
  const [rerenderFavorite, setRerenderFavorite] = useState(false);

  const deleteQuoteData = (id) => {
    deleteData(url, id)
      .then(() => {
        setRerenderFavorite(true);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(setIsLoading(false));
  };

  const getAllFavoriteQuotes = () => {
    fetchAllData(url)
      .then((data) => {
        setIsLoading(true);
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
  }, [rerenderFavorite]);

  return (
    <div className="min-h-screen bg-gray-900 py-4">
      {isLoading ? (
        <Spinner />
      ) : quoteData.length === 0 ? (
        <FavoriteQuotesContainer>
          <Card>
            <p className="mb-10 !leading-relaxed text-xl md:text-2xl italic text-blue-400">
              No quote data available.
            </p>
          </Card>
        </FavoriteQuotesContainer>
      ) : (
        <FavoriteQuotesContainer>
          <FavoriteQuoteList
            deleteQuoteData={deleteQuoteData}
            quoteData={quoteData}
            setRerenderFavorite={setRerenderFavorite}
          />
        </FavoriteQuotesContainer>
      )}
    </div>
  );
};

export default FavoriteQuotesLibrary;
