import { useState, useEffect, useContext } from "react";
import { saveData, fetchData } from "../utils/apiUtils";
import Timer from "../utils/messageTimeout";
import { FaRegHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ErrorContext } from "../utils/errorContext";
import CategoryDropdown from "./categoryDropdown";
import Spinner from "../utils/spinner";
import Card from "../card";

const RandomQuoteGenerator = () => {
  const { setError } = useContext(ErrorContext);
  const navigate = useNavigate();
  const url = "http://localhost:3500/quote";
  const [quoteData, setQuoteData] = useState([]);
  const [selectedOption, setSelectedOption] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [message, setMessage] = useState("");

  const fetchDataAndUpdate = () => {
    setIsLoading(true);
    fetchData(selectedOption, url)
      .then((data) => {
        setQuoteData(data);
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

  const handleSave = () => {
    saveData(quoteData, url)
      .then((responseMessage) => {
        setMessage(responseMessage);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="transform translate-y-36 md:translate-y-16">
      <CategoryDropdown
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
      />
      <Card>
        {isLoading ? (
          <Spinner />
        ) : (
          <div className="flex flex-col text-gray-200 ">
            <div className="flex flex-col">
              <p className="mt-5 mb-10 !leading-relaxed text-xl md:text-2xl italic text-blue-400 ">
                "{quoteData[0].quote}"
              </p>
              <p className="mb-10 text-md md:text-lg font-thin flex self-end text-blue-300">
                - {quoteData[0].author}
              </p>
            </div>

            <div className="text-center">
              <div
                className={`m-auto w-72 transition duration-200 ${
                  message ? "scale-100" : "scale-0"
                } mb-6`}
              >
                {message && <p>{message}</p>}
              </div>
              <Timer message={message} setMessage={setMessage} />
            </div>
            <button className="absolute top-4 right-4" onClick={handleSave}>
              <FaRegHeart size={"24px"} color="#0ea5e9"></FaRegHeart>
            </button>

            <button
              className="btn bg-green-400 text-gray-700 w-36 self-center text-lg font-semibold"
              onClick={fetchDataAndUpdate}
            >
              Next
            </button>
          </div>
        )}
      </Card>
    </div>
  );
};

export default RandomQuoteGenerator;
