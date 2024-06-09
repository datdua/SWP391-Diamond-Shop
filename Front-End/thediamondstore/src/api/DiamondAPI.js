import axios from 'axios';

export async function getAllDiamond() {
    const response = await axios.get('/api/diamonds');
    return response.data;
}

const BASE_URL = 'http://localhost:3000/api/diamonds';

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
        const response = await axios.get(`http://localhost:8080/api/diamonds/paged?page=${page}&size=${size}`);
        return response.data;
    } catch (error) {
        throw new Error('Failed to fetch jewelry by page');
    }
}

export async function searchDiamondByName(name) {
    try {
        const response = await axios.get(`/api/diamonds/search/filter?diamondNameLike=${name}`);
        if (response.status !== 200) {
            throw new Error('Failed to search diamonds by name');
        }
        const data = response.data;
        console.log("Diamond search results:", data);
        return data;
    } catch (error) {
        console.error('Error searching for diamonds:', error);
        throw error; 
    }
}


export const searchDiamond = async (filters, page = 1) => {
    try {
        const params = { ...filters, page };
        const queryString = Object.keys(params)
            .map(key => `${key}=${encodeURIComponent(params[key])}`)
            .join('&');

        const response = await axios.get(`http://localhost:8080/api/diamonds/search/filter?${queryString}`);
        if (response.status !== 200) {
            throw new Error('Failed to fetch diamonds');
        }
        return response.data;
    } catch (error) {
        throw new Error('Failed to fetch diamonds');
    }
};




