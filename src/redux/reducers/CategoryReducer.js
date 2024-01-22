import { GET_ALL_CATEGOEY, GET_ONE_CATEGOEY, GET_ERROR,CREAT_CATEGOEY, DELETE_CATEGORY, UPDATE_CATEGORY } from "../type";

const inital = {
   category:[],
   oneCategory:[],
   deletecategory:[],
   updatecategory:[],
   loading:true,
}
const categoryReducer =(state= inital, action) => {
   switch (action.type) {
      case GET_ALL_CATEGOEY:
         return {
            ...state,
            category:action.payload,
            loading:false,
         }
      case GET_ONE_CATEGOEY:
         return {
            oneCategory:action.payload,
            loading:false,
         }
      case CREAT_CATEGOEY:
         return {
            category:action.payload,
            loading:false,
         }
      case DELETE_CATEGORY:
         return {
            ...state,
            deletecategory:action.payload,
            loading:false,
         }
      case UPDATE_CATEGORY:
         return {
            ...state,
            updatecategory:action.payload,
            loading:false,
         }
         case GET_ERROR:
            return {
               loading:true,
               category:action.payload,
            }
      default:
         return state;
   }
}

export default categoryReducer