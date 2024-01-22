import { CREAT_PRODUCT,DELETE_PRODUCT,UPDATE_PRODUCT, GET_ONE_PRODUCT,GET_PRODUCT_LIKE, GET_ERROR, GET_ALL_PRODUCT, GET_ALL_PRODUCT_CATEGORY } from "../type";

const inital = {
   products:[],
   allProducts:[],
   oneProduct:[],
   ProducLike:[],
   deleteProduct:[],
   updateProduct:[],
   allProductCategory:[],
   loading:true,
}
const productReducer =(state= inital, action) => {
   switch (action.type) {
      case CREAT_PRODUCT:
         return {
            ...state,
            products:action.payload,
            loading:false,
         } 
      case GET_ALL_PRODUCT:
         return {
            ...state,
            allProducts:action.payload,
            loading:false,
         } 
      case GET_ONE_PRODUCT:
         return {
            oneProduct:action.payload,
            loading:false,
         } 
      case GET_PRODUCT_LIKE:
         return {
            ...state,
            ProducLike:action.payload,
            loading:false,
         } 
      case DELETE_PRODUCT:
         return {
            ...state,
            deleteProduct:action.payload,
            loading:false,
         } 
      case UPDATE_PRODUCT:
         return {
            ...state,
            updateProduct:action.payload,
            loading:false,
         } 
      case GET_ALL_PRODUCT_CATEGORY:
         return {
            ...state,
            allProductCategory:action.payload,
            loading:false,
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

export default productReducer