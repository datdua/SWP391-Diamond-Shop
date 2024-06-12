import axios from "axios";

export async function getAllDiamond() {
  const response = await axios.get(
    "http://localhost:8080//api/diamonds"
  );
  if (response.status !== 200) {
    throw new Error("Failed to fetch diamond data");
  }
  return response.data;
}

export async function getDiamondByID(diamondID) {
  try {
    const response = await axios.get(
      `http://localhost:8080//api/diamonds/${diamondID}`
    );
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch diamond by ID");
  }
}
export async function getPage(page = 1, size = 9) {
  try {
    const response = await axios.get(
      `http://localhost:8080//api/diamonds/paged?page=${page}&size=${size}`
    );
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch diamond by page");
  }
}
export async function searchJewelryByGender(gender) {
  try {
    const response = await axios.get(
      `http://localhost:8080//api/jewelry/search/filter?gender=%20${encodeURIComponent(
        gender
      )}`
    );
    return response.data;
  } catch (error) {
    throw new Error("Failed to filter jewelry by gender");
  }
}

export async function createDiamond(diamond) {
  try {
    const response = await axios.post(
      "http://localhost:8080//api/diamonds/create",
      diamond
    );
    return response.data;
  } catch (error) {
    throw new Error("Failed to create jewelry");
  }
}

export async function updateDiamond(diamondID, diamond) {
  try {
    const response = await axios.put(
      `http://localhost:8080//api/diamonds/update/${diamondID}`,
      diamond
    );
    return response.data;
  } catch (error) {
    throw new Error("Failed to update Diamond");
  }
}

export async function deleteDiamond(diamondID) {
  try {
    const response = await axios.delete(
      `http://localhost:8080//api/diamonds/delete/${diamondID}`
    );
    return response.data;
  } catch (error) {
    throw new Error("Failed to delete diamond");
  }
}

export async function getCertificateImage(certificationID) {
  try {
    const response = await axios.get(
      `http://localhost:8080//api/certificates/get/certificateImg/${certificationID}`
    );
    console.log("API Response:", response.data); // Debug line
    return response.data.certificateImage; // Correctly extract the certificateImage URL
  } catch (error) {
    throw new Error("Failed to fetch diamond certificate image");
  }
}

export async function getWarrantityImage(warrantyID) {
  try {
    const response = await axios.get(
      `http://localhost:8080//api/warranties/get/warrantyImg/${warrantyID}`
    );
    console.log("API Response:", response.data); // Debug line
    return response.data.warrantyImage; // Correctly extract the warrantityImage URL
  } catch (error) {
    throw new Error("Failed to fetch diamond warranty image");
  }
}
