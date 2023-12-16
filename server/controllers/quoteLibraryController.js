const QuoteLibrary = require("../model/QuoteLibrary");

const deleteQuote = async (req, res) => {
  try {
    const quoteId = req.params.id;
    const deleteById = await QuoteLibrary.deleteOne({ _id: quoteId });

    if (deleteById.deletedCount === 1) {
      return res.status(200).json({ message: "Removed quote" });
    } else {
      return res.status(500).json({ message: "Unable to delete quote" });
    }
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
const getAllQuotes = async (req, res) => {
  try {
    const getId = req.user;
    const { searchTerm, filterCategory, filterOrigins } = req.query;
    let filter = { user: getId };
    if (searchTerm) {
      filter.$or = [
        { quote: { $regex: searchTerm, $options: "i" } },
        { author: { $regex: searchTerm, $options: "i" } },
      ];
    }

    const categoryFilters = {
      happiness: { category: "happiness" },
      anger: { category: "anger" },
      courage: { category: "courage" },
      fitness: { category: "fitness" },
      love: { category: "love" },
      history: { category: "history" },
    };

    const categoryFilter = categoryFilters[filterCategory];

    if (filterOrigins === "original" || filterOrigins === "generated") {
      if (categoryFilter) {
        filter = { ...filter, ...categoryFilter, origin: filterOrigins };
      } else {
        filter = { ...filter, origin: filterOrigins };
      }
    } else if (categoryFilter) {
      filter = { ...filter, ...categoryFilter };
    }

    const allQuotes = await QuoteLibrary.find(filter);

    if (allQuotes) {
      const allQuotesMap = allQuotes.map((quotes) => ({
        Id: quotes._id,
        Quote: quotes.quote,
        Author: quotes.author,
        Favorite: quotes.favorite,
        Category: quotes.category,
        Origin: quotes.origin,
        TextColor: quotes.textColor,
      }));

      return res.status(200).json(allQuotesMap);
    } else {
      return res.status(500).json({ error: "Internal server error" });
    }
  } catch (error) {
    return res.status(500).json({ error: "Error retrieving list of quotes" });
  }
};

const addQuotes = async (req, res) => {
  try {
    const {
      quoteData,
      authorData,
      categoryData,
      originData,
      favoriteQuote,
      quoteColor,
    } = req.body;
    const getId = req.user;
    if (getId) {
      const createQuote = new QuoteLibrary({
        user: getId,
        quote: quoteData,
        author: authorData,
        category: categoryData,
        origin: originData,
        favorite: favoriteQuote,
        textColor: quoteColor,
      });
      await createQuote.save();
      if (favoriteQuote === false) {
        return res.status(200).json({
          message: "Quote Added to Library",
          createQuote: createQuote,
        });
      } else {
        return res.status(200).json({
          message: "Quote Added to Favorites",
          createQuote: createQuote,
        });
      }
    } else {
      return res.status(400).json({ error: "Invalid user ID" });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Error adding quote" });
  }
};
const updateQuote = async (req, res) => {
  try {
    const { quoteData, authorData, favoriteQuote, categoryQuote, quoteColor } =
      req.body;
    const quoteId = req.params.id;
    const quote = await QuoteLibrary.findById(quoteId);
    if (!quote) {
      return res.status(404).json({ error: "Quote not found" });
    }

    quote.quote = quoteData;
    quote.author = authorData;
    quote.favorite = favoriteQuote;
    quote.category = categoryQuote;
    quote.textColor = quoteColor;

    await quote.save();

    if (favoriteQuote === false) {
      return res.status(200).json({
        message: "Quote updated in Library",
      });
    } else {
      return res.status(200).json({
        message: "Quote updated in Favorites",
      });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Error updating quote" });
  }
};

module.exports = {
  getAllQuotes,
  addQuotes,
  deleteQuote,
  updateQuote,
};
