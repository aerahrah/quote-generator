import AddQuote from "./addQuote";
import GetAllQuotes from "./getAllQuotes";

const QuotesLibrary = () => {
  return (
    <div>
      <GetAllQuotes></GetAllQuotes>
      <div className="absolute bottom-[14vw] right-[14%] md:bottom-[14%] md:right-[10%]">
        <AddQuote />
      </div>
    </div>
  );
};

export default QuotesLibrary;
