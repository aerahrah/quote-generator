import {
  FaSearch,
  FaBars,
  FaSignOutAlt,
  FaFilter,
  FaAngleDown,
} from "react-icons/fa";
import SearchBar from "./searchBar";
import { useState } from "react";

const FilterSortSearchPanel = ({ setSearchTerm, handleOnChange }) => {
  return (
    <div>
      <SearchBar
        setSearchTerm={setSearchTerm}
        handleOnChange={handleOnChange}
        useState={useState}
        FaSearch={FaSearch}
      />
    </div>
  );
};

export default FilterSortSearchPanel;
