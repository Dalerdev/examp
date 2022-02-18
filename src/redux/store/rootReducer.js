import { combineReducers } from "redux";
import { cartReducer } from "../modules/cart/Cart.Reducer";
import { getProductReducer } from "../modules/GetProduct/getProduct.Reducer";
import { getHistoryReducer } from "../modules/history/HistoryReducer";

export const rootReducer = combineReducers({
    getProduct:getProductReducer,
    cart: cartReducer,
    productList: getHistoryReducer,
 })