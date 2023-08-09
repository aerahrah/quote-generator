import { Transition, Dialog } from "@headlessui/react";
import { Fragment } from "react";

const QuoteModalContent = ({
  setIsModalCreateOpen,
  handleSaveOwnQuote,
  updateQuoteData,
  quoteData,
  setQuoteData,
  modalType,
  quoteUpdateDataId,
}) => {
  return (
    <div>
      <Transition.Child
        as={Fragment}
        enter="ease-out duration-200"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="ease-in duration-100"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="fixed inset-0 bg-black/20 backdrop-blur-sm z-20" />
      </Transition.Child>
      <div className="fixed inset-0 z-50">
        <div className="flex min-h-full items-center justify-center p-6 text-center">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-200"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-100"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Dialog.Panel className="flex flex-col w-full max-w-[35rem] bg-gray-800 p-4 px-6 rounded-lg text-gray-300 ">
              <div className="flex flex-col gap-4 mb-6">
                <div className="flex flex-col gap-1">
                  <label className="text-start font-semibold text-lg">
                    Author:
                  </label>
                  <input
                    className="p-2 rounded-md bg-gray-900 outline-0"
                    type="text"
                    value={quoteData.author}
                    onChange={(e) =>
                      setQuoteData({ ...quoteData, author: e.target.value })
                    }
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-start font-semibold text-lg">
                    Quote:
                  </label>
                  <textarea
                    className="p-2 rounded-md bg-gray-900 outline-0"
                    value={quoteData.quote}
                    onChange={(e) =>
                      setQuoteData({
                        ...quoteData,
                        quote: e.target.value,
                      })
                    }
                    rows={7}
                    cols={60}
                  />
                </div>
              </div>

              <div className="flex justify-between items-center">
                <button
                  className="hover:text-red-500 transform hover:scale-[1.02] bg-gray-900  py-2 px-10 rounded-lg  transition duration-[30ms]"
                  onClick={() => setIsModalCreateOpen(false)}
                >
                  Cancel
                </button>
                {modalType === "add" && (
                  <button
                    className="hover:text-blue-500 transform hover:scale-[1.02] bg-gray-900  py-2 px-10 rounded-lg  transition duration-[30ms]"
                    onClick={() => handleSaveOwnQuote(false)}
                  >
                    Add
                  </button>
                )}
                {modalType === "update" && (
                  <button
                    className="hover:text-blue-500 transform hover:scale-[1.02] bg-gray-900  py-2 px-10 rounded-lg  transition duration-[30ms]"
                    onClick={() => updateQuoteData(quoteUpdateDataId)}
                  >
                    Update
                  </button>
                )}
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </div>
    </div>
  );
};

export default QuoteModalContent;