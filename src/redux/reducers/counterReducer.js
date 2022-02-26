import { increment, decrement, incrementByValue } from "../actions/types";

function counterReducer(state = { count: 0 }, action) {
  switch (action.type) {
    case increment:
      return {
        count: state.count + 1,
      };

    case decrement:
      return {
        count: state.count - 1,
      };

    case incrementByValue: // {type: '', vl: 5}
      return {
        count: state.count + action.vl,
      };
    default:
      return state;
  }
}

export default counterReducer;
