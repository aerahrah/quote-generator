import Axios from "../utils/axiosUtils";
import { createAsyncThunk } from "@reduxjs/toolkit";

const url = import.meta.env.VITE_API_URL;

export const saveData = createAsyncThunk("add", async ({ quoteData }) => {
  try {
    const response = await Axios.post(`${url}quote/add`, {
      quoteData: quoteData.quote,
      authorData: quoteData.author,
      categoryData: quoteData.category,
      originData: quoteData.origin,
      favoriteQuote: quoteData.favorite,
      quoteColor: quoteData.color,
    });
    quoteData.color;

    return response.data;
  } catch (error) {
    throw new Error("Request failed:", error.message);
  }
});
export const updateData = createAsyncThunk(
  "update",
  async ({ id, formData }) => {
    try {
      const response = await Axios.patch(`${url}quote/update/${id}`, {
        quoteData: formData.quote,
        authorData: formData.author,
        favoriteQuote: formData.favorite,
        categoryQuote: formData.category,
        quoteColor: formData.color,
      });

      return response.data;
    } catch (error) {
      throw new Error("Request failed:", error.message);
    }
  }
);
export const updateHeartStateApi = createAsyncThunk(
  "updateHeart",
  async ({ quoteData }) => {
    try {
      const response = await Axios.patch(`${url}quote/update/${quoteData.Id}`, {
        quoteData: quoteData.Quote,
        authorData: quoteData.Author,
        favoriteQuote: quoteData.Favorite,
        categoryQuote: quoteData.Category,
        quoteColor: quoteData.TextColor,
      });

      return response.data;
    } catch (error) {
      throw new Error("Request failed:", error.message);
    }
  }
);
export const fetchData = createAsyncThunk(
  "generate",
  async (selectedOption) => {
    try {
      const response = await Axios.get(`${url}quote/generate`, {
        params: {
          selectedValue: selectedOption,
        },
      });

      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);

export const fetchAllData = createAsyncThunk("fetch", async () => {
  try {
    const response = await Axios.get(`${url}quote/get-all`);

    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
});

export const deleteData = createAsyncThunk("delete", async (id) => {
  try {
    const response = await Axios.delete(`${url}quote/delete/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
});
