"use client";

import { TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "A multiple bar chart";

const chartData = [
  { month: "January", desktop: 186, mobile: 80, tablet: 120 },
  { month: "February", desktop: 305, mobile: 200, tablet: 250 },
  { month: "March", desktop: 237, mobile: 120, tablet: 180 },
  { month: "April", desktop: 73, mobile: 190, tablet: 140 },
  { month: "May", desktop: 209, mobile: 130, tablet: 170 },
  { month: "June", desktop: 214, mobile: 140, tablet: 200 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "var(--chart-3)",
  },
  mobile: {
    label: "Mobile",
    color: "var(--chart-5)",
  },
  tablet: {
    label: "Tablet",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig;

export function ChartC() {
  return (
    <ChartContainer className="h-[300px] w-full" config={chartConfig}>
      <BarChart accessibilityLayer data={chartData}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="month"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent indicator="dashed" />}
        />
        <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
        <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
        <Bar dataKey="tablet" fill="var(--color-tablet)" radius={4} />
      </BarChart>
    </ChartContainer>
  );
}
