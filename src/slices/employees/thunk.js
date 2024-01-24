import { addEmployeRedux } from "./reducer";

export const addEmploye = (employe) => (dispatch) => {
  dispatch(addEmployeRedux(employe));
};
