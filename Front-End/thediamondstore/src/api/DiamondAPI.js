import axios from 'axios';

const apiClient = axios.create({
  baseURL: "http://localhost:8080/api",
});

apiClient.interceptors.response.use(
  response => response,
  error => {
    if (error.response && (error.response.status === 401 || error.response.status === 403)) {
      // Modify the error message
      return Promise.reject(new Error("Bạn không có thẩm quyền thực hiện"));
    }
    // Return any other error untouched
    return Promise.reject(error);
  }
);

// Diamond API functions
export async function getAllDiamond() {
  const response = await axios.get(
    "http://localhost:8080/api/diamonds/guest"
  );
  if (response.status !== 200) {
    throw new Error("Failed to fetch diamond data");
  }
  return response.data;
}

export async function getAllDiamond_Manager() {
  const token = localStorage.getItem('jwt');
  const response = await axios.get(
    "http://localhost:8080/api/diamonds/get-all",
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
  if (response.status !== 200) {
    throw new Error("Failed to fetch diamond data");
  }
  return response.data;
}

const BASE_URL = 'http://localhost:8080/api/diamonds/guest/get';

export const getDiamondById = async (diamondId) => {
    try {
        const response = await axios.get(`${BASE_URL}/${diamondId}`);
        return response.data;
    } catch (error) {
        throw new Error('Error fetching diamond data');
    }
};

export async function getPage(page = 1, size = 9) {
  try {
    const response = await axios.get(
      `http://localhost:8080/api/diamonds/guest/paged/diamonds?page=${page}&size=${size}`
    );
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch diamond by page");
  }
}

export async function createDiamond(diamond) {
  try {
    const token = localStorage.getItem('jwt');
    const response = await apiClient.post(
      "http://localhost:8080/api/diamonds/manager/create",
      diamond,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function updateDiamond(diamondID, diamond) {
  try {
    const token = localStorage.getItem('jwt');
    const response = await apiClient.put(
      `http://localhost:8080/api/diamonds/manager/update/${diamondID}`,
      diamond,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function deleteDiamond(diamondIDs) {
  try {
    const token = localStorage.getItem('jwt');
    const response = await apiClient.delete(
      "http://localhost:8080/api/diamonds/manager/delete",
      {
        headers: { Authorization: `Bearer ${token}` },
        data: diamondIDs, // Move `data` inside the same object as headers
      }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function getCertificateImage(certificationID) {
  try {
    const token = localStorage.getItem('jwt');
    const response = await axios.get(
      `http://localhost:8080/api/certificates/get/certificateImg/${certificationID}`,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    console.log("API Response:", response.data); // Debug line
    return response.data.certificateImage; // Correctly extract the certificateImage URL
  } catch (error) {
    throw new Error("Failed to fetch diamond certificate image");
  }
}

export async function getWarrantityImage(warrantyID) {
  try {
    const token = localStorage.getItem('jwt');
    const response = await axios.get(
      `http://localhost:8080/api/warranties/get/warrantyImg/${warrantyID}`,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    console.log("API Response:", response.data); // Debug line
    return response.data.warrantyImage; // Correctly extract the warrantityImage URL
  } catch (error) {
    throw new Error("Failed to fetch diamond warranty image");
  }
}

export async function searchDiamondByName(name) {
  try {
    const response = await axios.get(
      `http://localhost:8080/api/diamonds/guest/search/filter?diamondNameLike=${name}`
    );
    if (response.status !== 200) {
      throw new Error("Failed to search diamonds by name");
    }
    const data = response.data;
    console.log("Diamond search results:", data);
    return data;
  } catch (error) {
    console.error("Error searching for diamonds:", error);
    throw error;
  }
}

export const searchDiamond = async (filters, page = 1, size = 9) => {
  try {
    const params = { ...filters, page, size };
    const queryString = Object.keys(params)
      .map((key) => `${key}=${encodeURIComponent(params[key])}`)
      .join("&");

    const response = await axios.get(
      `http://localhost:8080/api/diamonds/guest/search/filter/paged?${queryString}`
    );
    if (response.status !== 200) {
      throw new Error("Failed to fetch diamonds");
    }
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch diamonds");
  }
};
