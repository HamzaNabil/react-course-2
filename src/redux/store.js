import { createStore } from "redux";

const initState = {
  products: JSON.parse(localStorage.getItem("products")) || [],
};

function reducer(state = initState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

const store = createStore(reducer);

export default store;
