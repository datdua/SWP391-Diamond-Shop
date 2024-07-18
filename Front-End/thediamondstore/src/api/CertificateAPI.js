import axios from "axios";

export const getAllCertificates = async () => {
  try {
    const token = localStorage.getItem("jwt");
    const response = await axios.get("http://localhost:3000/api/certificates/get-all",
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching certificates:", error);
    throw error;
  }
};

export const getCertificateById = async (certificateId) => {
  try {
    const token = localStorage.getItem("jwt");
    const response = await axios.get(
      `http://localhost:8080/api/certificates/get-by-id/${certificateId}`,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching certificate by ID:", error);
    throw error;
  }
};

export const createCertificate = async (certificate) => {
  try {
    const token = localStorage.getItem("jwt");
    const response = await axios.post(
      "http://localhost:8080/api/managers/certificate-management/certificates/add",
      certificate,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error creating certificate:", error);
    throw error;
  }
};

export const updateCertificate = async (certificateId, certificate) => {
  try {
    const token = localStorage.getItem("jwt");
    const response = await axios.put(
      `http://localhost:8080/api/managers/certificate-management/certificates/update/${certificateId}`,
      certificate,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error updating certificate:", error);
    throw error;
  }
};


export async function deleteCertificate(certificateIDs) {
  try {
    const token = localStorage.getItem("jwt");
    const response = await axios.delete("http://localhost:8080/api/managers/certificate-management/certificates/delete", 
      { 
        headers: { Authorization: `Bearer ${token}` },
        data: certificateIDs
       }
    );
    return response.data;
  } catch (error) {
    throw new Error("Failed to delete accounts");
  }
}

export const getCertificateImage = async (certificationID) => {
  try {
    const token = localStorage.getItem("jwt");
    const response = await axios.get(
      `http://localhost:8080/api/certificates/get-certificate-image/${certificationID}`,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching certificate image:", error);
    throw error;
  }
};

export const getCertificateByPage = async (page = 1, size = 9) => {
  try {
    const token = localStorage.getItem("jwt");
    const response = await axios.get(
      `http://localhost:8080/api/certificates/get-paging?page=${page}&size=${size}`,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching certificate by page:", error);
    throw error;
  }
};
