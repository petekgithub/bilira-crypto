import { useEffect, useState } from "react";
import SparklineChart from "./SparklineChart";

interface Asset {
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
      setFlashColor("bg-green-100"); // Pozitif değişiklik için açık yeşil
    } else if (asset.price < previousPrice) {
      setFlashColor("bg-red-100"); // Negatif değişiklik için açık kırmızı
    }

    const timer = setTimeout(() => setFlashColor(null), 1000); // 1 saniye sonra renk sıfırlanır

    return () => clearTimeout(timer); // Bileşen kaldırıldığında timer'ı temizle
  }, [asset.price, previousPrice]);

  // Örnek veri, gerçek veri ile değiştirilmeli
  const sparklineData = Array.from({ length: 24 }, (_, index) => ({
    time: `${index}h`,
    value: Math.random() * 100, // Örnek değer, gerçek veri ile değiştirilmeli
  }));

  // Dinamik sınıf isimlerini belirlemek için koşul ifadelerini kullanın
  const changeColorClass =
    asset.change24h >= 0 ? "text-green-500" : "text-red-500";

  return (
    <tr className={`transition-all ${flashColor}`}>
      <td className="p-2 border-b border-gray-200">{asset.name}</td>
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
