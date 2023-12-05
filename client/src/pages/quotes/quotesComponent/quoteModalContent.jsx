import { Transition, Dialog } from "@headlessui/react";
import { Fragment } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useSelector } from "react-redux";
import { categoryOptions } from "../../../utils/filterOptions";
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
    category: yup.string().required("author is required"),
  });

  console.log(quoteData);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      author: modalType === "update" ? quoteData.Author : "",
      quote: modalType === "update" ? quoteData.Quote : "",
      category: modalType === "update" ? quoteData.Category : "all category",
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
      <div className="fixed inset-0 z-30">
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
            <Dialog.Panel className="flex flex-col w-full max-w-[35rem] bg-gray-800 p-4 px-6 rounded-lg text-gray-300 z-50">
              <form
                className="flex flex-col gap-4"
                onSubmit={handleSubmit((formData) => {
                  modalType === "update"
                    ? handleAddOrUpdateQuote({
                        id: quoteData.Id,
                        formData: {
                          ...formData,
                          favorite: quoteData.Favorite,
                          origin: quoteData.Origin,
                        },
                      })
                    : handleAddOrUpdateQuote({
                        id: quoteData.Id,
                        quoteData: {
                          ...formData,
                          favorite: false,
                          origin: "original",
                        },
                      });
                })}
              >
                <div className="flex flex-col gap-1">
                  <label className="text-start font-semibold text-lg">
                    Author:
                  </label>
                  <div className="w-full relative text-lg">
                    <input
                      className={`${
                        errors.author ? "outline outline outline-red-500" : ""
                      } w-full p-2 rounded-md bg-gray-900 outline-0`}
                      type="text"
                      {...register("author")}
                    />
                    <p className="absolute text-xs text-red-500">
                      {errors.author?.message}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-start font-semibold text-lg ">
                    Category:
                  </label>
                  <div className="block self-start relative text-lg bg-gray-900 outline-0 px-1 py-1 rounded-md">
                    <select
                      id="selectInput"
                      {...register("category")}
                      className="bg-transparent capitalize focus:outline-none"
                    >
                      {categoryOptions.map(({ label, value }) => (
                        <option
                          key={value}
                          className="bg-gray-800 capitalize"
                          value={value}
                        >
                          {label}
                        </option>
                      ))}
                    </select>
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
                      {errors.quote?.message}
                    </p>
                  </div>
                </div>
                <div className="flex justify-end items-center ">
                  <input
                    className="hover:text-blue-500 transform hover:scale-[1.02] bg-gray-900  py-2 px-8 sm:px-10 md:px-12 rounded-lg  transition duration-[30ms] capitalize  md:w-36"
                    type="submit"
                    value={modalType === "update" ? "update" : "add"}
                  />
                </div>
              </form>
              <button
                className="absolute bottom-[1rem] hover:text-red-500 transform hover:scale-[1.02] bg-gray-900 md:w-36 py-2 px-8 sm:px-10 md:px-12 rounded-lg  transition duration-[30ms]"
                onClick={handleToggleModal}
              >
                Cancel
              </button>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </div>
    </div>
  );
};

export default QuoteModalContent;
