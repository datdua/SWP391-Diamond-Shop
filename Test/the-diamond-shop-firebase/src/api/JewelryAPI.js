import axios from "axios";

export async function getAllJewelry() {
  const response = await axios.get(
    "http://localhost:8080//api/jewelry"
  );
  if (!response.ok) {
    throw new Error("Failed to fetch jewelry data");
  }
  const data = await response.json();
  return data;
}
export async function searchJewelryByName(name) {
  const response = await axios.get(
    `http://localhost:8080//api/jewelry/searchName?name=${name}`
  );
  if (!response.ok) {
    throw new Error("Failed to search jewelry by name");
  }
  const data = await response.json();
  return data;
}
export async function getJewelryById(jewelryId) {
  try {
    const response = await axios.get(
      `http://localhost:8080//api/jewelry/${jewelryId}`
    );
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch jewelry by ID");
  }
}
export async function getPage(page = 1, size = 9) {
  try {
    const response = await axios.get(
      `http://localhost:8080//api/jewelry/paged?page=${page}&size=${size}`
    );
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch jewelry by page");
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
export async function searchJewelryBySize(size) {
  try {
    const response = await axios.get(
      `http://localhost:8080//api/jewelry/search/filter?size=${encodeURIComponent(
        size
      )}`
    );
    return response.data;
  } catch (error) {
    throw new Error("Failed to filter jewelry by size");
  }
}
