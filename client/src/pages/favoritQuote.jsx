import { fetchAllData, deleteData } from "../components/utils/apiUtils";
import { useState, useEffect } from "react";
import Spinner from "../components/utils/spinner";
import NavBar from "../components/navbar";
import CardContainer from "./cardContainer";
import CardFavorites from "./cardFavorite";
import Card from "./card";

const Library = () => {
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
      .then((data) => {
        console.log(data.message);
        setShouldReload(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getAllFavoriteQuotes = () => {
    fetchAllData(url)
      .then((data) => {
        console.log(data);
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
        {console.log(quoteData.length)}
        {isLoading ? (
          <Spinner />
        ) : quoteData.length === 0 ? (
          <CardContainer>
            <Card>
              <p className="mb-10 !leading-relaxed text-xl md:text-2xl italic text-blue-400">
                No quote data available.
              </p>
            </Card>
          </CardContainer>
        ) : (
          <CardContainer>
            <CardFavorites
              deleteQuoteData={deleteQuoteData}
              quoteData={quoteData}
              isDeleting={isDeleting}
              setIsDeleting={setIsDeleting}
              deletedId={deletedId}
            />
          </CardContainer>
        )}
      </div>
    </div>
  );
};

export default Library;
