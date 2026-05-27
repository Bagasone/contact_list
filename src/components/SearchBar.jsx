import { Search } from "lucide-react";

const SearchBar = () => {
  return (
    <div className="container justify-end">
      <input
        type="text"
        name="search"
        className="w-full neo-sm p-1"
      />
      <button
        aria-label="Search"
        type="submit"
        className="neo-sm p-1">
        <Search />
      </button>
    </div>
  );
};

export default SearchBar;
