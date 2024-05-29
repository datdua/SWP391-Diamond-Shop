// CartAPI.js
import axios from 'axios';

export const addToCart = async (accountId, diamondId, quantity) => {
    const response = await axios.post(`http://localhost:8080/api/cart/add?accountID=${accountId}&jewelryID=${diamondId}&quantity=${quantity}`);
    return response.data;
};
export async function getAllDiamond() {
    const response = await axios.get('http://localhost:8080/api/diamonds');
    return response.data;
}

export async function getDiamondById(diamondId) {
    try {
        const response = await axios.get(`http://localhost:8080/api/jewelry/${diamondId}`);
        return response.data;
    } catch (error) {
        throw new Error('Failed to fetch jewelry by ID');
    }
}
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
        const response = await axios.get(`http://localhost:8080/api/diamonds/search/filter?diamondNameLike=${name}`);
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
export async function searchDiamondByColor(color) {
    const response = await axios.get(`http://localhost:8080/api/diamonds/search/filter?color=${color}`);
    if (!response.ok) {
        throw new Error('Failed to search jewelry by color');
    }
    const data = await response.json();
    return data;
}
export async function searchDiamondByCut(cut) {
    const response = await axios.get(`http://localhost:8080/api/diamonds/search/filter?cut=${cut}`);
    if (!response.ok) {
        throw new Error('Failed to search jewelry by cut');
    }
    const data = await response.json();
    return data;
}
export async function searchDiamondByCarat(maxCarat, minCarat) {
    const response = await axios.get(`http://localhost:8080/api/diamonds/search/filter?maxCaratSize=${maxCarat}&minCaratSize=${minCarat}`);
    if (!response.ok) {
        throw new Error('Failed to search jewelry by carat');
    }
    const data = await response.json();
    return data;
}
export async function searchDiamondByPrice(maxDiamondPrice, minDiamondPrice) {
    const response = await axios.get(`http://localhost:8080/api/diamonds/search/filter?maxDiamondPrice=${maxDiamondPrice}&minDiamondPrice=${minDiamondPrice}`);
    if (!response.ok) {
        throw new Error('Failed to search jewelry by price');
    }
    const data = await response.json();
    return data;
}
export async function searchDiamondByCaratSize(maxCaratSize, minCaratSize) {
    const response = await axios.get(`http://localhost:8080/api/diamonds/search/filter?maxCaratSize=${maxCaratSize}&minCaratSize=${minCaratSize}`);
    if (!response.ok) {
        throw new Error('Failed to search jewelry by carat size');
    }
    const data = await response.json();
    return data;
}
export async function searchDiamondByOrigin(origin) {
    const response = await axios.get(`http://localhost:8080/api/diamonds/search/filter?origin=${origin}`);
    if (!response.ok) {
        throw new Error('Failed to search jewelry by origin');
    }
    const data = await response.json();
    return data;
}
export async function searchDiamondByCaratShape(shape) {
    const response = await axios.get(`http://localhost:8080/api/diamonds/search/filter?shape=${shape}`);
    if (!response.ok) {
        throw new Error('Failed to search jewelry by price');
    }
    const data = await response.json();
    return data;
}










