import { combineReducers } from "redux";
import appState from "./appState/reducer";
import user from "./user/reducer";
import playdate from "./playdate/reducer"
import parent from "./parents/reducer";


export default combineReducers({
  appState,
  user,
  playdate,
  parent,
});
