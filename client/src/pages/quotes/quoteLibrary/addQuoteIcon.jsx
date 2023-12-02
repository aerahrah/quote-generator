import { FaPen } from "react-icons/fa";
import { useState } from "react";
import { saveData } from "../../../services/quoteApi";
import { Transition, Dialog } from "@headlessui/react";
import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleAddModalOpen } from "../../../store/slices/quoteSlices/updateQuoteSlice";
import QuoteModalContent from "../quotesComponent/quoteModalContent";

const AddQuoteIcon = () => {
  const dispatch = useDispatch();
  const { isAddModalOpen } = useSelector((state) => state.updateQuote);
  const handleToggleModal = () => {
    dispatch(toggleAddModalOpen());
  };
  const [quoteData, setQuoteData] = useState({
    author: "",
    quote: "",
    origin: "original",
  });
  const handleAddQuote = (favoriteQuote) => {
    saveData(quoteData, favoriteQuote, url)
      .then(() => {
        setQuoteData((prevQuote) => ({
          ...prevQuote,
          author: "",
          quote: "",
        }));
      })
      .catch((err) => {
        console.log(err);
      });
    setIsModalCreateOpen(false);
  };
  return (
    <div>
      <div
        className="p-5 rounded-full cursor-pointer transform transition duration-100 hover:scale-[1.02]   hover:-translate-y-[3px] shadow-md hover:shadow-lg bg-gray-700 border-[1px] border-gray-900"
        onClick={() => setIsModalCreateOpen(true)}
      >
        <FaPen className="text-blue-400" size="2rem" />
      </div>

      <div>
        <Transition appear show={isAddModalOpen} as={Fragment}>
          <Dialog as="div" onClose={handleToggleModal}>
            <QuoteModalContent
              handleToggleModal={handleToggleModal}
              handleAddOrUpdateQuote={handleAddQuote}
              modalType={"add"}
            />
          </Dialog>
        </Transition>
      </div>
    </div>
  );
};

export default AddQuoteIcon;
