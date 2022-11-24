import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import React from "react";
import { Line } from "react-chartjs-2";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  elements: {
    line: {
      tension: 0.4,
    },
  },
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Example Line Chart",
    },
  },
  scales: {
    y: {
      min: 0,
      max: 100,
    },
  },
};

const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];

const data = {
  labels,
  datasets: [
    {
      label: "Sample Dataset",
      data: [50, 30, 40, 30, 20, 50],
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
  ],
};

function LineChart() {
  return (
    <div className="p-3 w-96 h-96">
      <h1 className="text-2xl font-bold">Line Chart</h1>
      <Line options={options} data={data} />
    </div>
  );
}

export default LineChart;
