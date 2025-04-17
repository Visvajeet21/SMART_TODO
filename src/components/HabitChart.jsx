import React from "react";
import { Bar } from "react-chartjs-2";
import dayjs from "dayjs";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

export default function HabitChart({ tasks }) {
  const dateMap = {};
  tasks.forEach((t) => {
    if (t.completed) {
      dateMap[t.createdAt] = (dateMap[t.createdAt] || 0) + 1;
    }
  });

  const labels = Object.keys(dateMap).slice(-7);
  const data = {
    labels,
    datasets: [
      {
        label: "Tasks Completed",
        data: labels.map((date) => dateMap[date] || 0),
        backgroundColor: "#3182ce",
      },
    ],
  };

  return (
    <div className="container card chart-container">
      <h2>📈 Habit Trends (Last 7 Days)</h2>
      <Bar data={data} />
    </div>
  );
}
