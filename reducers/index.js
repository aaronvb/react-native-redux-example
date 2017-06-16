import { combineReducers } from "redux";
import items from "./items";

// Combine reducers
const itemApp = combineReducers({
  items
});

export default itemApp;
