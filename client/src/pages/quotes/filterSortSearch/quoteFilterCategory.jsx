import { Popover, Transition } from "@headlessui/react";
import { FaListAlt, FaAngleDown } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { setFilterCategory } from "../../../store/slices/searchSlices";
import { categoryOptions } from "../../../utils/filterOptions";
import QuoteFilterContent from "./quoteFilterContent";

const QuoteFilterCategory = ({ filterBy }) => {
  const dispatch = useDispatch();

  const handleChangeFilter = async (value) => {
    dispatch(setFilterCategory(value));
  };

  return (
    <div className="mr-2 md:mr-4">
      <Popover className="relative z-10 sm:hidden">
        <Popover.Button className="sm:hidden w-full p-2.5 border-[1px] bg-neutral-200 border-neutral-300 dark:bg-neutral-950/70 dark:border-neutral-800 rounded-lg">
          <FaListAlt className="text-neutral-700 dark:text-neutral-300 " />
        </Popover.Button>
        <QuoteFilterContent
          handleChangeFilter={handleChangeFilter}
          Popover={Popover}
          Transition={Transition}
          filterOptions={categoryOptions}
        />
      </Popover>
      <Popover className="relative z-10">
        <Popover.Button className=" w-full p-2 border-[1px] text-neutral-700 bg-neutral-200 border-neutral-300 dark:text-neutral-300 dark:bg-neutral-950/70 dark:border-neutral-800 outline-0 rounded-full hidden sm:block">
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
