import "./App.css";
import Signin from "./components/auth/signin";
import Signup from "./components/auth/signup";
import FavoriteQuotesLibrary from "./components/quoteFavorite/favoritQuotesLibrary";
import QuoteGenerator from "./components/quoteGenerator/quoteGenerator";
import { Routes, Route } from "react-router-dom";
import { ErrorProvider } from "./components/utils/errorContext";

function App() {
  return (
    <>
      <ErrorProvider>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/quote-generator" element={<QuoteGenerator />} />
          <Route path="/favorite" element={<FavoriteQuotesLibrary />} />
        </Routes>
      </ErrorProvider>
    </>
  );
}

export default App;
