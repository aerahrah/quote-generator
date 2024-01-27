import { deleteCookie } from "../../utils/cookieUtils";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaSignOutAlt } from "react-icons/fa";
import { navLinks } from "./navbarLinks";
import { useLocation } from "react-router-dom";
import ToggleDarkMode from "../darkMode/toggleDarkMode";
import NavBarMobile from "./navbarMobile";

const NavBar = () => {
  const { pathname } = useLocation();
  const activeSection = pathname.substring(1);
  const navigate = useNavigate();

  const handleLogout = () => {
    deleteCookie("token");
    navigate("/");
  };

  return (
    <div className="bg-white dark:bg-neutral-800 shadow min-h-nav text-neutral-700 dark:text-neutral-300 text capitalize fixed z-20 inset-x-0">
      <div className="hidden md:flex w-[95vw] max-w-[1164px] justify-between mx-auto min-h-nav items-center">
        <h1 className="text-3xl font-extrabold">QH</h1>
        <ul className="flex font-thin text-lg w-[40%] items-center justify-end gap-[2vw]">
          <ToggleDarkMode />
          {navLinks.map(({ section, icon, label }) => (
            <li
              key={section}
              className={`hover:text-neutral-900 hover:cursor-pointer hover:dark:text-neutral-400 p-1 ${
                activeSection === section
                  ? "border-b-[1px] border-neutral-400 font-normal"
                  : ""
              }`}
            >
              <Link to={section}>
                <div className="flex gap-2 items-center ">
                  {icon}
                  <h1> {label}</h1>
                </div>
              </Link>
            </li>
          ))}
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
          <h1 className="text-3xl font-extrabold">QH</h1>
          <NavBarMobile
            handleLogout={handleLogout}
            activeSection={activeSection}
          ></NavBarMobile>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
