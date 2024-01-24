import { createSlice } from "@reduxjs/toolkit";

export const initialState = [];

const EmployeesSlice = createSlice({
  name: "employees",
  initialState,
  reducers: {
    addEmployeRedux(state, action) {
      state.push(action.payload);
      return state;
    },
  },
});

export const { addEmployeRedux } = EmployeesSlice.actions;

export default EmployeesSlice.reducer;
