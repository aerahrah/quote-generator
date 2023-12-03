import { useState, useEffect } from "react";
import { searchSelector } from "../../store/selector/searchSelector";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllData, updateHeartStateApi } from "../../services/quoteApi";
import Spinner from "../../components/utilsComponent/spinner";
import QuoteContainer from "./quoteLibrary/quoteContainer";
import AddQuoteIcon from "./quoteLibrary/addQuote";
import FilterSortSearchPanel from "../filterSortSearch/filterSortSearchPanel";

const QuoteApp = ({ activeSection }) => {
  const dispatch = useDispatch();
  const { searchTerm, filterCategory, filterOrigin } =
    useSelector(searchSelector);

  const fetchAllQuoteStatus = useSelector(
    (state) => state.fetchAllQuote.status
  );

  const [heartState, setHeartState] = useState("");
  const [updateTrigger, setUpdateTrigger] = useState(false);

  const updateHeartState = (id, data, favoriteQuote) => {
    updateHeartStateApi(id, data, favoriteQuote)
      .then(() => {
        setQuoteUpdateDataId("");
        handlefetchAllQuotes();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handlefetchAllQuotes = async () => {
    dispatch(fetchAllData({ searchTerm, filterCategory, filterOrigin }));
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

    handlefetchAllQuotes();
  }, [activeSection, updateTrigger]);

  return (
    <div className="min-h-screen bg-gray-900 py-4">
      {fetchAllQuoteStatus === "loading" ? (
        <Spinner />
      ) : (
        <div className="mt-[75px] px-4 md:px-12 lg:px-24 xl:px-36">
          <FilterSortSearchPanel handleOnChange={handleOnChange} />

          <div>
            {activeSection === "quoteLibrary" && (
              <div className="fixed z-10 bottom-[2rem] right-[2rem] md:bottom-[4rem] md:right-[4rem] lg:bottom-[4rem] lg:right-[6rem]">
                <AddQuoteIcon />
              </div>
            )}
            <QuoteContainer
              heartState={heartState}
              setHeartState={setHeartState}
              updateHeartState={updateHeartState}
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
