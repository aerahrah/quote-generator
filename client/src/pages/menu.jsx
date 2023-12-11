import { useState } from "react";
import RandomQuoteGenerator from "./quoteGenerator/randomQuoteGenerator";
import NavBar from "../components/Navbar/navbar";
import QuoteApp from "../pages/quotes/quote-app";

const Menu = () => {
  const [activeSection, setActiveSection] = useState("generateQuote");

  return (
    <div className="w-full h-screen box-border bg-neutral-100 dark:bg-neutral-900">
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
