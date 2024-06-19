import axios from "axios";

export const getDiamondPrice = async () => {
  try {
    const response = await axios.get("/diamond-price");
    return response.data;
  } catch (error) {
    console.error(error);
  }
};