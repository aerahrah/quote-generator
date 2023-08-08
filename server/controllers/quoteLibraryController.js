const QuoteLibrary = require("../model/QuoteLibrary");

const deleteQuote = async (req, res) => {
  try {
    const quoteId = req.params.id;
    const deleteById = await QuoteLibrary.deleteOne({ _id: quoteId });

    if (deleteById.deletedCount === 1) {
      return res.status(200).json({ message: "Successfully deteleted quote" });
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
    const { searchTerm } = req.query;
    console.log(searchTerm);
    let filter = { user: getId };

    if (searchTerm) {
      filter.$or = [
        { quote: { $regex: searchTerm, $options: "i" } },
        { author: { $regex: searchTerm, $options: "i" } },
      ];
    }

    const allQuotes = await QuoteLibrary.find(filter);
    console.log(allQuotes);
    if (allQuotes) {
      const allQuotesMap = allQuotes.map((quotes) => ({
        Id: quotes._id,
        Quote: quotes.quote,
        Author: quotes.author,
        Favorite: quotes.favorite,
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
    const { quoteData, authorData, favoriteQuote } = req.body;
    const getId = req.user;
    if (getId) {
      const createQuote = new QuoteLibrary({
        user: getId,
        quote: quoteData,
        author: authorData,
        favorite: favoriteQuote,
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
    const { quoteData, authorData, favoriteQuote } = req.body;
    const quoteId = req.params.id;
    const quote = await QuoteLibrary.findById(quoteId);
    if (!quote) {
      return res.status(404).json({ error: "Quote not found" });
    }

    quote.quote = quoteData;
    quote.author = authorData;
    quote.favorite = favoriteQuote;

    await quote.save();

    if (favoriteQuote === false) {
      return res.status(200).json({
        message: "Quote updated in Library",
        updatedQuote: quote,
      });
    } else {
      return res.status(200).json({
        message: "Quote updated in Favorites",
        updatedQuote: quote,
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
