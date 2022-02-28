import {
  ADD_PRODUCT,
  DELETE_PRODUCT,
  FILTER_PRODUCT,
  RESET_FILTER,
} from "./types";

export const addProduct = (product, dispatch) => {
  return dispatch({
    type: ADD_PRODUCT,
    payload: product,
  });
};

export const deleteProduct = (id) => {
  return {
    type: DELETE_PRODUCT,
    payload: id,
  };
};

export const filterProduct = (value) => {
  if (value == "all") {
    return {
      type: RESET_FILTER,
    };
  } else {
    return {
      type: FILTER_PRODUCT,
      value: value,
    };
  }
};
