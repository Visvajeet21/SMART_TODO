import React, { useEffect, useState } from "react";

export default function SmartSuggestions({ tasks }) {
  const [suggestion, setSuggestion] = useState("");

  useEffect(() => {
    const completedTasks = tasks.filter((t) => t.completed);
    const highPriority = tasks.filter(
      (t) => t.priority === "High" && !t.completed
    );

    const today = new Date().toISOString().split("T")[0];
    const todayTasks = completedTasks.filter((t) => t.createdAt === today);

    if (todayTasks.length === 0) {
      setSuggestion(
        "No completed tasks today. Try finishing at least one for your streak!"
      );
    } else if (highPriority.length >= 2) {
      setSuggestion(
        "You have several high-priority tasks pending. Let's knock them out!"
      );
    } else if (completedTasks.length >= 5) {
      setSuggestion("Great productivity! Want to schedule a recurring task?");
    } else {
      setSuggestion("Keep going! You're doing great.");
    }
  }, [tasks]);

  return (
    <div className="container card suggestions">
      <h2>🤖 Smart Suggestion</h2>
      <p>{suggestion}</p>
    </div>
  );
}
