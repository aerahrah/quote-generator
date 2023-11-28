import {
  FaRegHeart,
  FaHeart,
  FaPlusCircle,
  FaMinusCircle,
} from "react-icons/fa";
import {
  selectQuote,
  selectFetchQuoteData,
  selectFetchQuoteStatus,
} from "../../store/selector/quoteSelector";
import {
  clearMessage,
  clearQuoteId,
  clearFavoriteQuoteId,
} from "../../store/slices/quoteSlices/quoteSlices";
import { useState, useEffect } from "react";
import { saveData, fetchData, deleteData } from "../../services/quoteApi";
import { useDispatch, useSelector } from "react-redux";
import CategoryDropdown from "./categoryDropdown";
import Spinner from "../../components/utilsComponent/spinner";
import Card from "../../components/globalComponents/card";
import Timer from "../../components/utilsComponent/messageTimeout";

const RandomQuoteGenerator = () => {
  const dispatch = useDispatch();
  const staticQuoteData = useSelector(selectFetchQuoteData);
  const staticQuoteStatus = useSelector(selectFetchQuoteStatus);
  const { message, favoriteQuoteId, quoteId } = useSelector(selectQuote);

  const [heartState, setHeartState] = useState("save");
  const [addQuoteState, setAddQuoteState] = useState("add");
  const [selectedOption, setSelectedOption] = useState("");

  const handleFetchData = async () => {
    dispatch(fetchData());
    setAddQuoteState("add");
    setHeartState("save");
    dispatch(clearMessage());
  };

  const handleToggleSaveFavorite = async (id) => {
    if (heartState === "save") {
      await dispatch(
        saveData({
          quoteData: { ...staticQuoteData, origin: "generated" },
          favoriteQuote: true,
        })
      );
      setHeartState("unsave");
    } else {
      await dispatch(deleteData(id)).then(() => {
        dispatch(clearFavoriteQuoteId());
      });
      setHeartState("save");
    }
  };

  const handleToggleSave = async (id) => {
    if (addQuoteState === "add") {
      await dispatch(
        saveData({
          quoteData: { ...staticQuoteData, origin: "generated" },
          favoriteQuote: false,
        })
      );
      setAddQuoteState("remove");
    } else {
      await dispatch(deleteData(id)).then(() => dispatch(clearQuoteId()));
      setAddQuoteState("add");
    }
  };

  useEffect(() => {
    handleFetchData();
  }, [selectedOption]);

  return (
    <div className="mt-32 bg-gray-900 px-4">
      <CategoryDropdown
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
      />
      <Card>
        {staticQuoteStatus === "loading" ? (
          <div>
            <Spinner />
          </div>
        ) : (
          <div className="flex flex-col text-gray-200 ">
            <div className="absolute top-[12px] right-[12px] flex gap-3 items-center">
              <button onClick={() => handleToggleSave(quoteId)}>
                {addQuoteState === "add" ? (
                  <FaPlusCircle
                    className="transform transition duration-100 hover:scale-[1.06] active:scale-[0.98]"
                    size={"24px"}
                    color="#0ea5e9"
                  />
                ) : (
                  <FaMinusCircle
                    className="transform transition duration-100 hover:scale-[1.06] active:scale-[0.98]"
                    size={"24px"}
                    color="#0ea5e9"
                  />
                )}
              </button>
              <button onClick={() => handleToggleSaveFavorite(favoriteQuoteId)}>
                {heartState === "save" ? (
                  <FaRegHeart
                    className="transform transition duration-100 hover:scale-[1.06] active:scale-[0.98]"
                    size={"24px"}
                    color="#0ea5e9"
                  />
                ) : (
                  <FaHeart
                    className="transform transition duration-100 hover:scale-[1.06] active:scale-[0.98]"
                    size={"24px"}
                    color="#0ea5e9"
                  />
                )}
              </button>
            </div>

            <div className="flex flex-col mb-24">
              <p className=" mt-6 md:mt-2 mb-8 !leading-relaxed text-xl md:text-2xl italic text-blue-400 ">
                "{staticQuoteData.quote}"
              </p>
              <p className="text-md md:text-lg font-thin flex self-end text-blue-300">
                - {staticQuoteData.author}
              </p>
              <div className="text-center self-center absolute bottom-[1rem] ">
                <div
                  className={`w-72 transition duration-200 ${
                    message ? "scale-100" : "scale-0"
                  } mb-6`}
                >
                  {message && <p>{message}</p>}
                </div>
                <Timer message={message} clearMessageFunction={clearMessage} />
                <button
                  className=" btn bg-green-400 text-gray-700 text-md md:text-lg font-semibold px-8 mx-auto rounded-xl"
                  onClick={handleFetchData}
                >
                  New Quote
                </button>
              </div>
            </div>
          </div>
        )}
      </Card>
    </div>
  );
};

export default RandomQuoteGenerator;
