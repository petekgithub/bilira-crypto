import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";
import React from "react";

interface SparklineChartProps {
  data: { time: string; value: number }[];
  color: string;
}

const SparklineChart = ({ data, color }: SparklineChartProps) => {
  return (
    <div className="w-full h-10">
      <LineChart
        width={100}
        height={40}
        data={data}
        margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis hide />
        <YAxis hide />
        <Tooltip />
        <Line type="monotone" dataKey="value" stroke={color} dot={false} />
      </LineChart>
    </div>
  );
};

export default SparklineChart;
