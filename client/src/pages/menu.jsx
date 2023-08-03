import NavBar from "../components/Navbar/navbar";
import { useState } from "react";
import RandomQuoteGenerator from "../components/quoteGenerator/randomQuoteGenerator";
import QuoteApp from "../components/quotes/quote-app";

const Menu = () => {
  const [activeSection, setActiveSection] = useState("generateQuote");
  return (
    <div className="w-full h-screen box-border bg-gray-900 flex flex-col">
      <NavBar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      {activeSection === "generateQuote" && <RandomQuoteGenerator />}
      {(activeSection === "favoriteQuoteLibrary" ||
        activeSection === "quoteLibrary") && (
        <QuoteApp activeSection={activeSection} />
      )}
    </div>
  );
};

export default Menu;
