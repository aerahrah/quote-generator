import QuoteList from "../quotesComponent/quoteList";
import UpdateQuoteModal from "./updateQuote";
import { useDispatch, useSelector } from "react-redux";
const QuoteContainer = ({ favoriteMode }) => {
  const quoteData = useSelector((state) => state.fetchAllQuote.data);

  const filteredQuote = quoteData.filter(({ Favorite }) =>
    favoriteMode ? Favorite : !Favorite
  );

  const noQuoteMessage = favoriteMode
    ? " No favorite quote.."
    : "No Quote in Library..";
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
