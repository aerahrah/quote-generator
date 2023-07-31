import { deleteCookie } from "./utils/cookieUtils";
import { useNavigate } from "react-router-dom";
const NavBar = ({ activeSection, setActiveSection }) => {
  const navigate = useNavigate();
  const handleLogout = () => {
    deleteCookie("token");
    navigate("/");
  };

  return (
    <div className="bg-gray-800 flex justify-around min-h-nav items-center shadow-md text-gray-200 text capitalize">
      <h1 className="text-2xl font-bold">QG</h1>
      <ul className="flex text-xl w-[40%] justify-end gap-10">
        <li
          className={`hover:opacity-70 hover:cursor-pointer p-1  ${
            activeSection === "favoriteQuoteLibrary" ? "border-b-[1px]" : ""
          }`}
          onClick={() => setActiveSection("favoriteQuoteLibrary")}
        >
          favorite
        </li>
        <li
          className={`hover:opacity-70 hover:cursor-pointer p-1 ${
            activeSection === "generateQuote" ? "border-b-[1px]" : ""
          }`}
          onClick={() => setActiveSection("generateQuote")}
        >
          generate
        </li>
        <li
          className=" hover:text-red-400 cursor-pointer p-1"
          onClick={handleLogout}
        >
          Logout
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
