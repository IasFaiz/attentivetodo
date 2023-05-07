import React from "react";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import EditIcon from "@mui/icons-material/Edit";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import { FormControl, FormLabel } from "@mui/material";
import useStore from "../../zustand/Zustand";
const style = {
  position: "absolute",
  top: "45%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#FFFFCC",
  border: "2px solid #f0f",
  boxShadow: 24,
  p: 4,
};

export default function CreateModal(props) {
  const { tasks, updateState, editState } = useStore();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [status, setstatus] = React.useState(
    props.edit ? tasks[props.id - 1].status : ""
  );
  const [assignee, setAssignee] = React.useState(
    props.edit ? tasks[props.id - 1].assignee : ""
  );
  const [title, settitle] = React.useState(
    props.edit ? tasks[props.id - 1].title : ""
  );
  const [description, setdescription] = React.useState(
    props.edit ? tasks[props.id - 1].description : ""
  );
  const handleChange1 = (event) => {
    setAssignee(event.target.value);
  };
  const handleChange2 = (event) => {
    setstatus(event.target.value);
  };
  const handleChange3 = (event) => {
    settitle(event.target.value);
  };
  const handleChange4 = (event) => {
    setdescription(event.target.value);
  };
  const handleSubmit = (event) => {
    let obj = {
      id: tasks.length + 1,
      status: status,
      assignee: assignee,
      title: title,
      description: description,
    };
    updateState(obj);
    setstatus("");
    setAssignee("");
    settitle("");
    setdescription("");
  };

  //************************AMBIGUOUS FUNCTIONS**************************************** */

  const handleEdit = (event) => {
    let temp = tasks;
    let obj = {
      id: tasks[props.id - 1].id,
      status: status,
      assignee: assignee,
      title: title,
      description: description,
    };
    temp[props.id - 1] = obj;
    console.log(temp, "temp value");

    // updateState(obj);
    editState(temp);
    setstatus("");
    setAssignee("");
    settitle("");
    setdescription("");
  };

  return (
    <div className="createtask ">
      <div className="createtaskcontainer">
        {props.edit ? (
          <EditIcon
            style={{ color: "#212121", margin: "5px" }}
            onClick={handleOpen}
          />
        ) : (
          <Button onClick={handleOpen}>Create</Button>
        )}

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            {props.edit ? (
              <FormLabel>Edit Todo</FormLabel>
            ) : (
              <FormLabel>Add New Todo</FormLabel>
            )}

            <FormControl fullWidth>
              <InputLabel id="assignee">Assignee</InputLabel>
              <Select
                labelId="assignee"
                id="selectAssignee"
                value={assignee}
                label="Assignee"
                onChange={handleChange1}
              >
                <MenuItem value={1}>Assignee 1</MenuItem>
                <MenuItem value={2}>Assignee 2</MenuItem>
                <MenuItem value={3}>Assignee 3</MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth>
              <InputLabel id="todostatus">Status</InputLabel>
              <Select
                labelId="todostatus"
                id="todostatus"
                value={status}
                label="status"
                onChange={handleChange2}
              >
                <MenuItem value={"1"}>To Do</MenuItem>
                <MenuItem value={"2"}>In-Progress</MenuItem>
                <MenuItem value={"3"}>Finished</MenuItem>
              </Select>
              <TextField
                label="Title "
                labelId="todotitle"
                id="todotitle"
                value={title}
                onChange={handleChange3}
              ></TextField>
              <TextField
                label="Description"
                labelId="description"
                id="description"
                value={description}
                onChange={handleChange4}
              ></TextField>
              {props.edit ? (
                <Button variant="contained" onClick={handleEdit}>
                  Edit
                </Button>
              ) : (
                <Button variant="contained" onClick={handleSubmit}>
                  Create
                </Button>
              )}
            </FormControl>
          </Box>
        </Modal>
      </div>
    </div>
  );
}
