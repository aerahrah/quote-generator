import { fetchAllData, deleteData } from "../utils/apiUtils";
import { useState, useEffect } from "react";
import Spinner from "../utils/spinner";
import NavBar from "../navbar";
import FavoriteQuotesContainer from "./favoriteQuotesContainer";
import FavoriteQuoteList from "./favoriteQuoteList ";
import Card from "../card";

const FavoriteQuotesLibrary = () => {
  const url = "http://localhost:3500/quote";
  const [isLoading, setIsLoading] = useState(false);
  const [quoteData, setQuoteData] = useState([]);
  const [shouldReload, setShouldReload] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [deletedId, setDeletedId] = useState(null);

  const deleteQuoteData = (id) => {
    setDeletedId(id);
    setIsDeleting(true);
    deleteData(url, id)
      .then(() => {
        setShouldReload(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getAllFavoriteQuotes = () => {
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
  }, [shouldReload]);

  useEffect(() => {
    if (shouldReload) {
      setShouldReload(false);
    }
  }, [shouldReload]);

  return (
    <div className="w-full h-screen bg-gray-900 flex flex-col relative">
      <NavBar />
      <div>
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
              isDeleting={isDeleting}
              setIsDeleting={setIsDeleting}
              deletedId={deletedId}
            />
          </FavoriteQuotesContainer>
        )}
      </div>
    </div>
  );
};

export default FavoriteQuotesLibrary;
