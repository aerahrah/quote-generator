import { Popover, Transition } from "@headlessui/react";
import QuoteFilterCategoryContent from "./quoteFilterCategoryContent";
const QuoteFilterCategory = ({
  setFilterCategory,
  handleOnChange,
  useState,
  FaFilter,
  FaAngleDown,
}) => {
  const [filterBy, setfilterBy] = useState("category");

  const handleChangeFilter = (value) => {
    setfilterBy(value);
    setFilterCategory(value);
    handleOnChange();
  };

  return (
    <div className="mx-2 md:mr-4">
      <Popover className="relative z-10 md:hidden">
        <Popover.Button className="md:hidden w-full p-2.5 border-[1px] rounded-lg">
          <FaFilter className="text-gray-600" />
        </Popover.Button>
        <QuoteFilterCategoryContent
          handleChangeFilter={handleChangeFilter}
          Popover={Popover}
          Transition={Transition}
        />
      </Popover>
      <Popover className="relative z-10 hidden md:block ">
        <Popover.Button className=" w-full p-2 border-[1px] border-gray-800 text-gray-300  bg-gray-950/70 outline-0 rounded-full  hidden md:block">
          <div className="flex items-center justify-between">
            <p className="capitalize whitespace-nowrap w-[80px] outline-0">
              {filterBy}
            </p>
            <FaAngleDown />
          </div>
        </Popover.Button>
        <QuoteFilterCategoryContent
          handleChangeFilter={handleChangeFilter}
          Popover={Popover}
          Transition={Transition}
        />
      </Popover>
    </div>
  );
};

export default QuoteFilterCategory;
