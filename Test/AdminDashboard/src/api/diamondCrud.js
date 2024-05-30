import axios from 'axios';

export async function getAllDiamond() {
    const response = await axios.get('http://localhost:8080/api/diamonds');
    if (response.status !== 200) {
        throw new Error('Failed to fetch diamond data');
    }
    return response.data;
}

export async function getDiamondById(diamondId) {
    try {
        const response = await axios.get(`http://localhost:8080/api/diamonds/${diamondId}`);
        return response.data;
    } catch (error) {
        throw new Error('Failed to fetch diamond by ID');
    }
}
export async function getPage(page = 1, size = 9) {
    try {
        const response = await axios.get(`http://localhost:8080/api/diamonds/paged?page=${page}&size=${size}`);
        return response.data;
    } catch (error) {
        throw new Error('Failed to fetch diamond by page');
    }
}
export async function searchJewelryByGender(gender) {
    try {
        const response = await axios.get(`http://localhost:8080/api/jewelry/search/filter?gender=%20${encodeURIComponent(gender)}`);
        return response.data;
    } catch (error) {
        throw new Error('Failed to filter jewelry by gender');
    }
}

export async function createDiamond(diamond) {
    try {
        const response = await axios.post('http://localhost:8080/api/diamonds/create', diamond);
        return response.data;
    } catch (error) {
        throw new Error('Failed to create jewelry');
    }
}

export async function updateDiamond(diamondID, diamond) {
    try {
        const response = await axios.put(`http://localhost:8080/api/diamonds/update/${diamondID}`, diamond);
        return response.data;
    } catch (error) {
        throw new Error('Failed to update Diamond');
    }
}

export async function deleteDiamond(diamondId) {
    try {
        const response = await axios.delete(`http://localhost:8080/api/diamonds/delete/${diamondId}`);
        return response.data;
    } catch (error) {
        throw new Error('Failed to delete diamond');
    }
}