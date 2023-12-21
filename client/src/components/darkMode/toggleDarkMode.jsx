import { useDispatch, useSelector } from "react-redux";
import { IoMdMoon, IoIosSunny } from "react-icons/io";
import { toggleTheme } from "../../store/slices/themeSlice";

const ToggleDarkMode = () => {
  const dispatch = useDispatch();
  const { theme } = useSelector((state) => state.theme);
  const handleToggleTheme = () => {
    dispatch(toggleTheme());
  };

  return (
    <button
      onClick={handleToggleTheme}
      className="bg-neutral-100 dark:bg-neutral-700 rounded-md"
    >
      <label
        className="block relative cursor-pointer w-full p-2.5  rounded-full"
        htmlFor="light-switch"
      >
        <i>
          <IoIosSunny className="dark:hidden w-6 h-6" />
        </i>
        <i>
          <IoMdMoon className="hidden dark:block w-6 h-6" />
        </i>

        <span className="sr-only">Switch to light / dark version</span>
      </label>
      <p></p>
    </button>
  );
};

export default ToggleDarkMode;
