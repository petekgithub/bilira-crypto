import axios from "axios";
import { Asset } from "../interfaces/Asset";

const apiUrl = process.env.REACT_APP_API_URL || ""; // API URL'sini .env dosyasından al

export const fetchAssets = async (): Promise<Asset[]> => {
  try {
    const response = await axios.get(`${apiUrl}/api/assets`); // api/assets yolunu kullanıyoruz
    return response.data;
  } catch (error) {
    console.error("Failed to fetch assets", error);
    throw error;
  }
};
