import {
  FaRegHeart,
  FaHeart,
  FaPlusCircle,
  FaMinusCircle,
  FaQuoteLeft,
  FaQuoteRight,
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
import { getCategoryColor } from "../../utils/getCategoryColor";
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
  const [selectedOption, setSelectedOption] = useState("all category");

  const handleFetchData = async () => {
    try {
      if (selectedOption === "all category") {
        dispatch(fetchData());
      } else {
        dispatch(fetchData(selectedOption));
      }
      setAddQuoteState("add");
      setHeartState("save");
      dispatch(clearMessage());
    } catch (error) {
      console.log(error);
    }
  };

  const handleToggleSaveFavorite = async (id) => {
    if (heartState === "save") {
      await dispatch(
        saveData({
          quoteData: {
            ...staticQuoteData,
            origin: "generated",
            favorite: true,
          },
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
          quoteData: {
            ...staticQuoteData,
            origin: "generated",
            favorite: false,
          },
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
    <div className="pt-28 h-full bg-neutral-100 dark:bg-neutral-900 px-4">
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
                    color={getCategoryColor(staticQuoteData.category)}
                  />
                ) : (
                  <FaMinusCircle
                    className="transform transition duration-100 hover:scale-[1.06] active:scale-[0.98]"
                    size={"24px"}
                    color={getCategoryColor(staticQuoteData.category)}
                  />
                )}
              </button>
              <button onClick={() => handleToggleSaveFavorite(favoriteQuoteId)}>
                {heartState === "save" ? (
                  <FaRegHeart
                    className="transform transition duration-100 hover:scale-[1.06] active:scale-[0.98]"
                    size={"24px"}
                    color={getCategoryColor(staticQuoteData.category)}
                  />
                ) : (
                  <FaHeart
                    className="transform transition duration-100 hover:scale-[1.06] active:scale-[0.98]"
                    size={"24px"}
                    color={getCategoryColor(staticQuoteData.category)}
                  />
                )}
              </button>
            </div>

            <div className="flex flex-col mb-24">
              <p
                className=" mt-6 md:mt-2 mb-8 !leading-relaxed text-xl md:text-2xl"
                style={{
                  color: getCategoryColor(staticQuoteData.category),
                }}
              >
                <span>
                  <FaQuoteLeft className="inline h-5 w-5 mb-2" />
                </span>
                <span className="mx-3">{staticQuoteData.quote}</span>
                <span>
                  <FaQuoteRight className="inline h-5 w-5 mb-2" />
                </span>
              </p>
              <p
                className="text-md md:text-lg font-thin flex self-end"
                style={{
                  color: getCategoryColor(staticQuoteData.category),
                }}
              >
                - {staticQuoteData.author}
              </p>
              <div className="text-center self-center absolute bottom-[1rem] text-neutral-700 dark:text-neutral-300">
                <div
                  className={`w-72 transition duration-200 ${
                    message ? "scale-100" : "scale-0"
                  } mb-6`}
                >
                  {message && <p>{message}</p>}
                </div>
                <Timer message={message} clearMessageFunction={clearMessage} />
                <button
                  className=" btn text-neutral-100 text-md md:text-lg font-semibold px-8 mx-auto rounded-full"
                  style={{
                    background: getCategoryColor(staticQuoteData.category),
                  }}
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
