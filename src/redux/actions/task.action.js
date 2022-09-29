import { createAction } from "@reduxjs/toolkit";

import { TASK_ACTION } from "../constants";

export const createTaskAction = createAction(TASK_ACTION.CREATE_TASK);
export const updateTaskAction = createAction(TASK_ACTION.UPDATE_TASK);
export const deleteTaskAction = createAction(TASK_ACTION.DELETE_TASK);
