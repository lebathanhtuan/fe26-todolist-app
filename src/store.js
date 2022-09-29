import { configureStore } from "@reduxjs/toolkit";

import taskReducer from "./redux/reducers/task.reducer";

export const store = configureStore({
  reducer: {
    task: taskReducer,
  },
});
