import { combineReducers } from "redux";
import usersReducer from './userCheck/reducer';

const rootReducer = combineReducers({
    users: usersReducer,
})

export default rootReducer