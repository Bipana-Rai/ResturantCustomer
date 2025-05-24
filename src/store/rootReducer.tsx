import storage from "redux-persist/lib/storage"; // localStorage
import itemReducer from "@/features/itemSlice";
import { combineReducers } from "redux";

const appReducer = combineReducers({
  item: itemReducer,
});

const rootReducer = (state: any, action: any) => {
  if (action.type === "RESET_APP") {
    // Clear redux-persist localStorage key manually
    storage.removeItem("persist:root");
    // Reset state to undefined to clear all reducers' state
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;
