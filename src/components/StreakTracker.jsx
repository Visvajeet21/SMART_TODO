import React from "react";

export default function StreakTracker({ tasks }) {
  const completedToday = tasks.filter(
    (t) => t.completed && t.createdAt === new Date().toISOString().split("T")[0]
  ).length;

  return (
    <div className="container card streak">
      <h2>🔥 Daily Streak</h2>
      <p>
        You’ve completed <strong>{completedToday}</strong> tasks today!
      </p>
    </div>
  );
}
