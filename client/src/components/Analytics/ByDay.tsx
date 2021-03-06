import React, { useState, useEffect } from "react";
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";
import { Border } from "./styledComponents";
import { ErrorBoundary } from "./ErrorBoundaries";

const url = (offset: number) => {
  return `http://localhost:3001/events/by-days/${offset}`;
};
// const data = [
//   {
//     date: "24/10/2020",
//     count: 12,
//   },
//   {
//     date: "25/10/2020",
//     count: 43,
//   },
//   {
//     date: "26/10/2020",
//     count: 7,
//   },
//   {
//     date: "30/10/2020",
//     count: 78,
//   },
// ];

export type ByDayProps = {
  date: string;
  count: number;
}[];

export const ByDay: React.FC = () => {
  const [data, setData] = useState<ByDayProps>([]);

  useEffect(() => {
    fetch(url(25))
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setData(res);
        console.log(data);
      });
  }, []);

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
