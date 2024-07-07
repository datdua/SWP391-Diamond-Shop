import axios from "axios";

export const getAllDiamondPrice = async () => {
  try {
    const token = localStorage.getItem('jwt');
    const response = await axios.get(
      "http://localhost:8080/api/diamondprices/get-all",
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getDiamondPriceById = async (diamondPriceID) => {
  try {
    const token = localStorage.getItem('jwt');
    const response = await axios.get(
      `http://localhost:8080/api/diamondprices/${diamondPriceID}`,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const createDiamondPrice = async (diamondPrice) => {
  try {
    const token = localStorage.getItem('jwt');
    const response = await axios.post(
      "http://localhost:8080/api/diamondprices/admin/create",
      diamondPrice,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const updateDiamondPrice = async (diamondPriceID, diamondPrice) => {
  try {
    const token = localStorage.getItem('jwt');
    const response = await axios.put(
      `http://localhost:8080/api/diamondprices/admin/${diamondPriceID}`,
      diamondPrice,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const  getDiamondPriceByCaratSize= async (caratSize) => {
  try{
    const response = await axios.get(
      `http://localhost:8080/api/diamondprices/guest/prices/${caratSize}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export const deleteDiamondPrice = async (diamondPriceIDs) => {
  try {
    const token = localStorage.getItem('jwt');
    const response = await axios.delete(
      `http://localhost:8080/api/diamondprices/admin/delete`
      , { data: diamondPriceIDs },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
