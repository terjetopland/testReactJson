import React from "react";
import { PieChart, Pie, Cell, XAxis, Tooltip, ResponsiveContainer, Label } from "recharts";

const data = [
  { name: "Group A", value: 100, thumbsUpOrDown: 'up' },
  { name: "Group B", value: 200, thumbsUpOrDown: 'down' },
  { name: "Group C", value: 300, thumbsUpOrDown: 'up' },
  { name: "Group D", value: 400, thumbsUpOrDown: 'up' },
  { name: "Group E", value: 500, thumbsUpOrDown: 'down' },
  { name: "Group F", value: 600, thumbsUpOrDown: 'up' }
  
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
const test = 't'

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
  
    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="middle"
        style={{fontSize: '15px'}}
        // className="rotateText45Deg"
        >
        {/* {`${(percent * 100).toFixed(0)}%`} */}
        {/* {data[index].thumbsUpOrDown} */}
        {test}
      </text>
    );
  };

export function Chart() {
  return (
    <PieChart width={500} height={500}>
      <Pie
        data={data}
        cx={250}
        cy={250}
        labelLine={false}
        label={renderCustomizedLabel}
        innerRadius={100}
        outerRadius={160}
        fill="#8884d8"
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]}/>
        ))}
      </Pie>
      <Tooltip/>
    </PieChart>
  );
}
