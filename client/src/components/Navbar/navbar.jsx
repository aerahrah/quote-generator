import { deleteCookie } from "../utils/cookieUtils";
import { useNavigate } from "react-router-dom";

import NavBarMobile from "./navbarMobile";
import { FaBars, FaRegHeart, FaSignOutAlt } from "react-icons/fa";
import { GoLightBulb, GoBook } from "react-icons/go";
const NavBar = ({ activeSection, setActiveSection }) => {
  const navigate = useNavigate();
  const handleLogout = () => {
    deleteCookie("token");
    navigate("/");
  };

  return (
    <div className="bg-gray-800 shadow-md min-h-nav text-gray-300 text capitalize fixed z-30 inset-x-0">
      <div className="hidden md:flex w-[80vw] justify-between mx-auto min-h-nav items-center">
        <h1 className="text-2xl font-bold">QG</h1>
        <ul className="flex font-thin text-lg w-[40%] items-center justify-end gap-10">
          <li
            className={`hover:opacity-70 hover:cursor-pointer p-1 ${
              activeSection === "generateQuote"
                ? "border-b-[1px] font-normal"
                : ""
            }`}
            onClick={() => setActiveSection("generateQuote")}
          >
            <div className="flex gap-2 items-center">
              <GoLightBulb className="text-gray-500" />
              <h1> generate</h1>
            </div>
          </li>
          <li
            className={`hover:opacity-70 hover:cursor-pointer p-1 ${
              activeSection === "quoteLibrary"
                ? "border-b-[1px]  font-normal"
                : ""
            }`}
            onClick={() => setActiveSection("quoteLibrary")}
          >
            <div className="flex gap-2 items-center">
              <GoBook className="text-gray-500" />
              <h1> library</h1>
            </div>
          </li>
          <li
            className={`hover:opacity-70 hover:cursor-pointer p-1  ${
              activeSection === "favoriteQuoteLibrary"
                ? "border-b-[1px]  font-normal"
                : ""
            }`}
            onClick={() => setActiveSection("favoriteQuoteLibrary")}
          >
            <div className="flex gap-2 items-center">
              <FaRegHeart className="text-gray-500" />
              <h1> favorite</h1>
            </div>
          </li>
          <li
            className="hover:opacity-70 hover:cursor-pointer p-1"
            onClick={handleLogout}
          >
            <div className="flex gap-2 items-center ">
              <FaSignOutAlt className="text-gray-500" />
              <h1 className="font-normal">logout</h1>
            </div>
          </li>
        </ul>
      </div>
      <div className="block md:hidden ">
        <div className="flex justify-between items-center m-auto min-h-nav mx-6">
          <h1 className="text-2xl font-bold">QG</h1>
          <NavBarMobile
            handleLogout={handleLogout}
            activeSection={activeSection}
            setActiveSection={setActiveSection}
            FaBars={FaBars}
          ></NavBarMobile>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
