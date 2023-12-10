import { useState, useEffect } from "react";
import { searchSelector } from "../../store/selector/searchSelector";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllData } from "../../services/quoteApi";
import { setHeartState } from "../../store/slices/quoteSlices/updateQuoteSlice";
import { handleRefetchData } from "../../store/slices/quoteSlices/fetchAllQuoteSlice";
import Spinner from "../../components/utilsComponent/spinner";
import QuoteContainer from "./quoteLibrary/quoteContainer";
import AddQuoteIcon from "./quoteLibrary/addQuote";
import FilterSortSearchPanel from "./filterSortSearch/filterSortSearchPanel";

const QuoteApp = ({ activeSection }) => {
  const dispatch = useDispatch();
  const { searchTerm, filterCategory, filterOrigin } =
    useSelector(searchSelector);
  const { refetchData, status } = useSelector((state) => state.fetchAllQuote);

  const handlefetchAllQuotes = async () => {
    try {
      dispatch(fetchAllData({ searchTerm, filterCategory, filterOrigin }));
    } catch (error) {
      console.log(error);
    }
  };

  const handleRefetchQuote = () => {
    dispatch(handleRefetchData());
  };

  useEffect(() => {
    if (activeSection === "quoteLibrary") {
      dispatch(setHeartState("save"));
    } else if (activeSection === "favoriteQuoteLibrary") {
      dispatch(setHeartState("unsave"));
    }

    handlefetchAllQuotes();
  }, [activeSection, refetchData]);

  return (
    <div className="min-h-screen bg-neutral-100 dark:bg-neutral-900 py-4">
      {status === "loading" ? (
        <Spinner />
      ) : (
        <div className="mt-[75px] px-4 md:px-12 lg:px-24 xl:px-36">
          <FilterSortSearchPanel handleOnChange={handleRefetchQuote} />
          <div>
            {activeSection === "quoteLibrary" && (
              <div className="fixed z-10 bottom-[2rem] right-[2rem] md:bottom-[4rem] md:right-[4rem] lg:bottom-[4rem] lg:right-[6rem]">
                <AddQuoteIcon />
              </div>
            )}
            <QuoteContainer
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
