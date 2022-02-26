function userReducer(state = { users: [] }, action) {
  switch (action.type) {
    case "FetchUsers":
      return {
        users: action.allUsers,
      };

    default:
      return state;
  }
}

export default userReducer;
