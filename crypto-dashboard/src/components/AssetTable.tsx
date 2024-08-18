import React, { Component } from "react";
import TableRow from "./TableRow";
import { Asset } from "../interfaces/Asset";

type AssetTableProps = {
  assets: Asset[];
  previousPrices: { [key: string]: number };
};

class AssetTable extends Component<AssetTableProps> {
  render() {
    const { assets, previousPrices } = this.props;

    return (
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="p-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Crypto
            </th>
            <th className="p-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Price
            </th>
            <th className="p-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Market Value
            </th>
            <th className="p-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              24h Change
            </th>
            <th className="p-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Sparkline
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {assets.map((asset) => (
            <TableRow
              key={asset.symbol} // Ensure 'asset.symbol' is unique or use a combination for uniqueness
              asset={asset}
              previousPrice={previousPrices[asset.symbol] ?? 0} // Default value for missing previous price
            />
          ))}
        </tbody>
      </table>
    );
  }
}

export default AssetTable;
