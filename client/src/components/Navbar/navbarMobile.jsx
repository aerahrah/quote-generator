import { Popover, Transition } from "@headlessui/react";
import { Fragment } from "react";
const NavBarMobile = ({
  isNavOpen,
  setIsNavOpen,
  handleLogout,
  activeSection,
  setActiveSection,
  FaBars,
}) => {
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
        <Popover.Panel className="md:hidden absolute right-0 p-4 rounded-md mt-3 w-screen max-w-xs transform bg-gray-200 shadow-md">
          <div className="flex flex-col items-start z-30 gap-2">
            <Popover.Button
              className={`hover:opacity-70 hover:cursor-pointer text-left p-1 w-full border-b-2  capitalize text-lg ${
                activeSection === "favoriteQuoteLibrary"
                  ? "border-gray-500 font-semibold text-gray-800"
                  : "border-gray-300 text-gray-700"
              }`}
              onClick={() => setActiveSection("favoriteQuoteLibrary")}
            >
              favorite
            </Popover.Button>
            <Popover.Button
              className={`hover:opacity-70 hover:cursor-pointer text-left p-1 w-full border-b-2 capitalize text-lg  ${
                activeSection === "generateQuote"
                  ? "border-gray-500 font-semibold text-gray-800"
                  : "border-gray-300 text-gray-700"
              }`}
              onClick={() => setActiveSection("generateQuote")}
            >
              generate
            </Popover.Button>
            <Popover.Button
              className=" hover:text-red-400 text-left capitalize cursor-pointer p-1 mt-4  text-gray-700 text-lg "
              onClick={handleLogout}
            >
              Logout
            </Popover.Button>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};
export default NavBarMobile;
