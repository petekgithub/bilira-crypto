import { useEffect, useState } from "react";
import SparklineChart from "./SparklineChart";

interface Asset {
  symbol: string; // Added symbol field
  name: string;
  price: number;
  marketValue: number;
  change24h: number;
}

interface TableRowProps {
  asset: Asset;
  previousPrice: number;
}

const TableRow = ({ asset, previousPrice }: TableRowProps) => {
  const [flashColor, setFlashColor] = useState<string | null>(null);

  useEffect(() => {
    if (asset.price > previousPrice) {
      setFlashColor("bg-green-100"); // Positive change color
    } else if (asset.price < previousPrice) {
      setFlashColor("bg-red-100"); // Negative change color
    }

    const timer = setTimeout(() => setFlashColor(null), 1000); // Reset color after 1 second

    return () => clearTimeout(timer); // Clear timer on component unmount
  }, [asset.price, previousPrice]);

  // Sample data for sparkline
  const sparklineData = Array.from({ length: 24 }, (_, index) => ({
    time: `${index}h`,
    value: Math.random() * 100, // Example value, replace with real data
  }));

  // Determine color class for change
  const changeColorClass =
    asset.change24h >= 0 ? "text-green-500" : "text-red-500";

  return (
    <tr className={`transition-all ${flashColor}`}>
      <td className="p-2 border-b border-gray-200">
        {asset.symbol} / USDT {/* Display symbol with /USDT */}
      </td>
      <td className="p-2 border-b border-gray-200">{asset.price.toFixed(2)}</td>
      <td className="p-2 border-b border-gray-200">
        {asset.marketValue.toFixed(2)}
      </td>
      <td className={`p-2 border-b border-gray-200 ${changeColorClass}`}>
        {asset.change24h.toFixed(2)}%
      </td>
      <td className="p-2 border-b border-gray-200">
        <SparklineChart
          data={sparklineData}
          color={asset.change24h >= 0 ? "green" : "red"}
        />
      </td>
    </tr>
  );
};

export default TableRow;
