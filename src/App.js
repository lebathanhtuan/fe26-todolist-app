import { Routes, Route, Navigate } from "react-router-dom";

import TaskListPage from "./pages/TaskListPage";
import CreateTaskPage from "./pages/CreateTaskPage";
import UpdateTaskPage from "./pages/UpdateTaskPage";

import { ROUTES } from "./constants/routes";

function App() {
  return (
    <>
      <Routes>
        <Route
          path={ROUTES.HOME}
          element={<Navigate to={ROUTES.TASK_LIST} />}
        />
        <Route path={ROUTES.TASK_LIST} element={<TaskListPage />} />
        <Route path={ROUTES.CREATE_TASK} element={<CreateTaskPage />} />
        <Route path={ROUTES.UPDATE_TASK} element={<UpdateTaskPage />} />
      </Routes>
    </>
  );
}

export default App;
