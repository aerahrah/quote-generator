const mongoose = require("mongoose");

const QuoteLibrarySchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "Users" },
  quote: { type: String, required: true },
  author: { type: String, required: true },
  category: { type: String, required: false },
  origin: { type: String, required: true },
  favorite: { type: Boolean, required: true },
  textColor: { type: String, required: false },
});

const QuoteLibrary = mongoose.model("QuoteLibrary", QuoteLibrarySchema);
module.exports = QuoteLibrary;
