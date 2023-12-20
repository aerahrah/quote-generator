import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchSelector } from "../../../store/selector/searchSelector";
import QuoteList from "../quotesComponent/quoteList";
import UpdateQuoteModal from "./updateQuote";

const QuoteContainer = ({ favoriteMode }) => {
  const [filterQuotes, setFilterQuotes] = useState([]);
  const quoteData = useSelector((state) => state.fetchAllQuote.data);
  const { searchTerm, filterCategory, filterOrigin } =
    useSelector(searchSelector);

  const filterQuote = () => {
    let filteredQuotes = quoteData;

    if (searchTerm) {
      filteredQuotes = filteredQuotes.filter(
        (quote) =>
          quote.Quote.toLowerCase().includes(searchTerm.toLowerCase()) ||
          quote.Author.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    const categoryFilters = {
      happiness: "happiness",
      anger: "anger",
      courage: "courage",
      fitness: "fitness",
      love: "love",
      history: "history",
    };

    if (filterCategory && categoryFilters[filterCategory]) {
      filteredQuotes = filteredQuotes.filter(
        (quote) => quote.Category === categoryFilters[filterCategory]
      );
    }

    if (
      filterOrigin &&
      (filterOrigin === "original" || filterOrigin === "generated")
    ) {
      filteredQuotes = filteredQuotes.filter(
        (quote) => quote.Origin === filterOrigin
      );
    }

    if (!searchTerm && !filterCategory && !filterOrigin) {
      filteredQuotes = quoteData;
    }

    setFilterQuotes(filteredQuotes);
  };

  const filteredQuote = filterQuotes.filter(({ Favorite }) =>
    favoriteMode ? Favorite : !Favorite
  );

  const noQuoteMessage = favoriteMode
    ? " No favorite quote.."
    : "No Quote in Library..";

  useEffect(() => {
    filterQuote();
  }, [searchTerm, filterCategory, filterOrigin]);
  return (
    <div className="pt-4">
      {filteredQuote.length === 0 ? (
        <div className="absolute trasform top-[50%] left-[50%]  translate-y-[-50%] translate-x-[-50%]">
          <p className="whitespace-nowrap text-2xl md:text-3xl font-semibold text-neutral-500">
            {noQuoteMessage}
          </p>
        </div>
      ) : (
        <QuoteList quoteData={filteredQuote} />
      )}
      <UpdateQuoteModal />
    </div>
  );
};

export default QuoteContainer;
