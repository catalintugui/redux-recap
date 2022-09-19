import counterReducer from "./counter";
import isLogged from "./isLogged";

import { combineReducers } from "redux";

const allReducers = combineReducers({
    counter: counterReducer,
    isLogged: isLogged
});

export default allReducers;