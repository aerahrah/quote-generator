import { FaTrash } from "react-icons/fa";
import { FaRegHeart, FaHeart, FaEdit } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteData,
  fetchAllData,
  updateHeartStateApi,
} from "../../../services/quoteApi";
import { searchSelector } from "../../../store/selector/searchSelector";
import {
  setQuoteUpdateData,
  toggleUpdateModalOpen,
} from "../../../store/slices/quoteSlices/updateQuoteSlice";

const QuoteItem = ({ data }) => {
  const dispatch = useDispatch();
  const { heartState } = useSelector((state) => state.updateQuote);
  const { searchTerm, filterCategory, filterOrigin } =
    useSelector(searchSelector);

  const handleDeleteQuote = async (id) => {
    try {
      await dispatch(deleteData(id));
      dispatch(fetchAllData({ searchTerm, filterCategory, filterOrigin }));
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdateHeartState = async ({ quoteData }) => {
    try {
      await dispatch(updateHeartStateApi({ quoteData }));
      dispatch(fetchAllData({ searchTerm, filterCategory, filterOrigin }));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex flex-col bg-gray-800 text-blue-950 min-w-full max-w-md md:px-4 rounded-xl shadow hover:shadow-md py-4 pt-8 md:pt-10 mb-6 px-2 overflow-hidden cursor-pointer relative">
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
      <div className="absolute inset-x-0 top-[12px] flex gap-2 justify-between w-[90%] mx-auto">
        <div className="flex gap-2">
          <button onClick={() => handleDeleteQuote(data.Id)}>
            <FaTrash className="hover:text-red-500 text-red-500 md:text-gray-400 transform transition duration-100 hover:scale-[1.06] active:scale-[0.98]"></FaTrash>
          </button>
          <button
            onClick={() => {
              console.log("click");
              dispatch(setQuoteUpdateData(data));
              dispatch(toggleUpdateModalOpen());
            }}
          >
            <FaEdit className="hover:text-green-500 text-green-500 md:text-gray-400 transform transition duration-100 hover:scale-[1.06] active:scale-[0.98]"></FaEdit>
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
            <FaRegHeart className="text-blue-500  transform transition duration-100 hover:scale-[1.06] active:scale-[0.98]" />
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
            <FaHeart className="text-blue-500 transform transition duration-100 hover:scale-[1.06] active:scale-[0.98]" />
          </button>
        )}
      </div>
    </div>
  );
};

export default QuoteItem;
