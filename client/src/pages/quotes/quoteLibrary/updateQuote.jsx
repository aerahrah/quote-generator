import { Transition, Dialog } from "@headlessui/react";
import { Fragment, useState } from "react";
import { updateData } from "../../../services/quoteApi";
import { useDispatch, useSelector } from "react-redux";
import { toggleUpdateModalOpen } from "../../../store/slices/quoteSlices/updateQuoteSlice";
import { clearQuoteUpdateData } from "../../../store/slices/quoteSlices/updateQuoteSlice";
import { handleRefetchData } from "../../../store/slices/quoteSlices/fetchAllQuoteSlice";
import { fetchAllData } from "../../../services/quoteApi";
import QuoteModalContent from "../quotesComponent/quoteModalContent";

const UpdateQuoteModal = () => {
  const dispatch = useDispatch();

  const { isUpdateModalOpen } = useSelector((state) => state.updateQuote);

  const handleToggleModal = () => {
    dispatch(toggleUpdateModalOpen());
  };

  const handleUpdateQuote = async ({ id, formData }) => {
    try {
      await dispatch(updateData({ id, formData }));
      handleToggleModal();
      dispatch(handleRefetchData());
      dispatch(clearQuoteUpdateData());
    } catch (error) {
      console.log(error);
    }
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
