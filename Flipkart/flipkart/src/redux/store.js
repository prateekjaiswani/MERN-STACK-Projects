import {createStore, combineReducers, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from "redux-thunk";
import { getCartReducer } from './reducers/CartReducer.js';
import { getProductDetailsReducer, getProductsReducer } from './reducers/ProductReducer.js';


const reducer = combineReducers({
    getProducts : getProductsReducer,
    getProductDetails: getProductDetailsReducer,
    getCart: getCartReducer
})

const middleware =[thunk];

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store;