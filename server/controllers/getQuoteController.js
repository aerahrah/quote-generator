const axios = require("axios");
require("dotenv").config();
const generateQuote = async (req, res) => {
  try {
    const { selectedValue } = req.query;
    const categories = [
      "happiness",
      "anger",
      "courage",
      "fitness",
      "love",
      "history",
    ];

    let category =
      selectedValue ||
      categories[Math.floor(Math.random() * categories.length)];

    console.log(category);
    const apiKey = process.env.API_KEY;
    const response = await axios.get(
      `https://api.api-ninjas.com/v1/quotes?category=${category}`,
      {
        headers: {
          "X-Api-Key": apiKey,
        },
      }
    );

    return res.json(response.data);
  } catch (error) {
    console.error("Request failed:", error.message);
    return res.status(500).json({ error: "Request failed" });
  }
};

module.exports = generateQuote;
