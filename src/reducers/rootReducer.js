import { combineReducers } from "redux";

import { reducer as login } from "./login";
import { reducer as user } from "./user";

const rootReducer = combineReducers({
  login,
  user,
});

export default rootReducer;
