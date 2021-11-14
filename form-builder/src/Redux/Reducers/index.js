import { combineReducers } from "redux"

import LoadingReducer from "./LoadingReducer";
import ErrorReducer from "./ErrorReducer";
import FormsReducer from "./FormsReducer";

const rootReducer = combineReducers({
    LoadingReducer,
    ErrorReducer,
    FormsReducer
})

export default rootReducer;