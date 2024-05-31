import axios from 'axios';

export const getAccountIDByEmail = async (email) => {
    try {
        const token = localStorage.getItem('jwt');
        const response = await axios.get(`http://localhost:8080/api/accounts/getByEmail/${email}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response.data.accountID; // Adjust this line according to your actual API response
    } catch (error) {
        console.error("Error fetching account ID:", error);
        throw new Error("Failed to fetch account information: " + error.message);
    }
};

export const addJewelryToCart = async (accountId, jewelryId, quantity, size) => {
    try {
        const token = localStorage.getItem('jwt');
        const response = await axios.post(
            `http://localhost:8080/api/cart/add?accountID=${accountId}&jewelryID=${jewelryId}&quantity=${quantity}&sizeJewelry=${size}`,
            {}, 
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        );
        return response.data; 
    } catch (error) {
        console.error("Error adding item to cart:", error);
        throw new Error("Failed to add item to cart");
    }
};
export const getAllCartItems = async () => {
    try {
        const token = localStorage.getItem('jwt');
        const response = await axios.get(`http://localhost:8080/api/cart`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response.data; 
    } catch (error) {
        console.error("Error fetching cart items:", error);
        throw new Error("Failed to fetch cart items");
    }
};


