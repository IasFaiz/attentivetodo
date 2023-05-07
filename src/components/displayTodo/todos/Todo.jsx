import React from "react";
import "./todo.css";
import { Margin } from "@mui/icons-material";
import CreateModal from "../../ModalCreate/CreateModal";
import DeleteTodo from "../../ModalCreate/DeleteTodo";

export default function Todo({ e, deleted }) {
  // console.log(props, "from todo");
  return (
    <div className="todocontainer">
      <div className="todocontent">
        <p className="todotitle">{e.title}</p>
        <p className="tododescription">{e.description}</p>
      </div>
      <div className="todoactions">
        {deleted ? "" : <CreateModal id={e.id} edit={true} />}
        {deleted ? "" : <DeleteTodo id={e.id} />}
      </div>
    </div>
  );
}
