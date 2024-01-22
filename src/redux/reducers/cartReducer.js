import {ADD_PRODUCT_TO_CART, APPLY_COUPON, CLEAR_CART, DELETE_ITEM_CART, GET_PRODUCT_CART, UPDATE_ITEM_CART} from "../type";

const inital = {
    addToCart:[],
    allProudctCart:[],
    clearCartItem:[],
    deleteCartItem:[],
    updateCartItem:[],
    applycoupon:[],
   loading:true,
}

const cartReducer =(state= inital, action) => {

   switch (action.type) {
      case ADD_PRODUCT_TO_CART:
         return {
            ...state,
            addToCart:action.payload, 
         }
      case GET_PRODUCT_CART:
         return {
            ...state,
            allProudctCart:action.payload, 
         }
      case CLEAR_CART:
         return {
            ...state,
            clearCartItem:action.payload, 
         }
      case DELETE_ITEM_CART:
         return {
            ...state,
            deleteCartItem:action.payload, 
         }
      case UPDATE_ITEM_CART:
         return {
            ...state,
            updateCartItem:action.payload, 
         }
      case APPLY_COUPON:
         return {
            ...state,
            applycoupon:action.payload, 
         }
         default:
            return state
   }
}

export default cartReducer