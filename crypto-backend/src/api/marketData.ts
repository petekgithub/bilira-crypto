import axios from "axios";

const BINANCE_API_URL = "https://api.binance.com/api/v3";

export const fetchMarketData = async () => {
  try {
    const response = await axios.get(`${BINANCE_API_URL}/ticker/24hr`);
    return response.data;
  } catch (error) {
    console.error("Error fetching market data from Binance:", error);
    throw error;
  }
};
