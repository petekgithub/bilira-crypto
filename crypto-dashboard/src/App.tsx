import { useState, useEffect } from "react";
import AssetTable from "./components/AssetTable";
import { fetchAssets } from "./utils/api";
import { Asset } from "./interfaces/Asset";

const App = () => {
  const [assets, setAssets] = useState<Asset[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchAssets();
        console.log("Fetched assets:", data); 
        setAssets(data);
      } catch (err) {
        setError("Failed to fetch assets");
      }
    };

    fetchData();
    const intervalId = setInterval(fetchData, 60000);

    return () => clearInterval(intervalId);
  }, []);

  // Dummy data for previousPrices, replace with real data
  const previousPrices = assets.reduce((acc, asset) => {
    acc[asset.symbol] = asset.price; // Önceki fiyatları sakla
    return acc;
  }, {} as { [key: string]: number });

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">Crypto Asset Data</h1>
      {error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <AssetTable assets={assets} previousPrices={previousPrices} />
      )}
    </div>
  );
};

export default App;