import {
    ADD_ADDRESS, DELETE_ADDRESS, GET_ALL_ADDRESS,GET_ONE_ADDRESS,UPDATE_ADDRESS
} from "../type";

const inital = {
   addaddress:[],
   alladdress:[],
   deleteaddress:[],
   oneaddress:[],
   updateaddress:[],
   loading:true,
}

const addressReducer =(state= inital, action) => {

   switch (action.type) {
      case ADD_ADDRESS:
         return {
            ...state,
            addaddress:action.payload,
            loading:false,
         }
      case GET_ALL_ADDRESS:
         return {
            ...state,
            alladdress:action.payload,
            loading:false,
         }
      case GET_ONE_ADDRESS:
         return {
            ...state,
            oneaddress:action.payload,
            loading:false,
         }
      case DELETE_ADDRESS:
         return {
            ...state,
            deleteaddress:action.payload,
            loading:false,
         }
      case UPDATE_ADDRESS:
         return {
            ...state,
            updateaddress:action.payload,
            loading:false,
         }
      default:
         return state;
   }
}

export default addressReducer