import "./App.css";
import Signin from "./pages/auth/signin";
import Signup from "./pages/auth/signup";
import Menu from "./pages/menu";
import { Routes, Route } from "react-router-dom";
import { ErrorProvider } from "./components/utilsComponent/errorContext";

function App() {
  return (
    <>
      <ErrorProvider>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/quote-generator" element={<Menu />} />
        </Routes>
      </ErrorProvider>
    </>
  );
}

export default App;
