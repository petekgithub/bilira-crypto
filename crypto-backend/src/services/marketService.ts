import axios from "axios";

export const getMarketData = async () => {
  try {
    const response = await axios.get(
      "https://api.binance.com/api/v3/ticker/24hr"
    );
    return response.data.map((asset: any) => ({
      name: asset.symbol,
      price: parseFloat(asset.lastPrice),
      marketValue: parseFloat(asset.quoteVolume),
      change24h: parseFloat(asset.priceChangePercent),
    }));
  } catch (error) {
    console.error("Error fetching market data:", error);
    throw error;
  }
};
