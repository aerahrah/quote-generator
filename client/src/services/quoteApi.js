import Axios from "../utils/axiosUtils";
import { createAsyncThunk } from "@reduxjs/toolkit";

const url = "http://localhost:3500/quote";

export const saveData = createAsyncThunk(
  "add",
  async ({ quoteData, favoriteQuote }) => {
    console.log(quoteData);
    console.log(favoriteQuote);
    try {
      const response = await Axios.post(`${url}/add`, {
        quoteData: quoteData.quote,
        authorData: quoteData.author,
        categoryData: quoteData.category,
        originData: quoteData.origin,
        favoriteQuote: favoriteQuote,
      });
      console.log(response);
      return response.data;
    } catch (error) {
      throw new Error("Request failed:", error.message);
    }
  }
);
export const updateData = createAsyncThunk("update", async (id, quoteData) => {
  console.log(quoteData);
  try {
    const response = await Axios.patch(`${url}/update/${id}`, {
      quoteData: quoteData.quote,
      authorData: quoteData.author,
      favoriteQuote: quoteData.favorite,
    });
    return response;
  } catch (error) {
    throw new Error("Request failed:", error.message);
  }
});
export const updateHeartStateApi = createAsyncThunk(
  "updateHeart",
  async (id, quoteData, favoriteQuote) => {
    try {
      const response = await Axios.patch(`${url}/update/${id}`, {
        quoteData: quoteData.Quote,
        authorData: quoteData.Author,
        favoriteQuote: favoriteQuote,
      });
      return response;
    } catch (error) {
      throw new Error("Request failed:", error.message);
    }
  }
);
export const fetchData = createAsyncThunk(
  "generate",
  async (selectedOption) => {
    try {
      const response = await Axios.get(`${url}/generate`, {
        params: {
          selectedValue: selectedOption,
        },
      });
      console.log(response.data);
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);

export const fetchAllData = createAsyncThunk(
  "fetch",
  async ({ filteredTask, filterCategory, filterOrigin }) => {
    console.log(filterCategory);
    try {
      const response = await Axios.get(`${url}/get-all`, {
        params: {
          searchTerm: filteredTask,
          filterCategory: filterCategory,
          filterOrigins: filterOrigin,
        },
      });
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log("Request failed:", error);
    }
  }
);

export const deleteData = createAsyncThunk("delete", async (id) => {
  try {
    const response = await Axios.delete(`${url}/delete/${id}`);
    return response.data;
  } catch (error) {
    console.log("Request failed:", error.response.data.message);
  }
});
