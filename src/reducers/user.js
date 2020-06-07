export const initialState = {
  userName: "",
};

export const actionTypes = {
  SET_USER: "USER/SET_USER",
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_USER:
      return {
        ...state,
        userName: action.userName,
      };
    default:
      return state;
  }
};

export const setUser = userName => ({
  type: actionTypes.SET_USER,
  userName,
});
