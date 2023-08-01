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
    const allQuotes = await QuoteLibrary.find({ user: getId });
    if (allQuotes) {
      const allQuotesMap = allQuotes.map((quotes) => ({
        Id: quotes._id,
        Quote: quotes.quote,
        Author: quotes.author,
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
      return res.status(200).json({
        message: "Quote saved successfully",
        createQuote: createQuote,
      });
    } else {
      return res.status(400).json({ error: "Invalid user ID" });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Error adding quote" });
  }
};

module.exports = {
  getAllQuotes,
  addQuotes,
  deleteQuote,
};
