import {
    ADD_COUPON, DELETE_COUPON, GET_ALL_COUPON, GET_ONE_COUPON, UPDATE_COUPON
} from "../type";

const inital = {
   addcoupon:[],
   allcoupons:[],
   deletecoupons:[],
   onecoupon:[],
   updatecoupon:[],
   loading:true,
}

const couponReducer =(state= inital, action) => {

   switch (action.type) {
      case ADD_COUPON:
         return {
            ...state,
            addcoupon:action.payload,
            loading:false,
         }
      case GET_ALL_COUPON:
         return {
            ...state,
            allcoupons:action.payload,
            loading:false,
         }
      case DELETE_COUPON:
         return {
            ...state,
            deletecoupons:action.payload,
            loading:false,
         }
      case GET_ONE_COUPON:
         return {
            ...state,
            onecoupon:action.payload,
            loading:false,
         }
      case UPDATE_COUPON:
         return {
            ...state,
            updatecoupon:action.payload,
            loading:false,
         }
      default:
         return state;
   }
}

export default couponReducer