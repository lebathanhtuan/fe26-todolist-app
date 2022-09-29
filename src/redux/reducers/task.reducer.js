import { createReducer } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

import { TASK_ACTION } from "../constants";

const initialState = {
  taskList: JSON.parse(localStorage.getItem("taskList")) || [],
};

const taskReducer = createReducer(initialState, {
  [TASK_ACTION.CREATE_TASK]: (state, action) => {
    const { data } = action.payload;
    const newTask = {
      id: uuidv4(),
      ...data,
    };
    const newTaskList = [newTask, ...state.taskList];
    localStorage.setItem("taskList", JSON.stringify(newTaskList));
    return {
      ...state,
      taskList: newTaskList,
    };
  },
  [TASK_ACTION.UPDATE_TASK]: (state, action) => {
    const { id, data } = action.payload;
    const newTask = {
      id: id,
      ...data,
    };
    const newTaskList = [...state.taskList];
    const index = newTaskList.findIndex((item) => item.id === id);
    newTaskList.splice(index, 1, newTask);
    localStorage.setItem("taskList", JSON.stringify(newTaskList));
    return {
      ...state,
      taskList: newTaskList,
    };
  },
  [TASK_ACTION.DELETE_TASK]: (state, action) => {
    const { id } = action.payload;
    const newTaskList = state.taskList.filter((item) => item.id !== id);
    localStorage.setItem("taskList", JSON.stringify(newTaskList));
    return {
      ...state,
      taskList: newTaskList,
    };
  },
});

export default taskReducer;
