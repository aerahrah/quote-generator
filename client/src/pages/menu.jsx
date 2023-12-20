import { Routes, Route } from "react-router-dom";
import RandomQuoteGenerator from "./quoteGenerator/randomQuoteGenerator";
import NavBar from "../components/Navbar/navbar";
import QuoteApp from "../pages/quotes/quote-app";

const Menu = () => {
  return (
    <div className="w-full h-screen box-border bg-neutral-100 dark:bg-neutral-900">
      <NavBar />
      <Routes>
        <Route path="/generate" element={<RandomQuoteGenerator />} />
        <Route path="/library" element={<QuoteApp />} />
        <Route path="/favorite" element={<QuoteApp />} />
      </Routes>
    </div>
  );
};

export default Menu;
