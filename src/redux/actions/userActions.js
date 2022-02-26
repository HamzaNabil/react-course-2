export const fetchUsers = (dispatch) => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => {
      dispatch({
        type: "FetchUsers",
        allUsers: data,
      });
    });
};
