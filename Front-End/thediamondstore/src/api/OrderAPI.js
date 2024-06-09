import axios from 'axios';

// Function to get the authentication token (example)
export const getAuthToken = () => {
    return localStorage.getItem('jwt'); // Adjust based on where you store the token
};

export const createOrder = async (accountId, deliveryAddress, phoneNumber, pointsToRedeem, promotionCode) => {
    try {
        const token = getAuthToken();
        const data = new URLSearchParams();
        data.append('accountID', accountId);
        data.append('deliveryAddress', deliveryAddress);
        data.append('phoneNumber', phoneNumber);
        if (pointsToRedeem) data.append('pointsToRedeem', pointsToRedeem);
        if (promotionCode) data.append('promotionCode', promotionCode);

        const response = await axios.post(
          "https://diamondstore.lemonhill-6b585cc3.eastasia.azurecontainerapps.io/orders/create",
          data,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/x-www-form-urlencoded",
            },
          }
        );

        return response.data;
    } catch (error) {
        console.error('Error creating order:', error);
        throw error;
    }
};

export async function fetchOrders(accountID) {
    const response = await fetch(
      `https://diamondstore.lemonhill-6b585cc3.eastasia.azurecontainerapps.io/orders/account/${accountID}`
    );
    
    if (!response.ok) {
        const errorDetail = await response.text(); // Get the response text for more details
        throw new Error(`Network response was not ok: ${response.status} - ${errorDetail}`);
    }
    
    const data = await response.json();
    return data;
}
