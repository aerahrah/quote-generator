import { Popover, Transition } from "@headlessui/react";

const QuoteFilterContent = ({ handleChangeFilter, filterOptions }) => {
  return (
    <Transition
      enter="transition duration-100 ease-out"
      enterFrom="transform scale-95 opacity-0"
      enterTo="transform scale-100 opacity-100"
      leave="transition duration-75 ease-out"
      leaveFrom="transform scale-100 opacity-100"
      leaveTo="transform scale-95 opacity-0"
    >
      <Popover.Panel className="absolute mt-2 border-[1px] border-gray-800 py-2 shadow-md rounded-lg md:right-[50%] md:translate-x-[50%] transform text-gray-300  bg-gray-900 ">
        {filterOptions.map((category) => (
          <Popover.Button
            key={category.value}
            className="hover:border-blue-950 border-b-[1px] outline-0 border-gray-800 hover:bg-gray-700 min-w-[120px] w-full whitespace-nowrap px-6 text-left py-1/2 capitalize"
            onClick={() => handleChangeFilter(category.value)}
          >
            {category.label}
          </Popover.Button>
        ))}
      </Popover.Panel>
    </Transition>
  );
};
export default QuoteFilterContent;
