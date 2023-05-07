import React from "react";
import "./DletedTask.css";
import DisplayTodo from "../displayTodo/DisplayTodo";

export default function DeletedTasks() {
  return (
    <div className="DeletedTasks">
      <DisplayTodo status="4" heading="Deleted tasks" deleted={true} />
    </div>
  );
}
