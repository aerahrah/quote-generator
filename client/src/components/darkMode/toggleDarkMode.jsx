import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../store/slices/themeSlice";
const ToggleDarkMode = () => {
  const dispatch = useDispatch();
  const { theme } = useSelector((state) => state.theme);
  const handleToggleTheme = () => {
    dispatch(toggleTheme());
  };

  return (
    <div>
      <button onClick={handleToggleTheme}>{theme}</button>
    </div>
  );
};

export default ToggleDarkMode;
