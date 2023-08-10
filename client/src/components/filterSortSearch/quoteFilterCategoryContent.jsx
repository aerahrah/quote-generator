const QuoteFilterCategoryContent = ({
  handleChangeFilter,
  Popover,
  Transition,
}) => {
  const categoryOptions = [
    { label: "all quotes", value: "all quotes" },
    { label: "happy", value: "happiness" },
    { label: "anger", value: "anger" },
    { label: "courage", value: "courage" },
    { label: "fitness", value: "fitness" },
    { label: "love", value: "love" },
    { label: "history", value: "history" },
  ];
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
        {categoryOptions.map((category) => (
          <Popover.Button
            key={category.value}
            className="hover:font-semibold hover:border-blue-950 border-b-[1px] border-gray-800 hover:bg-gray-700 w-[120px] px-4 text-left pb-1 capitalize"
            onClick={() => handleChangeFilter(category.value)}
          >
            {category.label}
          </Popover.Button>
        ))}
      </Popover.Panel>
    </Transition>
  );
};
export default QuoteFilterCategoryContent;
