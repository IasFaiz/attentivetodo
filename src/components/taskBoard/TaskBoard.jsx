import React from "react";
import "./TaskBoard.css";

import DisplayTodo from "../displayTodo/DisplayTodo";
import { Filter } from "@mui/icons-material";
import Filters from "./filters/Filters";
import CreateTask from "../createTask/CreateTask";

export default function TaskBoard() {
  return (
    <div className="taskboard">
      <CreateTask />
      <Filters />
      <div className="displaytodod">
        <DisplayTodo status="1" heading="Todo" />
        <DisplayTodo status="2" heading="In-progress" />
        <DisplayTodo status="3" heading="completed" />
      </div>
    </div>
  );
}
