export const initialState = {
  userName: "",
  isAuthenticated: false,
};
export const actionTypes = {
  SET_USER: "USER/SET_USER",
  SET_AUTHENTICATION: "USER/SET_AUTHENTICATION",
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_USER:
      return {
        ...state,
        userName: action.userName,
      };

    case actionTypes.SET_AUTHENTICATION:
      return {
        ...state,
        isAuthenticated: !!action.auth,
      };

    default:
      return state;
  }
};

export const setAuthentication = auth => ({
  type: actionTypes.SET_AUTHENTICATION,
  auth,
});

export const setUserName = userName => ({
  type: actionTypes.SET_USER,
  userName,
});
