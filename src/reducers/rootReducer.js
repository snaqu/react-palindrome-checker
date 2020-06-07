import { combineReducers } from "redux";

import { reducer as login } from "./login";
import { reducer as home } from "./home";

const rootReducer = combineReducers({
  login,
  home,
});

export default rootReducer;
