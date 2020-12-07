import { combineReducers } from "redux";
import listReducer from "../components/list/store/reducer";
import countReducer from "../components/count/store/reducer";
const RootReducer = combineReducers({
  list: listReducer,
  count: countReducer
});

export default RootReducer