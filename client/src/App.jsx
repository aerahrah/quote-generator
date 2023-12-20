import { Routes, Route } from "react-router-dom";
import { ErrorProvider } from "./components/utilsComponent/errorContext";
import { useSelector } from "react-redux";
import Signin from "./pages/auth/signin";
import Signup from "./pages/auth/signup";
import Menu from "./pages/menu";

function App() {
  const { theme } = useSelector((state) => state.theme);
  console.log(theme);
  return (
    <div className={`${theme}`}>
      <ErrorProvider>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/*" element={<Menu />} />
        </Routes>
      </ErrorProvider>
    </div>
  );
}

export default App;
