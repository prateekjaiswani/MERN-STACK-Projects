
import axios from 'axios'
import * as actionType from '../constants/CartConstants'
const url='http://localhost:8000'

export const addToCart = (id, quantity) => async (dispatch) => {
    try {
        const { data } = await axios.get(`${url}/product/${id}`);
        dispatch({type: actionType.ADD_TO_CART, payload: { ...data,quantity }});
    } catch (error) {
        dispatch({type: actionType.ADD_TO_CART_ERROR, error: error.message});
        
    }
}


export const removeFromCart = (id) => (dispatch) => {
    dispatch({type: actionType.REMOVE_FROM_CART, payload: id});
}