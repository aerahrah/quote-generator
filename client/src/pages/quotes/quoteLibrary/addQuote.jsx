import { FaPen } from "react-icons/fa";
import { saveData } from "../../../services/quoteApi";
import { Transition, Dialog } from "@headlessui/react";
import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleAddModalOpen } from "../../../store/slices/quoteSlices/updateQuoteSlice";
import { handleRefetchData } from "../../../store/slices/quoteSlices/fetchAllQuoteSlice";
import QuoteModalContent from "../quotesComponent/quoteModalContent/quoteModalContent";

const AddQuoteIcon = () => {
  const dispatch = useDispatch();

  const { isAddModalOpen } = useSelector((state) => state.updateQuote);

  const handleAddQuote = async (userInfo) => {
    try {
      await dispatch(saveData(userInfo));
      handleToggleModal();
      dispatch(handleRefetchData());
    } catch (error) {
      console.log(error);
    }
  };

  const handleToggleModal = () => {
    dispatch(toggleAddModalOpen());
  };

  return (
    <div>
      <div
        className="p-5 rounded-full cursor-pointer transform transition duration-100 hover:scale-[1.02]   hover:-translate-y-[3px] shadow-md hover:shadow-lg bg-white dark:bg-neutral-800 ring-1 ring-neutral-300 dark:ring-neutral-700"
        onClick={handleToggleModal}
      >
        <FaPen className="text-purple-500" size="2rem" />
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
