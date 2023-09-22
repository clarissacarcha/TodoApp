import { createSlice } from "@reduxjs/toolkit";

interface AuthState {
  name: string;
}

const initialState: AuthState = {
  name: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setNameAction(state, { payload }) {
      state.name = payload;
    },
    clearNameAction(state) {
      state.name = "";
    },
  },
});

export const { setNameAction, clearNameAction } = authSlice.actions;
export default authSlice.reducer;
