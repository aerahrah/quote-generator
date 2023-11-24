const CategoryDropdown = ({ selectedOption, setSelectedOption }) => {
  return (
    <div className="w-full m-auto flex justify-center items-center text-lg text-gray-200 mb-6">
      <label htmlFor="selectInput" className="mr-2">
        Quote Category:
      </label>
      <select
        id="selectInput"
        value={selectedOption}
        onChange={(e) => setSelectedOption(e.target.value)}
        className="rounded px-2 py-1 bg-transparent focus:outline-none"
      >
        <option className="bg-gray-800" value="">
          Random
        </option>
        <option className="bg-gray-800" value="happiness">
          Happy
        </option>
        <option className="bg-gray-800" value="anger">
          Anger
        </option>
        <option className="bg-gray-800" value="courage">
          Courage
        </option>
        <option className="bg-gray-800" value="fitness">
          Fitness
        </option>
        <option className="bg-gray-800" value="love">
          Love
        </option>
        <option className="bg-gray-800" value="history">
          History
        </option>
      </select>
    </div>
  );
};

export default CategoryDropdown;
