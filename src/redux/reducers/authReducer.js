import {CREAT_NEW_USER,RESET_PASSWORD,
    LOGIN_USER, FORGET_PASSWORD,
     VERIFY_PASSWORD,UPDATE_USER_PROFILE,UPDATE_USER_PASSWORD
   } from "../type";

const inital = {
   creatUser:[],
   loginUser:[],
   forgetPassword:[],
   verifypassword:[],
   resetpassword:[],
   updateUserProfile:[],
   updateUserPassword:[],
   loading:true,
}

const authReducer =(state= inital, action) => {

   switch (action.type) {
      case CREAT_NEW_USER:
         return {
            ...state,
            creatUser:action.payload, 
         }
      case LOGIN_USER:
         return {
            ...state,
            loginUser:action.payload, 
         }
      case FORGET_PASSWORD:
         return {
            ...state,
            forgetPassword:action.payload, 
         }
      case VERIFY_PASSWORD:
         return {
            ...state,
            verifypassword:action.payload, 
         }
      case RESET_PASSWORD:
         return {
            ...state,
            resetpassword:action.payload, 
         }
      case UPDATE_USER_PROFILE:
         return {
            ...state,
            updateUserProfile:action.payload, 
         }
      case UPDATE_USER_PASSWORD:
         return {
            ...state,
            updateUserPassword:action.payload, 
         }
         default:
            return state
   }
}

export default authReducer