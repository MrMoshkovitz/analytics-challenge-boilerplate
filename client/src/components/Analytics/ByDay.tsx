import React from "react";
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";
import { Border } from "./styledComponents";
import { ErrorBoundary } from "./ErrorBoundaries";

const data = [
  {
    date: "24/10/2020",
    count: 12,
  },
  {
    date: "25/10/2020",
    count: 43,
  },
  {
    date: "26/10/2020",
    count: 7,
  },
  {
    date: "30/10/2020",
    count: 78,
  },
];

export const ByDay: React.FC = () => {
  return (
    <Border borderColor="blue">
      <ErrorBoundary>          
        <h1>Line Chart By Day</h1>
        <LineChart width={500} height={300} data={data}>
          <XAxis dataKey="date" />
          <YAxis />
          <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
          <Line type="monotone" dataKey="count" stroke="#8884d8" />
        </LineChart>
      </ErrorBoundary>
    </Border>
  );
};
