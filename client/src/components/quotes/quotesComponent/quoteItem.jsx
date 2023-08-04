import { FaTrash } from "react-icons/fa";
import { FaRegHeart, FaHeart } from "react-icons/fa";

const QuoteItem = ({ deleteQuoteData, data, heartState, setHeartState }) => {
  return (
    <div className="flex flex-col bg-gray-800 text-blue-950 min-w-full max-w-md md:px-4 rounded-xl shadow hover:shadow-md py-4 pt-6 md:py-8 mb-8 px-2 overflow-hidden cursor-pointer relative">
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
      <div className="absolute top-[8px] right-[8px] flex gap-2 flex-row-reverse">
        <button onClick={() => deleteQuoteData(data.Id)}>
          <FaTrash
            className="transform transition duration-100 hover:scale-[1.06] active:scale-[0.98]"
            color="#ef4444"
          ></FaTrash>
        </button>
        {heartState === "save" && (
          <button onClick={() => handleSave(true)}>
            <FaRegHeart
              className="transform transition duration-100 hover:scale-[1.06] active:scale-[0.98]"
              color="#0ea5e9"
            />
          </button>
        )}
        {heartState === "unsave" && (
          <button onClick={() => handleUnsave(quoteId)}>
            <FaHeart
              className="transform transition duration-100 hover:scale-[1.06] active:scale-[0.98]"
              color="#0ea5e9"
            />
          </button>
        )}
      </div>
    </div>
  );
};

export default QuoteItem;
