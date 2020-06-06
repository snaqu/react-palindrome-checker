import { combineReducers } from "redux";

import { reducer as login } from "./login";

const rootReducer = combineReducers({
  login,
});

export default rootReducer;
