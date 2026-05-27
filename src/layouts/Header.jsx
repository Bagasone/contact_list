import Profile from "../components/Profile";
import SearchBar from "../components/SearchBar";

const Header = () => {
  return (
    <header className="flex justify-between items-center p-3 gap-5">
      <Profile />
      <SearchBar />
    </header>
  );
};

export default Header;
