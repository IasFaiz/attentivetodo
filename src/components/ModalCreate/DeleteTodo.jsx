import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import useStore from "../../zustand/Zustand";

export default function DeleteTodo(props) {
  const { tasks, editState } = useStore();
  const handleDelete = () => {
    let temp = tasks;
    temp[props.id - 1].status = "4";
    editState(temp);
    console.log(tasks, "from delete");
  };
  return (
    <div>
      <DeleteIcon
        onClick={handleDelete}
        style={{ color: "#212121", margin: "5px" }}
      />
    </div>
  );
}
