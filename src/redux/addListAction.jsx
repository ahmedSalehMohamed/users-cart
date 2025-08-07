export const ADD_USER = "ADD_USER";
export const DELETE_USER = "DELETE_USER";
export const addUser = (userObject) => {
  return {
    type: ADD_USER,
    payload: userObject,
  };
};
export const deleteUser = (userId) => {
  return {
    type: DELETE_USER,
    payload: userId,
  };
};
