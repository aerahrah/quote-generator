import { Popover, Transition } from "@headlessui/react";
import { categoryOptions } from "../../utils/filterOptions";
import { FaAngleDown } from "react-icons/fa";
import QuoteFilterContent from "../filterSortSearch/quoteFilterContent";

const CategoryDropdown = ({ selectedOption, setSelectedOption }) => {
  return (
    <div className="w-full m-auto flex justify-center gap-1 items-center text-lg text-gray-200 mb-6">
      <label htmlFor="selectInput">Quote Category:</label>
      <Popover className="relative z-10">
        <Popover.Button className="w-full border-[1px] border-gray-800 text-gray-300  bg-gray-950/70 rounded-full p-2">
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
