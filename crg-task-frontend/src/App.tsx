import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Home from "./routes/Home"
import HomeBody from "./routes/Home/HomeBody"
import NotFound from "./routes/Home/NotFound"
import Task from "./routes/Home/Task"
import About from "./routes/Home/About"
import TaskDetails from "./routes/Home/TaskDetails"
import TaskForm from "./routes/Home/TaskForm"


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} >
          <Route index element={<Navigate to="/home" />} />
          <Route path="home" element={<HomeBody />} />
          <Route path="tasks" element={<Task />} />
          <Route path="task-details/:taskId" element={<TaskDetails />} />
          <Route path="about" element={<About />} />
          <Route path="task/create" element={<TaskForm />} />
          <Route path="task/edit/:taskId" element={<TaskForm />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App