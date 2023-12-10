import { FaSearch } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { setSearchTerm } from "../../../store/slices/searchSlices";

const SearchBar = ({ handleOnChange, searchTerm }) => {
  const dispatch = useDispatch();

  const handleChangeSearchTerm = (e) => {
    dispatch(setSearchTerm(e.target.value));

    handleOnChange();
  };
  return (
    <div className="w-full">
      <div className="relative flex items-center w-full py-3 mr-4 md:mr-6 ">
        <FaSearch className="text-neutral-500 dark:text-neutral-300 absolute left-[.75rem]" />
        <input
          type="text"
          value={searchTerm}
          onChange={handleChangeSearchTerm}
          placeholder="Search"
          className="outline-0 w-full p-2 pl-10 px-2  shadow-inner border-[1px] border-neutral-300 rounded-full text-neutral-700 bg-neutral-200 dark:text-neutral-300  dark:bg-neutral-950/70 dark:border-neutral-800"
        />
      </div>
    </div>
  );
};
export default SearchBar;
