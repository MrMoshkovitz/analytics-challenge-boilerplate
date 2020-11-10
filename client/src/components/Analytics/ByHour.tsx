import React, { useState, useEffect } from "react";
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";
import { Border } from "./styledComponents";
import { ErrorBoundary } from "./ErrorBoundaries";



const url = (offset: number) => {
  return `http://localhost:3001/events/by-hours/${offset}`;
};


export type ByHourProps = {
  date: string;
  count: number;
}[];



export const ByHour: React.FC = () => {
  const [data, setData] = useState<ByHourProps>([]);
  useEffect(() => {
    fetch(url(25))
      .then((res) => res.json())
      .then((res) => {
        setData(res);
      });
  }, []);
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
