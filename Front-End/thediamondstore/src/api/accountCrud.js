import axios from "axios";
import { getAuthToken } from "./OrderAPI";

export async function getAllAccount() {
  const response = await axios.get(
    "http://localhost:8080/api/accounts/get-all"
  );
  if (response.status !== 200) {
    throw new Error("Failed to fetch account data");
  }
  return response.data;
}

export async function getAccountByID_AdminManager(accountID) {
  try {
    const token = localStorage.getItem('jwt');
    const response = await axios.get(
      `http://localhost:8080/api/accounts/${accountID}`,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch account by ID");
  }
}

export async function getAccountByID(accountID) {
  const token = localStorage.getItem('jwt')
  try {
    const token = localStorage.getItem('jwt');
    const response = await axios.get(
      `http://localhost:8080/api/customer/accumulate-points/${accountID}`,{
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch account by ID");
  }
}

export async function getAccountHaveNotRoleCustomer() {
  try {
    const token = localStorage.getItem('jwt');
    const response = await axios.get(
      `http://localhost:8080/api/accounts/get-all-except-customer`,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch account by role");
  }
}


export async function getAccountByRoleCustomer() {
  try {
    const token = localStorage.getItem('jwt');
    const response = await axios.get(
      `hhttp://localhost:8080/api/accounts/get-by-account-role/ROLE_CUSTOMER`,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch account by role");
  }
}

export async function updateAccount(accountID, accountDetails) {
  const token = getAuthToken();
  try {
    const response = await axios.put(
      `http://localhost:8080/api/customer/accounts/update/${accountID}`,
      accountDetails,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    throw new Error("Failed to update account");
  }
}


export async function updateProfile(accountID, accountDetails) {
  const token = getAuthToken();
  try {
    const response = await axios.put(
      `http://localhost:8080/api/customers/customer/update/${accountID}`,
      accountDetails,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    throw new Error("Failed to update account");
  }
}


export async function deleteAccounts(accountIDs) {
  try {
    const token = localStorage.getItem("jwt");
    const response = await axios.delete("http://localhost:8080/api/admin/accounts/delete", {
      headers : { Authorization: `Bearer ${token}` },
      data: accountIDs,
    });
    return response.data;
  } catch (error) {
    throw new Error("Failed to delete accounts");
  }
}



export async function createAccount(account) {
  try {
    const response = await axios.post(
      "http://localhost:8080/api/admin/accounts/add",
      account
    );
    return response.data;
  } catch (error) {
    throw new Error("Failed to create account");
  }
}
export const getContactInfo = async (accountId) => {
  const token = localStorage.getItem('jwt')
  try {
    const response = await axios.get(`http://localhost:8080/api/customer/accounts/contact-information/${accountId}`,{
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
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
      `http://localhost:8080/api/customer/accounts/get-by-email/${email}`,
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
export const getCustomerPoints = async (accountId) => {
  const token = localStorage.getItem('jwt')
  try {
    const response = await axios.get(`http://localhost:8080/api/customer/accumulate-points/${accountId}`,{
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    if (response.status === 200) {
      return response.data.point;
    } else {
      throw new Error('Failed to fetch customer points');
    }
  } catch (error) {
    console.error('Error fetching customer points:', error);
    throw error;
  }
};

export const resetPassword = async (email) => {
  try {
    const response = await axios.post(`http://localhost:8080/api/accounts/forget-password?email=${email}`,
    );
    return response.data;
  } catch (error) {
    console.error('Error resetting password:', error);
    throw error; // Throw the error for higher level handling
  }
};



export const setPassword = async (email, newPassword) => {
  try {
    const response = await axios.put(`http://localhost:8080/api/accounts/set-password?email=${encodeURIComponent(email)}`, {}, {
      headers: {
        'Content-Type': 'application/json',
        'newPassword': newPassword, // Add newPassword to the headers
      },
    });
    return response.data;
  } catch (error) {
    if (error.response) {
      throw new Error(error.response.data.message || 'Error setting password');
    } else if (error.request) {
      throw new Error('No response from server');
    } else {
      throw new Error(error.message);
    }
  }
};

export const countCustomer = async () => {
  try {
    const response = await axios.get(`http://localhost:8080/api/customers/total`,
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching customer count:', error);
    throw error; // Throw the error for higher level handling
  }
};

export const countRevenue = async () => {
  try {
    const response = await axios.get(`http://localhost:8080/api/orders/totalOrderPaid`,
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching revenue count:', error);
    throw error; // Throw the error for higher level handling
  }
};

export const regenerateOTP = async (email) => {
  try {
    // Make GET request to the API endpoint with email as a query parameter
    const response = await axios.put(
      `http://localhost:8080/api/accounts/regenerate-otp`,
      null, // Pass null as the data parameter for PUT request
      {
        params: {
          email: email
        },
      }
    );

    if (response.status === 200) {
      return response.data; // Return response data if successful
    } else {
      throw new Error('Failed to regenerate OTP'); // Throw error if request fails
    }
  } catch (error) {
    console.error('Error regenerating OTP:', error.message);
    throw error; // Re-throw error to handle it in the calling code
  }
};



