export const initialState = {
  values: {
    username: "",
    password: "",
  },
  errors: {},
};

export const actionTypes = {
  SET_ERRORS: "LOGIN/SET_ERRORS",
  SET_VALUES: "LOGIN/SET_VALUES",
  CLEAR_STORE: "LOGIN/CLEAR_STORE",
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_ERRORS:
      return {
        ...state,
        errors: { ...action.errors },
      };

    case actionTypes.SET_VALUES:
      return {
        ...state,
        values: {
          ...state.values,
          [action.target.name]: action.target.value,
        },
      };

    case actionTypes.CLEAR_STORE:
      return {
        ...initialState,
      };

    default:
      return state;
  }
};

export const setErrors = errors => ({
  type: actionTypes.SET_ERRORS,
  errors,
});

export const setValues = target => ({
  type: actionTypes.SET_VALUES,
  target,
});

export const clearStore = () => ({
  type: actionTypes.CLEAR_STORE,
});
