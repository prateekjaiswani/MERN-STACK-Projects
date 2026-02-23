
import * as actionType from '../constants/ProductConstants';

export const getProductsReducer = (state = { products: [] }, action) => {
    switch (action.type) {
        case actionType.GET_PRODUCT_SUCCESS:
            return { products: action.payload }
            break;
        case actionType.GET_PRODUCT_FAILURE:
            return { error: action.payload }
            break;
        default:
            return state;
    }
}
export const getProductDetailsReducer = (state = { product: {} }, action) => {
    switch (action.type) {
        case actionType.GET_PRODUCT_DETAILS_REQUEST:
            return { loading: true }
            break;
        case actionType.GET_PRODUCT_DETAILS_SUCCESS:
            return { loading: false, product: action.payload }
            break;
        case actionType.GET_PRODUCT_DETAILS_FAILURE:
            return { loading: false, error: action.payload }
            break;
        default:
            return state;
    }
}

