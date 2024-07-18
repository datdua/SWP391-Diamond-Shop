import axios from "axios";

export const getAllGoldPrice = async () => {
  try {
    const token = localStorage.getItem('jwt');
    const response = await axios.get(
      "http://localhost:8080/api/gold-prices/get-all",
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
      `http://localhost:8080/api/gold-prices/get-by-id/${goldPriceID}`
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
      "http://localhost:8080/api/managers/gold-price-management/gold-prices/add",
      goldPrice,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    )
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const updateGoldPrice = async (goldPriceID, goldPrice) => {
  try {
    const token = localStorage.getItem('jwt');
    const response = await axios.put(
      `http://localhost:8080/api/gold-prices/gold-price-management/gold-prices/update/${goldPriceID}`,
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
      `http://localhost:8080/api/gold-prices/gold-price-management/gold-prices/delete`
      , { 
        headers: { Authorization: `Bearer ${token}` },
        data: goldPriceIDs }
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
