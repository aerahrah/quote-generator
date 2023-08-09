import {
  FaSearch,
  FaBars,
  FaSignOutAlt,
  FaFilter,
  FaAngleDown,
} from "react-icons/fa";
import QuoteFilterCategory from "./quoteFilterCategory";
import SearchBar from "./searchBar";
import { useState } from "react";

const FilterSortSearchPanel = ({
  setSearchTerm,
  handleOnChange,
  setFilterCategory,
}) => {
  return (
    <div className={`m-0 shadow md:shadow-md flex items-center w-full`}>
      <div className="flex items-center w-full">
        <QuoteFilterCategory
          className=" flex-1"
          FaFilter={FaFilter}
          FaAngleDown={FaAngleDown}
          useState={useState}
          setFilterCategory={setFilterCategory}
          handleOnChange={handleOnChange}
        />
        <SearchBar
          className="grow"
          setSearchTerm={setSearchTerm}
          handleOnChange={handleOnChange}
          useState={useState}
          FaSearch={FaSearch}
        />
      </div>
    </div>
  );
};

export default FilterSortSearchPanel;
