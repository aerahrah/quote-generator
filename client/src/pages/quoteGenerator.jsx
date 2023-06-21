import { useState, useEffect } from "react";
import {saveData, fetchData } from "../components/utils/apiUtils";
import Timer from "../components/utils/messageTimeout";
import Spinner from "../components/utils/spinner";
import Card from "./card";
import { AiOutlineHeart } from "react-icons/ai";
const QuoteGenerator = () => {
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
      console.error(error);
    })
    .finally(() => {
      setIsLoading(false);
    });
  };

  useEffect(() => {
    fetchDataAndUpdate();
  }, []);


  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const { author, quote } = quoteData && quoteData.length > 0 ? quoteData[0] : {};

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
    <div className="w-full h-screen">
      <div>
        <label htmlFor="selectInput">Select an option:</label>
        <select id="selectInput" value={selectedOption} onChange={handleOptionChange}>
          <option value="">Select...</option>
          <option value="happiness">Happy</option>
          <option value="anger">Anger</option>
          <option value="courage">Courage</option>
          <option value="fitness">Fitness</option>
          <option value="love">Love</option>
          <option value="history">History</option>
        </select>

      </div>
      <div>
        <Card>
        {isLoading ? (
          <Spinner />
        ) : (
          <div className="flex flex-col text-gray-200">
            {quote && <p className="mb-10 text-xl md:text-2xl italic">"{quote}"</p>}
            {author && <p className="mb-6 text-md md:text-lg font-thin flex self-end"> - {author}</p>}
            <button className="absolute top-4 right-4" onClick={handleSave}> <AiOutlineHeart size={"34px"} color="pink"></AiOutlineHeart></button>

            <button onClick={fetchDataAndUpdate}>Next</button>
         </div>
        )}
        </Card>
      </div>

      {message && (
          <>
          <p>{message}</p>
          <Timer message={message} setMessage={setMessage} />
          </>
      )}     
    </div>
  );
};

export default QuoteGenerator;