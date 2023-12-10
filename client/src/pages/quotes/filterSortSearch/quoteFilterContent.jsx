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
      <Popover.Panel className="transformpy-2 shadow-md border-[1px] absolute mt-2 md:right-[50%] md:translate-x-[50%] bg-white text-neutral-700 border-neutral-300 dark:bg-neutral-900 dark:border-neutral-800 dark:text-neutral-300  rounded-lg">
        {filterOptions.map((category) => (
          <Popover.Button
            key={category.value}
            className="border-b-[1px] outline-0 border-neutral-300 hover:bg-neutral-200 dark:border-neutral-800 dark:hover:bg-neutral-800 min-w-[120px] w-full whitespace-nowrap px-6 text-left py-[.15rem] capitalize"
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
