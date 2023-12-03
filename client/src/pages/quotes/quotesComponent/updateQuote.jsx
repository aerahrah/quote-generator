import { Transition, Dialog } from "@headlessui/react";
import { Fragment, useState } from "react";
import { updateData } from "../../../services/quoteApi";
import { useDispatch, useSelector } from "react-redux";
import { toggleUpdateModalOpen } from "../../../store/slices/quoteSlices/updateQuoteSlice";
import { searchSelector } from "../../../store/selector/searchSelector";
import QuoteModalContent from "./quoteModalContent";
import { clearQuoteUpdateData } from "../../../store/slices/quoteSlices/updateQuoteSlice";
import { fetchAllData } from "../../../services/quoteApi";

const UpdateQuoteModal = () => {
  const dispatch = useDispatch();
  const { searchTerm, filterCategory, filterOrigin } =
    useSelector(searchSelector);

  const { isUpdateModalOpen } = useSelector((state) => state.updateQuote);

  const handleToggleModal = () => {
    dispatch(toggleUpdateModalOpen());
  };

  const handleUpdateQuote = async ({ id, formData }) => {
    try {
      await dispatch(updateData({ id, formData }));
      dispatch(fetchAllData({ searchTerm, filterCategory, filterOrigin }));
      dispatch(clearQuoteUpdateData());
      handleToggleModal();
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
