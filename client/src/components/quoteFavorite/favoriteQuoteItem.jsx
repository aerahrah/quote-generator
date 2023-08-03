import { FaTrash } from "react-icons/fa";

const FavoriteQuoteItem = ({ deleteQuoteData, data }) => {
  return (
    <ul className="flex flex-col bg-gray-800 text-blue-950 min-w-full max-w-md md:px-4 rounded-xl shadow hover:shadow-md py-4 pt-6 md:py-8 mb-8 px-2 overflow-hidden cursor-pointer relative">
      {data.Quote && (
        <p className="mb-4 md:mb-6 !leading-relaxed text-md md:text-lg italic text-blue-400 ">
          "{data.Quote}"
        </p>
      )}
      {data.Author && (
        <p className="text-sm md:text-md font-thin flex self-end text-blue-300">
          - {data.Author}
        </p>
      )}
      <button
        className="absolute top-[8px] right-[8px]"
        onClick={() => deleteQuoteData(data.Id)}
      >
        <FaTrash color="#ef4444"></FaTrash>
      </button>
    </ul>
  );
};

export default FavoriteQuoteItem;
