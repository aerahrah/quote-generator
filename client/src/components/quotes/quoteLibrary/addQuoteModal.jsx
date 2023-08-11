import { Transition, Dialog } from "@headlessui/react";
import { Fragment } from "react";
import { saveData } from "../../utils/apiUtils";
import QuoteModalContent from "../quotesComponent/quoteModalContent";
const AddQuoteModal = ({
  isModalCreateOpen,
  setIsModalCreateOpen,
  useState,
  getAllQuotes,
}) => {
  const url = "http://localhost:3500/quote";
  const [quoteData, setQuoteData] = useState({
    author: "",
    quote: "",
    origin: "original",
  });
  const handleSaveOwnQuote = (favoriteQuote) => {
    saveData(quoteData, favoriteQuote, url)
      .then(() => {
        setQuoteData((prevQuote) => ({
          ...prevQuote,
          author: "",
          quote: "",
        }));
        getAllQuotes();
      })
      .catch((err) => {
        console.log(err);
      });
    setIsModalCreateOpen(false);
  };
  return (
    <div>
      <Transition appear show={isModalCreateOpen} as={Fragment}>
        <Dialog as="div" onClose={() => setIsModalCreateOpen(false)}>
          <QuoteModalContent
            setIsModalCreateOpen={setIsModalCreateOpen}
            handleSaveOwnQuote={handleSaveOwnQuote}
            quoteData={quoteData}
            setQuoteData={setQuoteData}
            modalType={"add"}
          />
        </Dialog>
      </Transition>
    </div>
  );
};

export default AddQuoteModal;
