import "./App.css";
import Topbar from "./components/topbar/Topbar";
import TaskBoard from "./components/taskBoard/TaskBoard";
import DeletedTasks from "./components/Deletedtasks/DeletedTasks";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Topbar />
      <Routes>
        <Route path="/" element={<TaskBoard />} />
        <Route path="/DeletedTasks" element={<DeletedTasks />} />
      </Routes>
    </>
  );
}

export default App;
