import { BarChart } from "@mui/x-charts/BarChart";

export function valueFormatter(value) {
  return `${value} sales`;
}

export const dataset = [
  { month: "Jan", actual: 21, projection: 40 },
  { month: "Feb", actual: 28, projection: 50 },
  { month: "Mar", actual: 41, projection: 60 },
  { month: "Apr", actual: 73, projection: 80 },
  { month: "May", actual: 99, projection: 120 },
  { month: "June", actual: 144, projection: 160 },
  { month: "July", actual: 319, projection: 340 },
  { month: "Aug", actual: 249, projection: 280 },
  { month: "Sept", actual: 131, projection: 150 },
  { month: "Oct", actual: 55, projection: 70 },
  { month: "Nov", actual: 48, projection: 65 },
  { month: "Dec", actual: 25, projection: 50 },
];

const chartSetting = {
  yAxis: [
    {
      min: 0,
      max: 800,
      tickMinStep: 50,
      valueFormatter: (value) => `$${value / 100}k`,
      tickLabelStyle: {
        fontSize: 12,
        fill: "#374151",
      },
    },
  ],
  series: [
    {
      dataKey: "actual",
      label: "Actual",
      color: "#9E13F3",
      stack: "total",
    },
    {
      dataKey: "projection",
      label: "Projection",
      color: "#E5E7EB",
      stack: "total",
    },
  ],
  height: 300,
  margin: { left: 0 },
  grid: {
    horizontal: true,
    vertical: false,
  },
};

const Chart = () => (
  <BarChart
    dataset={dataset}
    xAxis={[{ dataKey: "month" }]}
    {...chartSetting}
  />
);

export default Chart;
