export const initialState = {
  palindrom: "",
  errors: {},
  history: [],
};
export const actionTypes = {
  SET_ERRORS: "HOME/SET_ERRORS",
  SET_PALINDROM: "HOME/SET_PALINDROM",
  CLEAR_PALINDROM: "HOME/CLEAR_PALINDROM",
  SET_HISTORY: "HOME/SET_HISTORY",
  PUSH_TO_HISTORY: "HOME/PUSH_TO_HISTORY",
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_ERRORS:
      return {
        ...state,
        errors: { ...action.errors },
      };

    case actionTypes.SET_PALINDROM:
      return {
        ...state,
        palindrom: action.target.value,
      };

    case actionTypes.CLEAR_PALINDROM:
      return {
        ...state,
        palindrom: "",
      };

    case actionTypes.SET_HISTORY:
      return {
        ...state,
        history: [...action.history],
      };

    case actionTypes.PUSH_TO_HISTORY:
      return {
        ...state,
        history: [
          ...state.history,
          {
            id: action.item.id,
            name: action.item.name,
            isPalindrom: action.item.isPalindrom,
          },
        ],
      };

    default:
      return state;
  }
};

export const setErrors = errors => ({
  type: actionTypes.SET_ERRORS,
  errors,
});

export const setValue = target => ({
  type: actionTypes.SET_PALINDROM,
  target,
});

export const clearValue = () => ({
  type: actionTypes.CLEAR_PALINDROM,
});

export const setHistory = history => ({
  type: actionTypes.SET_HISTORY,
  history,
});

export const pushToHistory = item => ({
  type: actionTypes.PUSH_TO_HISTORY,
  item,
});
