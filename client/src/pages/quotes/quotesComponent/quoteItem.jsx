import { FaTrash, FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { FaRegHeart, FaHeart, FaEdit } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { deleteData, updateHeartStateApi } from "../../../services/quoteApi";

import {
  setQuoteUpdateData,
  toggleUpdateModalOpen,
  setTextColor,
} from "../../../store/slices/quoteSlices/updateQuoteSlice";
import { handleRefetchData } from "../../../store/slices/quoteSlices/fetchAllQuoteSlice";

const QuoteItem = ({ data }) => {
  const dispatch = useDispatch();
  const { heartState } = useSelector((state) => state.updateQuote);

  const handleDeleteQuote = async (id) => {
    try {
      await dispatch(deleteData(id));
      dispatch(handleRefetchData());
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdateHeartState = async ({ quoteData }) => {
    try {
      await dispatch(updateHeartStateApi({ quoteData }));
      dispatch(handleRefetchData());
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex flex-col bg-white dark:bg-neutral-800 text-blue-950 min-w-full max-w-md md:px-4 rounded-xl shadow hover:shadow-md py-4 pt-8 md:pt-10 mb-5 px-2 overflow-hidden cursor-pointer relative">
      {data.Quote && (
        <p
          className="mb-4 md:mb-6 !leading-relaxed text-md md:text-lg "
          style={{
            color: data.TextColor,
          }}
        >
          <span>
            <FaQuoteLeft className="inline h-2.5 w-2.5 mb-2" />
          </span>
          <span className="mx-1.5">{data.Quote}</span>
          <span>
            <FaQuoteRight className="inline h-2.5 w-2.5 mb-2" />
          </span>
        </p>
      )}
      {data.Author && (
        <p
          className="text-sm md:text-md font-thin flex self-end"
          style={{
            color: data.TextColor,
          }}
        >
          - {data.Author}
        </p>
      )}
      <div className="absolute inset-x-0 top-[12px] flex gap-2 justify-between w-[90%] mx-auto">
        <div className="flex gap-2">
          <button onClick={() => handleDeleteQuote(data.Id)}>
            <FaTrash className="hover:text-red-500 text-red-500 md:text-gray-400 transform transition duration-100 hover:scale-[1.06] active:scale-[0.98]"></FaTrash>
          </button>
          <button
            onClick={() => {
              dispatch(setQuoteUpdateData(data));
              dispatch(setTextColor(data.TextColor));
              dispatch(toggleUpdateModalOpen());
            }}
          >
            <FaEdit className="hover:text-green-500 text-green-500 md:text-gray-400 transform transition duration-100 hover:scale-[1.06] active:scale-[0.98]" />
          </button>
        </div>

        {heartState === "save" && (
          <button
            onClick={() => {
              handleUpdateHeartState({
                quoteData: { ...data, Favorite: true },
              });
            }}
          >
            <FaRegHeart
              className="text-blue-500  transform transition duration-100 hover:scale-[1.06] active:scale-[0.98]"
              color={data.TextColor}
            />
          </button>
        )}
        {heartState === "unsave" && (
          <button
            onClick={() => {
              handleUpdateHeartState({
                quoteData: { ...data, Favorite: false },
              });
            }}
          >
            <FaHeart
              className="text-blue-500 transform transition duration-100 hover:scale-[1.06] active:scale-[0.98]"
              color={data.TextColor}
            />
          </button>
        )}
      </div>
    </div>
  );
};

export default QuoteItem;
