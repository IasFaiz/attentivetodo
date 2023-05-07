import React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./filters.css";
import useStore from "../../../zustand/Zustand";
import { FormControl, FormLabel } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

export default function Filters() {
  const { tasks, search, setSearch } = useStore();
  const [assignee, setassignee] = useState("");
  const [searchstr, setsearchstr] = useState("");

  const [filteredList, setFilteredList] = new useState(tasks);
  const filterBySearch1 = (event) => {
    const query = event.target.value;
    setSearch(query);
    setsearchstr(query);
  };
  const filterBySearch2 = (event) => {
    const query = event.target.value;
    setassignee(query);
    setSearch(query);
  };
  const handleCleare = () => {
    setassignee("");
    setSearch("");
    setsearchstr("");
  };

  return (
    <div>
      <div className="searchfilters">
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "450px" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="outlined-basic"
            label="Search for a task"
            variant="outlined"
            onChange={filterBySearch1}
            value={searchstr}
          />
          <FormControl fullWidth>
            <InputLabel id="assignee">Assignee</InputLabel>
            <Select
              labelId="assignee"
              id="selectAssignee"
              value={assignee}
              label="Assignee"
              onChange={filterBySearch2}
            >
              <MenuItem value={1}>Assignee 1</MenuItem>
              <MenuItem value={2}>Assignee 2</MenuItem>
              <MenuItem value={3}>Assignee 3</MenuItem>
            </Select>
          </FormControl>
          <Button
            variant="contained"
            size="medium"
            onClick={handleCleare}
            style={{ maxWidth: "120px", maxHeight: "35px", margin: "20px" }}
          >
            Clear
          </Button>
        </Box>
      </div>
    </div>
  );
}
