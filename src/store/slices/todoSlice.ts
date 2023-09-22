import { createSlice } from "@reduxjs/toolkit";

interface TodoState {
  taskList: Object;
}

const initialState: TodoState = {
  taskList: {},
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addTodoAction(state, { payload }) {
      if (state.taskList[payload.name]) {
        state.taskList[payload.name]?.push(payload.data);
      } else {
        state.taskList[payload.name] = [payload.data];
      }
    },
    deleteTodoAction(state, { payload }) {
      state.taskList[payload.name]?.splice(payload.index, 1);
    },
    updateTodoAction(state, { payload }) {
      const { title, description, id } = payload.data;
      const index = state.taskList[payload.name].findIndex(
        (item) => item.id === id
      );
      state.taskList[index] = { ...state.taskList, title, description };
    },
  },
});

export const { addTodoAction, deleteTodoAction, updateTodoAction } =
  counterSlice.actions;
export default counterSlice.reducer;
