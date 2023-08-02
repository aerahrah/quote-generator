import { useState, useEffect, useContext } from "react";
import { saveData, fetchData, deleteData } from "../utils/apiUtils";
import Timer from "../utils/messageTimeout";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ErrorContext } from "../utils/errorContext";
import CategoryDropdown from "./categoryDropdown";
import Spinner from "../utils/spinner";
import Card from "../card";

const RandomQuoteGenerator = () => {
  const { setError } = useContext(ErrorContext);
  const navigate = useNavigate();
  const url = "http://localhost:3500/quote";
  const [quoteData, setQuoteData] = useState({
    author: "",
    quote: "",
  });
  const [heartState, setHeartState] = useState("save");
  const [selectedOption, setSelectedOption] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [message, setMessage] = useState("");
  const [quoteId, setQuoteId] = useState("");
  const fetchDataAndUpdate = () => {
    setIsLoading(true);
    fetchData(selectedOption, url)
      .then((data) => {
        setQuoteData({
          ...quoteData,
          author: data[0].author,
          quote: data[0].quote,
        });

        setHeartState("save");
        setMessage("");
        setFavoriteQuote(false);
      })
      .catch((error) => {
        if (error.message == "unauthorized") {
          setError(`Request Failed:  ${error.message}. please sign in`);
          navigate("/signin");
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchDataAndUpdate();
  }, [selectedOption]);

  const handleSave = (favoriteQuote) => {
    saveData(quoteData, favoriteQuote, url)
      .then((responseMessage) => {
        setHeartState("unsave");
        setMessage(responseMessage.data.message);
        setQuoteId(responseMessage.data.createQuote._id);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const handleUnsave = (id) => {
    deleteData(url, id)
      .then(() => {
        setQuoteId("");
        setHeartState("save");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="mt-32 bg-gray-900 px-4">
      <CategoryDropdown
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
      />
      <Card>
        {isLoading ? (
          <Spinner />
        ) : (
          <div className="flex flex-col text-gray-200 ">
            {heartState === "save" && (
              <button
                className="absolute top-[12px] right-[12px]"
                onClick={() => handleSave(true)}
              >
                <FaRegHeart
                  className="transform transition duration-100 hover:scale-[1.06] active:scale-[0.98]"
                  size={"24px"}
                  color="#0ea5e9"
                />
              </button>
            )}
            {heartState === "unsave" && (
              <button
                className="absolute top-[12px] right-[12px]"
                onClick={() => handleUnsave(quoteId)}
              >
                <FaHeart
                  className="transform transition duration-100 hover:scale-[1.06] active:scale-[0.98]"
                  size={"24px"}
                  color="#0ea5e9"
                />
              </button>
            )}

            <div>
              <div className="flex flex-col mb-24">
                <p className="mt-2 mb-8 !leading-relaxed text-xl md:text-2xl italic text-blue-400 ">
                  "{quoteData.quote}"
                </p>
                <p className="text-md md:text-lg font-thin flex self-end text-blue-300">
                  - {quoteData.author}
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
                    onClick={fetchDataAndUpdate}
                  >
                    New Quote
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </Card>
    </div>
  );
};

export default RandomQuoteGenerator;
