import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from "chart.js";
import React from "react";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Example Chart",
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

function BarChart() {
  return (
    <div className="p-3 w-96 h-96">
      <h1 className="text-2xl font-bold">Bar Chart</h1>
      <Bar options={options} data={data} />
    </div>
  );
}

export default BarChart;
