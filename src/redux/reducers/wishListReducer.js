import { GET_ERROR,REMOVE_WISHLIST, ADD_TO_WISHLIST, USER_WISHLIST } from "../type";

const inital = {
   addwishList:[],
   removeWishList:[],
   getAllWishList:[],
}
const addProductToWishList =(state= inital, action) => {
   switch (action.type) {
      case ADD_TO_WISHLIST:
         return {
            ...state,
            addwishList:action.payload,
         } 
      case REMOVE_WISHLIST:
         return {
            ...state,
            removeWishList:action.payload,
         } 
      case USER_WISHLIST:
         return {
            ...state,
            getAllWishList:action.payload,
         } 
         case GET_ERROR:
            return {
               loading:true,
               products:action.payload,
            }
      default:
         return state;
   }
}

export default addProductToWishList