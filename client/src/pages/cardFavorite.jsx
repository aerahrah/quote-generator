import Card from "./card";
import { FaTrash } from "react-icons/fa";
import { CSSTransition } from "react-transition-group";

const CardFavorites = ({
  quoteData,
  isDeleting,
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
          <Card>
            <ul className="flex flex-col">
              {data.Quote && (
                <p className="mb-10 !leading-relaxed text-xl md:text-2xl italic text-blue-400 ">
                  "{data.Quote}"
                </p>
              )}
              {data.Author && (
                <p className="mb-10 text-md md:text-lg font-thin flex self-end text-blue-300">
                  {" "}
                  - {data.Author}
                </p>
              )}
              <button
                className="absolute top-4 right-4"
                onClick={() => deleteQuoteData(data.Id)}
              >
                <FaTrash size={"24px"} color="#ef4444"></FaTrash>
              </button>
            </ul>
          </Card>
        </CSSTransition>
      ))}
    </div>
  );
};

export default CardFavorites;
