// CartAPI.js
import axios from 'axios';

export const addToCart = async (accountId, diamondId, quantity) => {
    const response = await axios.post(`http://localhost:8080/api/cart/add?accountID=${accountId}&jewelryID=${diamondId}&quantity=${quantity}`);
    return response.data;
};