import {GET_ERROR,CREAT_SUB_CATEGOEY, GET_SUB_CATEGOEY } from "../type";

const inital = {
   subCategory:[],
   loading:true,
}
const subCategoryReducer =(state= inital, action) => {

   switch (action.type) {
      case CREAT_SUB_CATEGOEY:
         return {
            ...state,
            subCategory:action.payload,
            loading:false,
         }
      case GET_SUB_CATEGOEY:
         return { 
            subCategory:action.payload,
            loading:false,
         }
         case GET_ERROR:
            return {
               loading:true,
               subCategory:action.payload,
            }
      default:
         return state;
   }
}

export default subCategoryReducer