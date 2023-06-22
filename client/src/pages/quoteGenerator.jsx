import { useState, useEffect } from "react";
import {saveData, fetchData } from "../components/utils/apiUtils";
import Timer from "../components/utils/messageTimeout";
import Spinner from "../components/utils/spinner";
import Card from "./card";
import { AiOutlineHeart } from "react-icons/ai";
import NavBar from "../components/navbar";
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
    <div className="w-full h-screen bg-gray-900 flex flex-col">
      <NavBar></NavBar>
      <div className="transform translate-y-36 md:translate-y-16">
     <div className="w-96 m-auto flex justify-center items-center text-lg text-gray-200 mb-6">
  <label htmlFor="selectInput" className="mr-2">Quote Category:</label>
  <select
    id="selectInput"
    value={selectedOption}
    onChange={handleOptionChange}
    className="rounded px-2 py-1 bg-transparent focus:outline-none"
  >
    <option className="bg-gray-800" value="">Select...</option>
    <option className="bg-gray-800" value="happiness">Happy</option>
    <option className="bg-gray-800" value="anger">Anger</option>
    <option className="bg-gray-800" value="courage">Courage</option>
    <option className="bg-gray-800" value="fitness">Fitness</option>
    <option className="bg-gray-800" value="love">Love</option>
    <option className="bg-gray-800" value="history">History</option>
  </select>
</div>
        <Card>
        {isLoading ? (
          <Spinner />
        ) : (
          <div className="flex flex-col text-gray-200 ">
            {quote && <p className="mb-10 !leading-relaxed text-xl md:text-2xl italic text-blue-400 ">"{quote}"</p>}
            {author && <p className="mb-10 text-md md:text-lg font-thin flex self-end text-blue-300"> - {author}</p>}
            <button className="absolute top-4 right-4" onClick={handleSave}> <AiOutlineHeart size={"34px"} color="pink"></AiOutlineHeart></button>
            <div className="text-center">
              <div className={`m-auto w-72 transition duration-200 ${message ? 'scale-100' : 'scale-0'} mb-6`}>
              {message && <p>{message}</p>}
              </div>
              <Timer message={message} setMessage={setMessage} />
            </div>
            <button className="btn bg-green-400 text-gray-700 w-36 self-center text-lg font-semibold" onClick={fetchDataAndUpdate}>Next</button>
         </div>
        )}
        </Card>
      </div>   
    </div>
  );
};

export default QuoteGenerator;