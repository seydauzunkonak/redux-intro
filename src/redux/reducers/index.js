import { combineReducers } from "redux";
import categoryListReducer from "./categoryListReducer";
import changeCategoryReducer from "./changeCategoryReducer";
const rootReducer = combineReducers({
  changeCategoryReducer,
  categoryListReducer,
});
export default rootReducer;
