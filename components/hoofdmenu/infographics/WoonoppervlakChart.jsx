"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { jaar: "2011", "0-40": 1780, "40-60": 3111, "60-80": 563, "80-100": 146, "100+": 89 },
  { jaar: "2012", "0-40": 1765, "40-60": 3067, "60-80": 723, "80-100": 155 , "100+": 89},
  { jaar: "2013", "0-40": 1721, "40-60": 3099, "60-80": 774, "80-100": 165 , "100+": 89},
  { jaar: "2014", "0-40": 1586, "40-60": 3131, "60-80": 825, "80-100": 161 , "100+": 89},
  { jaar: "2015", "0-40": 1573, "40-60": 3122, "60-80": 883, "80-100": 165 , "100+": 89},
  { jaar: "2016", "0-40": 1587, "40-60": 10178, "60-80": 930, "80-100": 167 , "100+": 89},
  { jaar: "2017", "0-40": 1551, "40-60": 10253, "60-80": 966, "80-100": 176 , "100+": 89},
  { jaar: "2018", "0-40": 1540, "40-60": 10279, "60-80": 1022, "80-100": 173 , "100+": 89},
  { jaar: "2019", "0-40": 1538, "40-60": 10124, "60-80": 1081, "80-100": 172 , "100+": 89},
  { jaar: "2020", "0-40": 1517, "40-60": 10058, "60-80": 1132, "80-100": 177 , "100+": 89},
  { jaar: "2021", "0-40": 1505, "40-60": 9883, "60-80": 1180, "80-100": 192 , "100+": 89},
  { jaar: "2022", "0-40": 1504, "40-60": 9921, "60-80": 1253, "80-100": 192 , "100+": 89},
  { jaar: "2023", "0-40": 1659, "40-60": 10003, "60-80": 1296, "80-100": 206 , "100+": 89},
  { jaar: "2024", "0-40": 1656, "40-60": 10004, "60-80": 1390, "80-100": 207 , "100+": 89},
];

const chartConfig = {
  "0-40": {
    label: "0-40",
    color: "#713f12",
  },
  "40-60": {
    label: "40-60",
    color: "#a16207",
  },
  "60-80": {
    label: "60-80",
    color: "#ca8a04",
  },
  "80-100": {
    label: "80-100",
    color: "orange",
  },
  "100+": {
    label: "100+",
    color: "yellow",
  },
};

export function Woonoppervlak() {
  return (
    <Card className="mt-4 max-w-full px-4">
      <CardHeader className="mb-4 w-full border-b border-gray-400 px-0 py-4 text-lg text-yellow-900">
        <CardTitle>Verdeling woonoppervlak</CardTitle>
        <CardDescription>2011 - 2024</CardDescription>
      </CardHeader>
      <CardContent className="px-2 pb-0">
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid
              stroke="lightgray"
              strokeDasharray="3 3"
              vertical={false}
            />
            <XAxis
              dataKey="jaar"
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => value.slice(2)}
            />

            <ChartTooltip content={<ChartTooltipContent hideLabel />} />
            <ChartLegend content={<ChartLegendContent />} className="p-1" />
            <Bar
              dataKey="0-40"
              stackId="a"
              fill="#713f12"
              radius={[0, 0, 0, 0]}
            />
            <Bar
              dataKey="40-60"
              stackId="a"
              fill="#a16207"
              radius={[0, 0, 0, 0]}
            />
            <Bar
              dataKey="60-80"
              stackId="a"
              fill="#ca8a04"
              radius={[0, 0, 0, 0]}
            />
            <Bar
              dataKey="80-100"
              stackId="a"
              fill="orange"
              radius={[0, 0, 0, 0]}
            />
            <Bar dataKey="100+" stackId="a" fill="red" radius={[0, 0, 0, 0]} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex items-start border-t border-black pl-0 pt-4 text-sm">
        <div className="text-gray-500">
          Bron: onderzoek & statistiek Gemeente Amsterdam
        </div>
      </CardFooter>
    </Card>
  );
}
