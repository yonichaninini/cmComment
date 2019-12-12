import { combineReducers } from "redux";
import comment from "./comment";

const rootReducer = combineReducers({
  comment
});
export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
