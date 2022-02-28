import { data } from "../../data";
import {
  ADD_PRODUCT,
  DELETE_PRODUCT,
  FILTER_PRODUCT,
  RESET_FILTER,
} from "../actions/types";

if (!localStorage.getItem("products")) {
  localStorage.setItem("products", JSON.stringify(data));
}

let allItems = localStorage.getItem("products")
  ? JSON.parse(localStorage.getItem("products"))
  : [];

let initState = {
  products: allItems,
  filteredProducts: [],
};

function productReducer(state = initState, action) {
  switch (action.type) {
    case ADD_PRODUCT:
      let addedProducts = [...state.products, action.payload];
      localStorage.setItem("products", JSON.stringify(addedProducts));

      return {
        ...state,
        products: addedProducts,
      };

    case DELETE_PRODUCT:
      let deletedProducts = state.products.filter(
        (p) => p.id != action.payload
      );
      localStorage.setItem("products", JSON.stringify(deletedProducts));

      return {
        ...state,
        products: deletedProducts,
      };

    case RESET_FILTER:
      return {
        ...state,
        filteredProducts: [],
      };

    case FILTER_PRODUCT:
      let filtered = state.products.filter((p) => p.price == action.value);
      return {
        ...state,
        filteredProducts: filtered,
      };
    default:
      return state;
  }
}

export default productReducer;
