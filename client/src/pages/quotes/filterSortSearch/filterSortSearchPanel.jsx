import { useSelector } from "react-redux";
import { searchSelector } from "../../../store/selector/searchSelector";
import QuoteFilterCategory from "./quoteFilterCategory";
import QuoteFilterOrigin from "./quoteFilterOrigin.jsx";
import SearchBar from "./searchBar";

const FilterSortSearchPanel = () => {
  const { searchTerm, filterCategory, filterOrigin } =
    useSelector(searchSelector);
  return (
    <div className={`m-0 flex items-center w-full`}>
      <div className="flex items-center w-full">
        <QuoteFilterOrigin className=" flex-1" filterBy={filterOrigin} />
        <QuoteFilterCategory className=" flex-1" filterBy={filterCategory} />
        <SearchBar className="grow" searchTerm={searchTerm} />
      </div>
    </div>
  );
};

export default FilterSortSearchPanel;
