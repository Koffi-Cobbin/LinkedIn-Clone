import { combineReducers } from "redux";
import userReducer from "./userReducer";
import articleReducer from "./articleReducer";


const rootReducer = combineReducers({
    useState: userReducer,
    articleState: articleReducer,
});

export default rootReducer;
