const axios = require("axios");
require("dotenv").config();
const generateQuote = async (req, res) => {
  try {
    const { selectedValue } = req.query;
    console.log(selectedValue);
    const category = selectedValue;
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
  }
};

module.exports = generateQuote;
