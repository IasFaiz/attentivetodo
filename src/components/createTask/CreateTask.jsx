import React, { useState } from "react";
import "./CreateTask.css";

import CreateModal from "../ModalCreate/CreateModal";

export default function CreateTask() {
  const [todos, settodos] = useState([]);

  const handlesettodo = (obj) => {
    settodos([obj, ...todos]);
  };
  // console.log(todos, "from createtask");
  return (
    <div className="createtask ">
      <CreateModal edit={false} />
    </div>
  );
}
