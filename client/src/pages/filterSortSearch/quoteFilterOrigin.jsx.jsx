import { Popover, Transition } from "@headlessui/react";
import QuoteFilterContent from "./quoteFilterContent";
const QuoteFilterOrigin = ({
  setFilterOrigin,
  handleOnChange,
  useState,
  FaFilter,
  FaAngleDown,
}) => {
  const originOptions = [
    { label: "all quotes", value: "all quotes" },
    { label: "oringal quote", value: "original" },
    { label: "generated quote", value: "generated" },
  ];
  const [filterBy, setfilterBy] = useState("all quotes");
  const handleChangeFilter = (value) => {
    setfilterBy(value);
    setFilterOrigin(value);
    handleOnChange();
  };

  return (
    <div className="mr-2">
      <Popover className="relative z-10 md:hidden">
        <Popover.Button className="md:hidden w-full p-2.5 border-[1px] bg-gray-950/70 border-gray-800 rounded-lg">
          <FaFilter className="text-gray-300" />
        </Popover.Button>
        <QuoteFilterContent
          handleChangeFilter={handleChangeFilter}
          Popover={Popover}
          Transition={Transition}
          filterOptions={originOptions}
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
        <QuoteFilterContent
          handleChangeFilter={handleChangeFilter}
          Popover={Popover}
          Transition={Transition}
          filterOptions={originOptions}
        />
      </Popover>
    </div>
  );
};

export default QuoteFilterOrigin;
