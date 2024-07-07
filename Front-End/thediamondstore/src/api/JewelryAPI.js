import axios from "axios";

// Jewelry API functions
export async function getAllJewelry() {
  const response = await axios.get(
    "http://localhost:8080/api/jewelry/guest"
  );
  if (response.status !== 200) {
    throw new Error("Failed to fetch jewelry data");
  }
  return response.data;
}

export async function searchJewelryByName(name , page = 1, size = 9) {
  try {
    const response = await axios.get(
      `http://localhost:8080/api/jewelry/guest/search/filter/paged?jewelryName=${name}&page=${page}&size=${size}`
    );
    console.log(response.data); 
    return response.data;
  } catch (error) {
    throw new Error("Failed to search jewelry by name");
  }
}

export async function getWarrantityImage(warrantyID) {
  try {
    const response = await axios.get(
      `http://localhost:8080/api/warranties/customer/get/warrantyImg/${warrantyID}`
    );
    console.log("API Response:", response.data); // Debug line
    return response.data.warrantyImage; // Correctly extract the warrantityImage URL
  } catch (error) {
    throw new Error("Failed to fetch diamond warranty image");
  }
}

export async function getJewelryById(jewelryId) {
  try {
    const response = await axios.get(
      `http://localhost:8080/api/jewelry/guest/get/${jewelryId}`
    );
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch jewelry by ID");
  }
}

export async function getPage(page = 1, size = 9) {
  try {
    const response = await axios.get(
      `http://localhost:8080/api/jewelry/guest/paged/jewelrys?page=${page}&size=${size}`
    );
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch jewelry by page");
  }
}

export async function createJewelry(jewelry) {
  try {
    const response = await axios.post(
      "http://localhost:8080/api/jewelry/create",
      jewelry
    );
    return response.data;
  } catch (error) {
    throw new Error("Failed to create jewelry");
  }
}

export async function updateJewelry(jewelryID, jewelry) {
  try {
    const response = await axios.put(
      `http://localhost:8080/api/jewelry/update/${jewelryID}`,
      jewelry
    );
    return response.data;
  } catch (error) {
    throw new Error("Failed to update jewelry");
  }
}

export async function deleteJewelry(jewelryIDs) {
  try {
    const response = await axios.delete(
      `http://localhost:8080/api/jewelry/delete`
      , { data: jewelryIDs }
    );
    return response.data;
  } catch (error) {
    throw new Error("Failed to delete jewelry");
  }
}

// Cart API functions
export const addToCart = async (accountId, jewelryId, quantity, size) => {
  try {
    const response = await axios.post(
      `http://localhost:8080/api/cart/customer/add?accountID=${accountId}&jewelryID=${jewelryId}&quantity=${quantity}&sizeJewelry=${size}`
    );
    return response.data;
  } catch (error) {
    throw new Error("Failed to add jewelry to cart");
  }
};

export async function searchJewelry(filters, page = 1, size = 9) {
  try {
    // Construct the query parameters including filters and pagination
    const params = new URLSearchParams({
      ...filters, // Spread the filters object to include its properties as individual parameters
      page, // Add the page parameter
      size, // Add the size parameter
    });

    const response = await axios.get(
      "http://localhost:8080/api/jewelry/guest/search/filter/paged", // Updated URL to match the provided one
      { params } // Pass the constructed query parameters
    );

    if (response.status !== 200) {
      throw new Error("Failed to fetch jewelry");
    }

    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch jewelry");
  }
};
