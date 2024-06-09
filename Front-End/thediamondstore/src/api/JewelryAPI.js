import axios from "axios";

export async function getAllJewelry() {
    const response = await axios.get('/api/jewelry');
    if (!response.ok) {
        throw new Error('Failed to fetch jewelry data');
    }
    const data = await response.json();
    return data;
}
export async function searchJewelryByName(name) {
    try {
        const response = await axios.get(`/api/jewelry/search/filter?jewelryName=${name}`);
        console.log(response.data); // Log the response data
        return response.data;
    } catch (error) {
        throw new Error('Failed to search jewelry by name');
    }
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
export async function searchJewelry(filters) {
    try {
        const response = await axios.get('/api/jewelry/search/filter', {
            params: filters
        });

        if (response.status !== 200) {
            throw new Error('Failed to fetch jewelry');
        }

        return response.data;
    } catch (error) {
        console.error('Error searching for jewelry:', error);
        throw new Error('Failed to fetch jewelry');
    }
}



