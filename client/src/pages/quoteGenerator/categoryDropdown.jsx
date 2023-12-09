import { Popover } from "@headlessui/react";
import { categoryOptions } from "../../utils/filterOptions";
import { FaAngleDown } from "react-icons/fa";
import QuoteFilterContent from "../quotes/filterSortSearch/quoteFilterContent";

const CategoryDropdown = ({ selectedOption, setSelectedOption }) => {
  return (
    <div className="w-full m-auto flex justify-center gap-2 items-center text-lg text-neutral-700 dark:text-neutral-300 mb-6">
      <label htmlFor="selectInput">Quote Category:</label>
      <Popover className="relative z-10">
        <Popover.Button className="w-full ring-1 ring-neutral-300 dark:ring-neutral-700 rounded-full p-2">
          <div className="flex items-center justify-between">
            <p className="capitalize px-1">{selectedOption}</p>
            <FaAngleDown />
          </div>
        </Popover.Button>
        <QuoteFilterContent
          handleChangeFilter={setSelectedOption}
          filterOptions={categoryOptions}
        />
      </Popover>
    </div>
  );
};

export default CategoryDropdown;
