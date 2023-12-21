import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllData } from "../../services/quoteApi";
import { setHeartState } from "../../store/slices/quoteSlices/updateQuoteSlice";
import { useParams, useLocation } from "react-router-dom";
import Spinner from "../../components/utilsComponent/spinner";
import QuoteContainer from "./quoteLibrary/quoteContainer";
import AddQuoteIcon from "./quoteLibrary/addQuote";
import FilterSortSearchPanel from "./filterSortSearch/filterSortSearchPanel";

const QuoteApp = () => {
  const { refetchData, status } = useSelector((state) => state.fetchAllQuote);
  const { pathname } = useLocation();

  const dispatch = useDispatch();
  const activeSection = pathname.substring(1);
  const quoteData = useSelector((state) => state.fetchAllQuote.data);

  const handlefetchAllQuotes = async () => {
    try {
      dispatch(fetchAllData());
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (activeSection === "library") {
      dispatch(setHeartState("save"));
    } else if (activeSection === "favorite") {
      dispatch(setHeartState("unsave"));
    }

    handlefetchAllQuotes();
  }, [activeSection, refetchData]);

  return (
    <div className="min-h-screen bg-neutral-100 dark:bg-neutral-900 py-4">
      {status === "loading" ? (
        <Spinner />
      ) : (
        <div className="mt-[75px] mx-auto px-4 max-w-[1264px]">
          {quoteData.length > 0 && <FilterSortSearchPanel />}
          <div>
            {activeSection === "library" && (
              <div className="fixed z-10 bottom-[2rem] right-[2rem] md:bottom-[4rem] md:right-[4rem] lg:bottom-[4rem] lg:right-[6rem]">
                <AddQuoteIcon />
              </div>
            )}
            <QuoteContainer
              favoriteMode={activeSection === "favorite" ? true : false}
            />
          </div>
        </div>
      )}
    </div>
  );
};
export default QuoteApp;
