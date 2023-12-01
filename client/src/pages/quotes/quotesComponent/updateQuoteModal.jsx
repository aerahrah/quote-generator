import { Transition, Dialog } from "@headlessui/react";
import { Fragment } from "react";
import { updateData } from "../../../services/quoteApi";
import { useDispatch, useSelector } from "react-redux";
import { toggleUpdateModalOpen } from "../../../store/slices/quoteSlices/updateQuoteSlice";
import QuoteModalContent from "../quotesComponent/quoteModalContent";

const UpdateQuoteModal = () => {
  const dispatch = useDispatch();
  const { isUpdateModalOpen } = useSelector((state) => state.updateQuote);
  const handleToggleModal = () => {
    dispatch(toggleUpdateModalOpen());
  };
  const handleUpdateQuote = (id) => {
    console.log("click");
    updateData(id, quoteUpdateData)
      .then(() => {
        setQuoteUpdateData({
          author: "",
          quote: "",
          favorite: "",
        });
        setQuoteUpdateDataId("");
        setOpenUpdateModal(false);
        getAllQuotes();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <Transition appear show={isUpdateModalOpen} as={Fragment}>
        <Dialog as="div" onClose={handleToggleModal}>
          <QuoteModalContent
            handleToggleModal={handleToggleModal}
            handleAddOrUpdateQuote={handleUpdateQuote}
            modalType={"update"}
          />
        </Dialog>
      </Transition>
    </div>
  );
};

export default UpdateQuoteModal;
