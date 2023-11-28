import {
  FaRegHeart,
  FaHeart,
  FaPlusCircle,
  FaMinusCircle,
} from "react-icons/fa";
import { useState, useEffect } from "react";
import { saveData, fetchData, deleteData } from "../../services/quoteApi";
import { useDispatch, useSelector } from "react-redux";
import {
  selectQuoteStatus,
  selectQuoteData,
} from "../../store/selector/quoteSelector";
import CategoryDropdown from "./categoryDropdown";
import Spinner from "../../components/utilsComponent/spinner";
import Card from "../../components/globalComponents/card";
import Timer from "../../components/utilsComponent/messageTimeout";

const RandomQuoteGenerator = () => {
  const dispatch = useDispatch();
  const quoteStatus = useSelector(selectQuoteStatus);
  const quoteData = useSelector(selectQuoteData);
  const [isLoading, setIsLoading] = useState(true);
  const [quoteId, setQuoteId] = useState();
  const [heartState, setHeartState] = useState("save");
  const [addQuoteState, setAddQuoteState] = useState("add");
  const [selectedOption, setSelectedOption] = useState("");
  const [message, setMessage] = useState("");
  const [quoteIdLibrary, setQuoteIdLibrary] = useState("");
  const handleFetchData = async () => {
    setIsLoading(true);
    dispatch(fetchData());
    setAddQuoteState("add");
    setHeartState("save");
    setMessage("");
    setIsLoading(false);
  };

  const handleToggleSaveFavorite = async (id) => {
    if (heartState === "save") {
      const data = await dispatch(
        saveData({ ...quoteData[0], origin: "generated" }, true)
      );
      // setQuoteId(data.createQuote._id);
      setHeartState("unsave");
    } else {
      dispatch(deleteData(id));
      setQuoteId("");
      setHeartState("save");
    }
  };

  const handleToggleSave = async (id) => {
    if (addQuoteState === "add") {
      const data = await dispatch(
        saveData({
          quoteData: { ...quoteData[0], origin: "generated" },
          favoriteQuote: false,
        })
      );
      setAddQuoteState("remove");
      console.log(quoteData);
      console.log(data);
      // setQuoteIdLibrary(data.createQuote._id);
    } else {
      dispatch(deleteData(id));
      setQuoteIdLibrary("");
      setAddQuoteState("add");
    }
  };

  useEffect(() => {
    handleFetchData();
    console.log(quoteStatus);
    console.log(quoteData);
  }, [selectedOption]);
  return (
    <div className="mt-32 bg-gray-900 px-4">
      <CategoryDropdown
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
      />
      <Card>
        {quoteStatus === "loading" || isLoading ? (
          <div>
            {console.log(quoteStatus)}
            <Spinner />
          </div>
        ) : (
          <div className="flex flex-col text-gray-200 ">
            <div className="absolute top-[12px] right-[12px] flex gap-3 items-center">
              <button onClick={() => handleToggleSave(quoteIdLibrary)}>
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
              <button onClick={() => handleToggleSaveFavorite(quoteId)}>
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
                "{quoteData[0].quote}"
              </p>
              <p className="text-md md:text-lg font-thin flex self-end text-blue-300">
                - {quoteData[0].author}
              </p>
              <div className="text-center self-center absolute bottom-[1rem] ">
                <div
                  className={`w-72 transition duration-200 ${
                    message ? "scale-100" : "scale-0"
                  } mb-6`}
                >
                  {message && <p>{message}</p>}
                </div>
                <Timer message={message} setMessage={setMessage} />
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
