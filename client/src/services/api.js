import Axios from "../utils/axiosUtils";

export const saveData = async (quoteData, favoriteQuote, url) => {
  console.log(quoteData.origin);
  try {
    const response = await Axios.post(`${url}/add`, {
      quoteData: quoteData.quote,
      authorData: quoteData.author,
      categoryData: quoteData.category,
      originData: quoteData.origin,
      favoriteQuote: favoriteQuote,
    });
    return response;
  } catch (error) {
    throw new Error("Request failed:", error.message);
  }
};
export const updateData = async (url, id, quoteData) => {
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
};
export const updateHeartStateApi = async (
  url,
  id,
  quoteData,
  favoriteQuote
) => {
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
};
export const fetchData = async (selectedOption, url) => {
  try {
    const response = await Axios.get(`${url}/generate`, {
      params: {
        selectedValue: selectedOption,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const fetchAllData = async (
  url,
  filteredTask,
  filterCategory,
  filterOrigin
) => {
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
};

export const deleteData = async (url, id) => {
  try {
    const response = await Axios.delete(`${url}/delete/${id}`);
    return response.data;
  } catch (error) {
    console.log("Request failed:", error.response.data.message);
  }
};
