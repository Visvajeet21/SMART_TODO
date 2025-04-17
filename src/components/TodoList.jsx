import React, { useState } from "react";
import dayjs from "dayjs";

export default function TodoList({ tasks, setTasks }) {
  const [taskInput, setTaskInput] = useState("");
  const [priority, setPriority] = useState("Medium");

  const addTask = () => {
    if (!taskInput.trim()) return;
    const newTask = {
      id: Date.now(),
      title: taskInput,
      completed: false,
      priority,
      createdAt: dayjs().format("YYYY-MM-DD"),
    };
    setTasks([...tasks, newTask]);
    setTaskInput("");
    setPriority("Medium");
  };

  const toggleComplete = (id) => {
    setTasks(
      tasks.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  return (
    <div className="container card">
      <h2>Your To-Do List</h2>
      <div className="flex">
        <input
          type="text"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
          placeholder="Enter a task"
        />
        <select value={priority} onChange={(e) => setPriority(e.target.value)}>
          <option>High</option>
          <option>Medium</option>
          <option>Low</option>
        </select>
        <button onClick={addTask}>Add</button>
      </div>
      {tasks.map((task) => (
        <div
          key={task.id}
          className={`task ${task.completed ? "completed" : ""}`}
        >
          <div>
            <p>{task.title}</p>
            <p>Priority: {task.priority}</p>
          </div>
          <div>
            <button
              className="complete"
              onClick={() => toggleComplete(task.id)}
            >
              ✓
            </button>
            <button className="delete" onClick={() => deleteTask(task.id)}>
              ✕
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
