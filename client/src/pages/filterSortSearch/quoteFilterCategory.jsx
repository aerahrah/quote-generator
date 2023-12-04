import { Popover, Transition } from "@headlessui/react";
import { FaListAlt, FaAngleDown } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { setFilterCategory } from "../../store/slices/searchSlices";
import QuoteFilterContent from "./quoteFilterContent";

const QuoteFilterCategory = ({ handleOnChange, filterBy }) => {
  const dispatch = useDispatch();
  const categoryOptions = [
    { label: "all category", value: "all category" },
    { label: "happy", value: "happiness" },
    { label: "anger", value: "anger" },
    { label: "courage", value: "courage" },
    { label: "fitness", value: "fitness" },
    { label: "love", value: "love" },
    { label: "history", value: "history" },
  ];

  const handleChangeFilter = async (value) => {
    dispatch(setFilterCategory(value));
    handleOnChange();
  };

  return (
    <div className="mr-2 md:mr-4">
      <Popover className="relative z-10 sm:hidden">
        <Popover.Button className="sm:hidden w-full p-2.5 border-[1px] bg-gray-950/70 border-gray-800 rounded-lg">
          <FaListAlt className="text-gray-300" />
        </Popover.Button>
        <QuoteFilterContent
          handleChangeFilter={handleChangeFilter}
          Popover={Popover}
          Transition={Transition}
          filterOptions={categoryOptions}
        />
      </Popover>
      <Popover className="relative z-10">
        <Popover.Button className=" w-full p-2 border-[1px] border-gray-800 text-gray-300  bg-gray-950/70 outline-0 rounded-full hidden sm:block">
          <div className="flex items-center justify-between">
            <p className="capitalize whitespace-nowrap w-[90px] outline-0">
              {filterBy}
            </p>
            <FaAngleDown />
          </div>
        </Popover.Button>
        <QuoteFilterContent
          handleChangeFilter={handleChangeFilter}
          filterOptions={categoryOptions}
        />
      </Popover>
    </div>
  );
};

export default QuoteFilterCategory;
