import { combineReducers } from "redux";
import usersReducer from './userCheck/reducer';
import termsReducer from './terms/reducer';
import navReducer from './navBar/reducer';
import barcodeReducer from './barcode/reducer';

const rootReducer = combineReducers({
    users: usersReducer,
    terms: termsReducer,
    nav: navReducer,
    barcode: barcodeReducer
})

export default rootReducer