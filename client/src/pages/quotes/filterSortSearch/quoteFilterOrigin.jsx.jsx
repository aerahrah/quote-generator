import { Popover, Transition } from "@headlessui/react";
import { FaFilter, FaAngleDown } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { setFilterOrigin } from "../../../store/slices/searchSlices";
import { originOptions } from "../../../utils/filterOptions";
import QuoteFilterContent from "./quoteFilterContent";

const QuoteFilterOrigin = ({ handleOnChange, filterBy }) => {
  const dispatch = useDispatch();

  const handleChangeFilter = (value) => {
    dispatch(setFilterOrigin(value));
    handleOnChange();
  };

  return (
    <div className="mr-2">
      <Popover className="relative z-10 md:hidden">
        <Popover.Button className="md:hidden w-full p-2.5 border-[1px]  bg-neutral-200 border-neutral-300 dark:bg-neutral-950/70 dark:border-neutral-800  rounded-lg">
          <FaFilter className="text-neutral-700 dark:text-neutral-300 " />
        </Popover.Button>
        <QuoteFilterContent
          handleChangeFilter={handleChangeFilter}
          Popover={Popover}
          Transition={Transition}
          filterOptions={originOptions}
        />
      </Popover>
      <Popover className="relative z-10 hidden md:block ">
        <Popover.Button className=" w-full p-2 border-[1px]  text-neutral-700 bg-neutral-200 border-neutral-300 dark:text-neutral-300 dark:bg-neutral-950/70 outline-0 rounded-full  hidden md:block">
          <div className="flex items-center justify-between">
            <p className="capitalize whitespace-nowrap w-[80px] outline-0">
              {filterBy}
            </p>
            <FaAngleDown />
          </div>
        </Popover.Button>
        <QuoteFilterContent
          handleChangeFilter={handleChangeFilter}
          filterOptions={originOptions}
        />
      </Popover>
    </div>
  );
};

export default QuoteFilterOrigin;
