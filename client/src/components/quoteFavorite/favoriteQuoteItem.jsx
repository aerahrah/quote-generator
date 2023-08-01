import Card from "../card";
import { FaTrash } from "react-icons/fa";

const FavoriteQuoteItem = ({ deleteQuoteData, data }) => {
  return (
    <ul className="flex flex-col bg-gray-800 text-blue-950 min-w-full max-w-md py-2 md:px-4 rounded-xl  shadow-sm hover:shadow pt-6 mb-8 px-2 overflow-hidden cursor-pointer relative">
      {data.Quote && (
        <p className="mb-10 !leading-relaxed text-xl md:text-xl italic text-blue-400 ">
          "{data.Quote}"
        </p>
      )}
      {data.Author && (
        <p className="mb-10 text-md md:text-md font-thin flex self-end text-blue-300">
          - {data.Author}
        </p>
      )}
      <button
        className="absolute top-4 right-4"
        onClick={() => deleteQuoteData(data.Id)}
      >
        <FaTrash color="#ef4444"></FaTrash>
      </button>
    </ul>
  );
};

export default FavoriteQuoteItem;
