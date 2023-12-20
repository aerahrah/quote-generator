import { Popover, Transition } from "@headlessui/react";
import { FaSignOutAlt, FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { navLinks } from "./navbarLinks";

const NavBarMobile = ({ handleLogout, activeSection }) => {
  return (
    <Popover className="relative z-30 md:hidden ">
      <Popover.Button className="p-2 border-[1px] rounded-md">
        <FaBars />
      </Popover.Button>
      <Transition
        enter="transition duration-100 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-75 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
      >
        <Popover.Panel className="md:hidden absolute right-0 top-[1rem] p-4 rounded-md mt-3 w-[85vw] max-w-xs transform text-neutral-700 bg-neutral-50 dark:bg-neutral-800 dark:text-neutral-300  shadow-md">
          <div className="flex flex-col items-start z-30 gap-4">
            {navLinks.map(({ section, icon, label }) => (
              <Popover.Button
                key={section}
                className={`hover:opacity-70 hover:cursor-pointer text-left p-1 w-full border-b-[1px] capitalize text-lg  ${
                  activeSection === section
                    ? "border-neutral-500 font-semibold text-neutral-700 dark:text-neutral-300"
                    : "border-neutral-700 text-neutral-500"
                }`}
              >
                <Link to={activeSection}>
                  <div className="flex gap-2 items-center">
                    {icon}
                    <h1> {label}</h1>
                  </div>
                </Link>
              </Popover.Button>
            ))}

            <Popover.Button
              className=" hover:text-red-400 text-left capitalize cursor-pointer p-1 mt-4  text-neutral-500 text-lg "
              onClick={handleLogout}
            >
              <div className="flex gap-2 items-center ">
                <FaSignOutAlt className="text-neutral-500" />
                <h1 className="font-normal">logout</h1>
              </div>
            </Popover.Button>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};
export default NavBarMobile;
