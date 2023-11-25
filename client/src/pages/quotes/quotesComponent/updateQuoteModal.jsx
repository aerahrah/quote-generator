import { Transition, Dialog } from "@headlessui/react";
import { Fragment } from "react";
import { updateData } from "../../../services/quoteApi";
import QuoteModalContent from "../quotesComponent/quoteModalContent";

const UpdateQuoteModal = ({
  getAllQuotes,
  openUpdateModal,
  setOpenUpdateModal,
  setQuoteUpdateData,
  quoteUpdateData,
  quoteUpdateDataId,
  setQuoteUpdateDataId,
}) => {
  const url = "http://localhost:3500/quote";

  const updateQuoteData = (id) => {
    console.log(quoteUpdateDataId);
    updateData(url, id, quoteUpdateData)
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
      <Transition appear show={openUpdateModal} as={Fragment}>
        <Dialog as="div" onClose={() => setOpenUpdateModal(false)}>
          <QuoteModalContent
            setIsModalCreateOpen={setOpenUpdateModal}
            updateQuoteData={updateQuoteData}
            quoteData={quoteUpdateData}
            setQuoteData={setQuoteUpdateData}
            quoteUpdateDataId={quoteUpdateDataId}
            modalType={"update"}
          />
        </Dialog>
      </Transition>
    </div>
  );
};

export default UpdateQuoteModal;
