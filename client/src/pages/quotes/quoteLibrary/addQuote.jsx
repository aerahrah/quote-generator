import { FaPen } from "react-icons/fa";
import { saveData, fetchAllData } from "../../../services/quoteApi";
import { Transition, Dialog } from "@headlessui/react";
import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleAddModalOpen } from "../../../store/slices/quoteSlices/updateQuoteSlice";
import { searchSelector } from "../../../store/selector/searchSelector";
import QuoteModalContent from "../quotesComponent/quoteModalContent";

const AddQuoteIcon = () => {
  const dispatch = useDispatch();
  const { isAddModalOpen } = useSelector((state) => state.updateQuote);
  const { searchTerm, filterCategory, filterOrigin } =
    useSelector(searchSelector);
  const handleToggleModal = () => {
    dispatch(toggleAddModalOpen());
  };

  const handleAddQuote = async (userInfo) => {
    try {
      await dispatch(saveData(userInfo));
      dispatch(fetchAllData({ searchTerm, filterCategory, filterOrigin }));
      handleToggleModal();
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <div>
      <div
        className="p-5 rounded-full cursor-pointer transform transition duration-100 hover:scale-[1.02]   hover:-translate-y-[3px] shadow-md hover:shadow-lg bg-gray-700 border-[1px] border-gray-900"
        onClick={handleToggleModal}
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
