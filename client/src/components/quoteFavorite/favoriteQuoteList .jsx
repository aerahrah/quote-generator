import FavoriteQuoteItem from "./favoriteQuoteItem";
import { CSSTransition } from "react-transition-group";

const FavoriteQuoteList = ({
  quoteData,
  deleteQuoteData,
  setIsDeleting,
  deletedId,
}) => {
  const handleOnExited = () => {
    setIsDeleting(false);
  };

  return (
    <div className="flex flex-col">
      {quoteData.map((data) => (
        <CSSTransition
          key={data.Id}
          in={deletedId == data.Id}
          timeout={300}
          classNames="fade-scale"
          onExited={handleOnExited}
        >
          <FavoriteQuoteItem deleteQuoteData={deleteQuoteData} data={data} />
        </CSSTransition>
      ))}
    </div>
  );
};

export default FavoriteQuoteList;
