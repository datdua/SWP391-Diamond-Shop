import axios from "axios";

// Function to get the authentication token (example)
export const getAuthToken = () => {
  return localStorage.getItem("jwt"); // Adjust based on where you store the token
};

export const createOrder = async (
  accountId,
  deliveryAddress,
  phoneNumber,
  pointsToRedeem,
  promotionCode
) => {
  try {
    const token = getAuthToken();
    const data = new URLSearchParams();
    data.append("accountID", accountId);
    data.append("deliveryAddress", deliveryAddress);
    data.append("phoneNumber", phoneNumber);
    if (pointsToRedeem) data.append("pointsToRedeem", pointsToRedeem);
    if (promotionCode) data.append("promotionCode", promotionCode);

    const response = await axios.post(
      "http://localhost:8080/orders/create",
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
    console.error("Error creating order:", error);
    throw error;
  }
};

export async function fetchOrders(accountID) {
  const response = await fetch(
    `http://localhost:8080/orders/account/${accountID}`
  );

  if (!response.ok) {
    const errorDetail = await response.text(); // Get the response text for more details
    throw new Error(
      `Network response was not ok: ${response.status} - ${errorDetail}`
    );
  }

  const data = await response.json();
  return data;
}

export async function getAllOrders() {
  try {
    const token = getAuthToken();
    const response = await axios.get(
      "http://localhost:8080/api/orders/getAll",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Failed to fetch orders:", error);
    throw error;
  }
}
