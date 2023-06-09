import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { Link } from "react-router-dom";
import "./topbar.css";
export default function Topbar() {
  return (
    <div className="topbarcontainer">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Link to="/">
                <IconButton
                  size="small"
                  edge="start"
                  style={{ color: "white" }}
                  aria-label="menu"
                  sx={{ mr: 2 }}
                >
                  Task Board
                </IconButton>
              </Link>
            </Typography>
            <Link to="/DeletedTasks">
              <IconButton
                size="small"
                edge="start"
                style={{ color: "white" }}
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                Deleted tasks
              </IconButton>
            </Link>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}
