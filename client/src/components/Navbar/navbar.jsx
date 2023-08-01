import { deleteCookie } from "../utils/cookieUtils";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import NavBarMobile from "./navbarMobile";
import { FaBars } from "react-icons/fa";
const NavBar = ({ activeSection, setActiveSection }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const navigate = useNavigate();
  const handleLogout = () => {
    deleteCookie("token");
    navigate("/");
  };

  return (
    <div className="bg-gray-800 shadow-md min-h-nav text-gray-200 text capitalize fixed z-30 inset-x-0">
      <div className="hidden md:flex justify-around  min-h-nav items-center">
        <h1 className="text-2xl font-bold">QG</h1>
        <ul className="flex text-xl w-[40%] justify-end gap-10">
          <li
            className={`hover:opacity-70 hover:cursor-pointer p-1 ${
              activeSection === "generateQuote" ? "border-b-[1px]" : ""
            }`}
            onClick={() => setActiveSection("generateQuote")}
          >
            generate
          </li>
          <li
            className={`hover:opacity-70 hover:cursor-pointer p-1 ${
              activeSection === "QuoteLibrary" ? "border-b-[1px]" : ""
            }`}
            onClick={() => setActiveSection("QuoteLibrary")}
          >
            library
          </li>
          <li
            className={`hover:opacity-70 hover:cursor-pointer p-1  ${
              activeSection === "favoriteQuoteLibrary" ? "border-b-[1px]" : ""
            }`}
            onClick={() => setActiveSection("favoriteQuoteLibrary")}
          >
            favorite
          </li>
          <li
            className=" hover:text-red-400 cursor-pointer p-1"
            onClick={handleLogout}
          >
            Logout
          </li>
        </ul>
      </div>
      <div className="block md:hidden ">
        <div className="flex justify-between items-center m-auto min-h-nav mx-6">
          <h1 className="text-2xl font-bold">QG</h1>
          <NavBarMobile
            isNavOpen={isNavOpen}
            setIsNavOpen={setIsNavOpen}
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
