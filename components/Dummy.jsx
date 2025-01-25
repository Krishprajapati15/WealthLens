import React from "react";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
} from "chart.js";
import { Doughnut, Bar } from "react-chartjs-2";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title
);

const Dummy = () => {
  const doughnutData = {
    labels: ["Grocery", "Food & Drink", "Shopping", "Transportation"],
    datasets: [
      {
        data: [48, 32, 13, 7],
        backgroundColor: ["#c5b3fb", "#b6e5d8", "#ffc6c7", "#fce8a6"],
        hoverBackgroundColor: ["#b99be7", "#9ed7c5", "#e3a9aa", "#efd986"],
      },
    ],
  };

  const barData = {
    labels: ["01", "02", "03", "04", "05", "06", "07"],
    datasets: [
      {
        label: "Food & Drink",
        data: [50, 60, 70, 80, 90, 100, 110],
        backgroundColor: "#fccb6e",
      },
      {
        label: "Grocery",
        data: [80, 70, 60, 50, 40, 30, 20],
        backgroundColor: "#94daaf",
      },
      {
        label: "Shopping",
        data: [40, 50, 60, 70, 80, 90, 100],
        backgroundColor: "#e3989c",
      },
      {
        label: "Transport",
        data: [20, 30, 40, 50, 60, 70, 80],
        backgroundColor: "#f4e19b",
      },
    ],
  };

  return (
    <div className="flex flex-col md:flex-row gap-4 bg-gray-50 p-4 min-h-screen">
      {/* Revenue Card */}
      <div className="bg-white shadow rounded p-4 w-full md:w-1/4">
        <h3 className="text-lg font-semibold">Revenue</h3>
        <p className="text-2xl font-bold mt-2">$1,278.45</p>
        <p className="text-sm text-green-500">▲ 2.1% vs last week</p>
      </div>

      {/* Weekly Expense Chart */}
      <div className="bg-white shadow rounded p-4 w-full md:w-1/3">
        <h3 className="text-lg font-semibold">Weekly Expense</h3>
        <Doughnut data={doughnutData} />
      </div>

      {/* Saving Goal */}
      <div className="bg-white shadow rounded p-4 w-full md:w-1/4">
        <h3 className="text-lg font-semibold">Saving Goal</h3>
        <div className="flex flex-col items-center">
          <p className="text-2xl font-bold mt-2">$1,052.98</p>
          <p className="text-sm text-gray-500">of $1,200</p>
        </div>
      </div>

      {/* Daily Expense Chart */}
      <div className="bg-white shadow rounded p-4 w-full">
        <h3 className="text-lg font-semibold">Daily Expense</h3>
        <Bar data={barData} />
      </div>
    </div>
  );
};

export default Dummy;
