import { decrement, increment, incrementByValue } from "./types";

export const incrementByOne = (dispatch) => {
  return dispatch({
    type: increment,
  });
};

export const decrementByOne = (dispatch) => {
  return dispatch({
    type: decrement,
  });
};

export const increment_value = (dispatch) => {
  return dispatch({
    type: incrementByValue,
    vl: 5,
  });
};
