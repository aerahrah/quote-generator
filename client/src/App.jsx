import "./App.css";
import Signin from "./components/auth/signin";
import Signup from "./components/auth/signup";
import Menu from "./pages/menu";
import { Routes, Route } from "react-router-dom";
import { ErrorProvider } from "./components/utils/errorContext";

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
