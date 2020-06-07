import { combineReducers } from "redux";

import { reducer as login } from "./login";
import { reducer as user } from "./user";
import { reducer as home } from "./home";

const rootReducer = combineReducers({
  login,
  user,
  home,
});

export default rootReducer;
