import { useState, useEffect } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { searchSelector } from "../../store/selector/searchSelector";
import Spinner from "../../components/utilsComponent/spinner";
import {
  fetchAllData,
  deleteData,
  updateHeartStateApi,
} from "../../services/quoteApi";
import QuoteContainer from "./quoteLibrary/quoteContainer";
import AddQuoteIcon from "./quoteLibrary/addQuoteIcon";
import FilterSortSearchPanel from "../filterSortSearch/filterSortSearchPanel";

const QuoteApp = ({ activeSection }) => {
  const { searchTerm, filterCategory, filterOrigin } =
    useSelector(searchSelector);

  const [heartState, setHeartState] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [quoteUpdateDataId, setQuoteUpdateDataId] = useState("");
  const [openUpdateModal, setOpenUpdateModal] = useState(false);
  const [updateTrigger, setUpdateTrigger] = useState(false);
  const [quoteData, setQuoteData] = useState({
    author: "",
    quote: "",
    favorite: "",
    origin: "original",
  });
  const [quoteUpdateData, setQuoteUpdateData] = useState({
    author: "",
    quote: "",
    favorite: "",
  });
  const deleteQuoteData = (id) => {
    deleteData(id)
      .then(() => {
        getAllQuotes();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const updateHeartState = (id, data, favoriteQuote) => {
    updateHeartStateApi(id, data, favoriteQuote)
      .then(() => {
        setQuoteUpdateDataId("");
        getAllQuotes();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getAllQuotes = () => {
    fetchAllData(searchTerm, filterCategory, filterOrigin)
      .then((data) => {
        setQuoteData(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  const handleOnChange = () => {
    setUpdateTrigger((prevTrigger) => !prevTrigger);
  };

  useEffect(() => {
    if (activeSection === "quoteLibrary") {
      setHeartState("save");
    } else if (activeSection === "favoriteQuoteLibrary") {
      setHeartState("unsave");
    }
    getAllQuotes();
  }, [activeSection, updateTrigger, isLoading]);
  return (
    <div className="min-h-screen bg-gray-900 py-4">
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="mt-[75px] px-4 md:px-12 lg:px-24 xl:px-36">
          <FilterSortSearchPanel handleOnChange={handleOnChange} />
          <div>
            {activeSection === "quoteLibrary" && (
              <div className="fixed z-10 bottom-[2rem] right-[2rem] md:bottom-[4rem] md:right-[4rem] lg:bottom-[4rem] lg:right-[6rem]">
                <AddQuoteIcon getAllQuotes={getAllQuotes} />
              </div>
            )}
            <QuoteContainer
              heartState={heartState}
              setHeartState={setHeartState}
              quoteData={quoteData}
              deleteQuoteData={deleteQuoteData}
              updateHeartState={updateHeartState}
              openUpdateModal={openUpdateModal}
              setOpenUpdateModal={setOpenUpdateModal}
              setQuoteUpdateData={setQuoteUpdateData}
              quoteUpdateData={quoteUpdateData}
              setQuoteUpdateDataId={setQuoteUpdateDataId}
              quoteUpdateDataId={quoteUpdateDataId}
              getAllQuotes={getAllQuotes}
              favoriteMode={
                activeSection === "favoriteQuoteLibrary" ? true : false
              }
            />
          </div>
        </div>
      )}
    </div>
  );
};
export default QuoteApp;
