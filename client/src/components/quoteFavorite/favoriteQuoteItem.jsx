import Card from "../card";
import { FaTrash } from "react-icons/fa";

const FavoriteQuoteItem = ({ deleteQuoteData, data }) => {
  return (
    <Card>
      <ul className="flex flex-col">
        {data.Quote && (
          <p className="mb-10 !leading-relaxed text-xl md:text-2xl italic text-blue-400 ">
            "{data.Quote}"
          </p>
        )}
        {data.Author && (
          <p className="mb-10 text-md md:text-lg font-thin flex self-end text-blue-300">
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
  );
};

export default FavoriteQuoteItem;
