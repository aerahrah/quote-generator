const QuoteFilterCategoryContent = ({
  handleChangeFilter,
  Popover,
  Transition,
}) => {
  const categoryOptions = [
    { label: "category", value: "all task" },
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
      <Popover.Panel className="absolute mt-2 border-[1px] bg-white p-2 shadow-md rounded-lg right-[50%] transform translate-x-[50%]">
        {categoryOptions.map((category) => (
          <Popover.Button
            key={category.value}
            className="hover:font-semibold hover:border-blue-950 border-b-[1px] w-full text-left pb-1"
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
