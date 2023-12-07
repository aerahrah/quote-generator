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
    <div>
      <div className="relative flex items-center w-full py-3 mr-4 md:mr-6 ">
        <FaSearch className="text-gray-300 absolute left-[.5rem]"></FaSearch>
        <input
          type="text"
          value={searchTerm}
          onChange={handleChangeSearchTerm}
          placeholder="Search"
          className="outline-0 w-full md:w-[40vw] lg:w-[50vw] p-2 pl-8 px-2  rounded-full text-gray-300  bg-gray-950/70 shadow-inner border-[1px] border-gray-800"
        />
      </div>
    </div>
  );
};
export default SearchBar;
