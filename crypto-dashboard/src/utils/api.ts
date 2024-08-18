import axios from "axios";
import { Asset } from "../interfaces/Asset";

const apiUrl = process.env.REACT_APP_API_URL || "";

export const fetchAssets = async (): Promise<Asset[]> => {
  try {
    const response = await axios.get(`${apiUrl}/api/assets`);
    const data = response.data.map((item: any) => {
      const name = item.name || "UnknownName"; // Örneğin: "TRXTRON"
      const symbol = name.slice(0, 3).toUpperCase(); // İlk 3 karakter sembol
      const fullName = name.slice(3); // Geri kalanı tam ad

      return {
        name, // "TRXTRON"
        symbol, // "TRX"
        fullName, // "TRON"
        iconUrl: item.iconUrl || "default_icon_url",
        price: item.price || 0,
        marketValue: item.marketValue || 0,
        change24h: item.change24h || 0,
      };
    });
    return data;
  } catch (error) {
    console.error("Failed to fetch assets", error);
    throw error;
  }
};
