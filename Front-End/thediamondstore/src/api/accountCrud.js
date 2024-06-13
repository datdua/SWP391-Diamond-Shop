import axios from "axios";

export async function getAllAccount() {
  const response = await axios.get(
    "http://localhost:8080/api/accounts/accounts"
  );
  if (response.status !== 200) {
    throw new Error("Failed to fetch account data");
  }
  return response.data;
}

export async function getAccountByID(accountID) {
  try {
    const response = await axios.get(
      `http://localhost:8080/api/accounts/get/${accountID}`
    );
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch account by ID");
  }
}

export async function getAccountByRole(role) {
  try {
    const response = await axios.get(
      `http://localhost:8080/api/accounts/getByRole/${role}`
    );
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch account by role");
  }
}

export async function updateAccount(accountID, account) {
  try {
    const response = await axios.put(
      `http://localhost:8080/api/accounts/update/${accountID}`,
      account
    );
    return response.data;
  } catch (error) {
    throw new Error("Failed to update account");
  }
}

export async function deleteAccount(accountID) {
  try {
    const response = await axios.delete(
      `http://localhost:8080/api/accounts/delete/${accountID}`
    );
    return response.data;
  } catch (error) {
    throw new Error("Failed to delete account");
  }
}

export async function createAccount(account) {
  try {
    const response = await axios.post(
      "http://localhost:8080/api/accounts/create",
      account
    );
    return response.data;
  } catch (error) {
    throw new Error("Failed to create account");
  }
}
export const getContactInfo = async (accountId) => {
  try {
      const response = await axios.get(`http://localhost:8080/api/accounts/contactInfo/${accountId}`);
      return response.data;
  } catch (error) {
      console.error('Error fetching contact info:', error);
      throw error;
  }
};
export const getAccountIDByEmail = async (email) => {
  try {
    const token = localStorage.getItem("jwt");
    const response = await axios.get(
      `http://localhost:8080/api/accounts/getByEmail/${email}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data.accountID;
  } catch (error) {
    console.error("Error fetching account ID:", error);
    throw new Error("Failed to fetch account information: " + error.message);
  }
};

