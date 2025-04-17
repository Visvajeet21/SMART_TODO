import React, { useState, useEffect } from "react";
import TodoList from "./components/TodoList";
import StreakTracker from "./components/StreakTracker";
import HabitChart from "./components/HabitChart";
import SmartSuggestions from "./components/SmartSuggestions";
import "./App.css";
export default function App() {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    const saved = localStorage.getItem("tasks");
    if (saved) setTasks(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">
        Smart To-Do with Insights
      </h1>
      <TodoList tasks={tasks} setTasks={setTasks} />
      <StreakTracker tasks={tasks} />
      <SmartSuggestions tasks={tasks} />
      <HabitChart tasks={tasks} />
    </div>
  );
}
