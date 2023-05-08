import React, { useState } from "react";
import "./displaytodo.css";
import useStore from "../../zustand/Zustand";
import Todo from "./todos/Todo";

export default function DisplayTodo(props) {
  const { tasks, search, updateState } = useStore();
  // console.log(search, "from display");
  return (
    <div className="todoscontainer">
      <div className="todocontainerheading">{props.heading}</div>
      <div className="todoslist">
        {search
          ? typeof search === "string"
            ? tasks
                .filter((item) => {
                  return (
                    item.title.toLowerCase().indexOf(search.toLowerCase()) !==
                    -1
                  );
                })
                .filter((e) => e.status === props.status)
                .map((e, idx) => (
                  <Todo e={e} key={idx} id={idx} deleted={props.deleted} />
                ))
            : tasks
                .filter((item) => {
                  return item.assignee === search;
                })
                .filter((e) => e.status === props.status)
                .map((e, idx) => (
                  <Todo e={e} key={idx} id={idx} deleted={props.deleted} />
                ))
          : tasks
              .filter((e) => e.status === props.status)
              .map((e, idx) => (
                <Todo e={e} key={idx} id={idx} deleted={props.deleted} />
              ))}
      </div>
    </div>
  );
}
