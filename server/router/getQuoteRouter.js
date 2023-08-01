const express = require("express");
const router = express.Router();
const authenticate = require("../middleware/authValidation");
const generateQuote = require("../controllers/getQuoteController");

router.get("/generate", authenticate, generateQuote);

module.exports = router;
