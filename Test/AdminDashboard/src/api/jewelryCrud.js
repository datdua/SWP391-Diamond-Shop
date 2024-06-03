import axios from 'axios';

export async function getAllJewelry() {
    const response = await axios.get('/api/jewelry');
    if (response.status !== 200) {
        throw new Error('Failed to fetch jewelry data');
    }
    return response.data;
}
export async function searchJewelryByName(name) {
    const response = await axios.get(`/api/jewelry/searchName?name=${name}`);
    if (!response.ok) {
        throw new Error('Failed to search jewelry by name');
    }
    const data = await response.json();
    return data;
}
export async function getJewelryById(jewelryId) {
    try {
        const response = await axios.get(`/api/jewelry/${jewelryId}`);
        return response.data;
    } catch (error) {
        throw new Error('Failed to fetch jewelry by ID');
    }
}
export async function getPage(page = 1, size = 9) {
    try {
        const response = await axios.get(`/api/jewelry/paged?page=${page}&size=${size}`);
        return response.data;
    } catch (error) {
        throw new Error('Failed to fetch jewelry by page');
    }
}
export async function searchJewelryByGender(gender) {
    try {
        const response = await axios.get(`/api/jewelry/search/filter?gender=%20${encodeURIComponent(gender)}`);
        return response.data;
    } catch (error) {
        throw new Error('Failed to filter jewelry by gender');
    }
}

export async function createJewelry(jewelry) {
    try {
        const response = await axios.post('/api/jewelry/create', jewelry);
        return response.data;
    } catch (error) {
        throw new Error('Failed to create jewelry');
    }
}

export async function updateJewelry(jewelryID, jewelry) {
    try {
        const response = await axios.put(`/api/jewelry/update/${jewelryID}`, jewelry);
        return response.data;
    } catch (error) {
        throw new Error('Failed to update jewelry');
    }
}

export async function deleteJewelry(jewelryID) {
    try {
        const response = await axios.delete(`/api/jewelry/delete/${jewelryID}`);
        return response.data;
    } catch (error) {
        throw new Error('Failed to delete jewelry');
    }
}