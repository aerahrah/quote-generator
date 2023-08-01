import NavBar from "../components/Navbar/navbar";
import { useState } from "react";
import RandomQuoteGenerator from "../components/quoteGenerator/randomQuoteGenerator";
import FavoriteQuotesLibrary from "../components/quoteFavorite/favoritQuotesLibrary";
const Menu = () => {
  const [activeSection, setActiveSection] = useState("generateQuote");
  return (
    <div className="w-full h-screen box-border bg-gray-900 flex flex-col">
      <NavBar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      {activeSection === "generateQuote" && <RandomQuoteGenerator />}
      {activeSection === "favoriteQuoteLibrary" && <FavoriteQuotesLibrary />}
    </div>
  );
};

export default Menu;
