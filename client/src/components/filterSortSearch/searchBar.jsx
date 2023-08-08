const SearchBar = ({ setSearchTerm, handleOnChange, useState }) => {
  const [searchTermDisplay, setSearchTermDisplay] = useState("");

  const handleChangeSearchTerm = (e) => {
    setSearchTermDisplay(e.target.value);
    setSearchTerm(e.target.value);
    handleOnChange();
    console.log(e.target.value);
  };
  return (
    <div>
      <input
        type="text"
        value={searchTermDisplay}
        onChange={handleChangeSearchTerm}
        placeholder="Search"
      />
    </div>
  );
};
export default SearchBar;
