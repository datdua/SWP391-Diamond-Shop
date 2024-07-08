import axios from "axios";

export const getAllGoldPrice = async () => {
  try {
    const token = localStorage.getItem('jwt');
    const response = await axios.get(
      "https://www.thediamondstore.site/api/goldPrices/get-all",
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getGoldPriceById = async (goldPriceID) => {
  try {
    const response = await axios.get(
      `https://www.thediamondstore.site/api/goldPrices/${goldPriceID}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const createGoldPrice = async (goldPrice) => {
  try {
    const token = localStorage.getItem('jwt');
    const response = await axios.post(
      "https://www.thediamondstore.site/api/goldPrices/manager/create",
      goldPrice,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const updateGoldPrice = async (goldPriceID, goldPrice) => {
  try {
    const token = localStorage.getItem('jwt');
    const response = await axios.put(
      `https://www.thediamondstore.site/api/goldPrices/manager/${goldPriceID}`,
      goldPrice,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const deleteGoldPrice = async (goldPriceIDs) => {
  try {
    const token = localStorage.getItem('jwt');
    const response = await axios.delete(
      `https://www.thediamondstore.site/api/goldPrices/manager/delete`
      , { 
        headers: { Authorization: `Bearer ${token}` },
        data: goldPriceIDs }
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
