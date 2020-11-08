import React from "react";
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";
import { Border } from "./styledComponents";
import { ErrorBoundary } from "./ErrorBoundaries";

const data = [
  // sessions count for 29/10/2020
  {
    hour: "00:00",
    count: 12,
  },
  {
    hour: "01:00",
    count: 43,
  },
  {
    hour: "02:00",
    count: 7,
  },
  {
    hour: "03:00",
    count: 78,
  },
  {
    hour: "23:00",
    count: 54,
  },
];

export const ByHour: React.FC = () => {
  return (
    <Border borderColor="red">
      <ErrorBoundary>
        <h1>Line Chart By Hour</h1>
        <LineChart width={500} height={300} data={data}>
          <XAxis dataKey="hour" />
          <YAxis />
          <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
          <Line type="monotone" dataKey="count" stroke="#8884d8" />
        </LineChart>
      </ErrorBoundary>
    </Border>
  );
};
