import { Transition, Dialog } from "@headlessui/react";
import { Fragment } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useSelector } from "react-redux";
import * as yup from "yup";

const QuoteModalContent = ({
  handleToggleModal,
  handleAddOrUpdateQuote,
  modalType,
}) => {
  const { quoteData } = useSelector((state) => state.updateQuote);
  const schema = yup.object().shape({
    author: yup.string().required("author is required"),
    quote: yup.string().required("quote must not be empty"),
  });

  console.log(quoteData);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      author: quoteData.Author,
      quote: quoteData.Quote,
    },
  });

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
              <form
                className="flex flex-col gap-4 mb-6"
                onSubmit={handleSubmit(handleAddOrUpdateQuote)}
              >
                <div className="flex flex-col gap-1">
                  <label className="text-start font-semibold text-lg">
                    Author:
                  </label>
                  <div className="w-full relative text-lg">
                    <input
                      className={`${
                        errors.quote ? "outline outline outline-red-500" : ""
                      } w-full p-2 rounded-md bg-gray-900 outline-0`}
                      type="text"
                      {...register("author")}
                    />
                    <p className="absolute text-xs text-red-500">
                      {errors.password?.message}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-start font-semibold text-lg">
                    Quote:
                  </label>
                  <div className="w-full relative text-lg">
                    <textarea
                      className={`${
                        errors.quote ? "outline outline outline-red-500" : ""
                      } w-full p-2 rounded-md bg-gray-900 outline-0`}
                      rows={7}
                      cols={60}
                      {...register("quote")}
                    />

                    <p className="absolute text-xs text-red-500">
                      {errors.password?.message}
                    </p>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <button
                    className="hover:text-red-500 transform hover:scale-[1.02] bg-gray-900  py-2 px-10 rounded-lg  transition duration-[30ms]"
                    onClick={handleToggleModal}
                  >
                    Cancel
                  </button>

                  <input
                    className="hover:text-blue-500 transform hover:scale-[1.02] bg-gray-900  py-2 px-10 rounded-lg  transition duration-[30ms]"
                    type="submit"
                    value={modalType === "update" ? "update" : "add"}
                  />
                </div>
              </form>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </div>
    </div>
  );
};

export default QuoteModalContent;
