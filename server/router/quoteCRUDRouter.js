const express = require("express");
const router = express.Router();
const authenticate = require("../middleware/authValidation");
const {
  getAllQuotes,
  addQuotes,
  deleteQuote,
  updateQuote,
} = require("../controllers/quoteLibraryController");

router.post("/add", authenticate, addQuotes);
router.get("/get-all", authenticate, getAllQuotes);
router.delete("/delete/:id", authenticate, deleteQuote);
router.patch("/update/:id", authenticate, updateQuote);

module.exports = router;
