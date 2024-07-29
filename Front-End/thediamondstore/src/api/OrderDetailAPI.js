import axios from "axios";


export const getAllOrderDetail = async () => {
    const token = localStorage.getItem("jwt");
    try {
        const response = await axios.get("http://localhost:8080/api/orderDetail-management/orderDetails/get-all",
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );
        return response.data;
    } catch (error) {
        console.error("Error fetching order details:", error);
        throw error;
    }
}

export const getOrderDetailById = async (orderDetailID) => {
    const token = localStorage.getItem("jwt");
    try {
        const response = await axios.get(`http://localhost:8080/api/orderDetail-management/orderDetails/${orderDetailID}`,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );
        return response.data;
    } catch (error) {
        console.error("Error fetching order details:", error);
        throw error;
    }
}

export const getWarrantyByOrderDetailId = async (orderDetailID) => {
    const token = localStorage.getItem("jwt");
    try {
        const response = await axios.get(`http://localhost:8080/api/orderDetail-management/orderDetails/warrantyHistories/${orderDetailID}`,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );
        return response.data;
    } catch (error) {
        console.error("Error fetching warranty:", error);
        throw error;
    }
}