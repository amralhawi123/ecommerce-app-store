import { usePostData } from "../../hooks/usePostData"; 
import { useUpdateData } from "../../hooks/useUpdateData";
import { CREAT_NEW_USER,RESET_PASSWORD, 
   LOGIN_USER, FORGET_PASSWORD ,
    VERIFY_PASSWORD,
     UPDATE_USER_PROFILE,UPDATE_USER_PASSWORD
   } from "../type";



export const creatNewUser =(data) => async (dispatch) => {
   try{
      const response = await usePostData(`/api/v1/auth/signup`, data)
      dispatch({
         type:CREAT_NEW_USER,
         payload:response,
         loading:true
      })
   } catch (e) {
      dispatch({
         type:CREAT_NEW_USER,
         payload: e.response,
      })
   }
}
 
// login user
export const loginUser =(data) => async (dispatch) => {

   try{
      const response = await usePostData(`/api/v1/auth/login`, data)
      
      dispatch({
         type:LOGIN_USER,
         payload:response,
         loading:true
      })
   } catch (e) {
      dispatch({
         type:LOGIN_USER,
         payload: e.response,
      })
   }
}

// forget password
export const forgetPassword =(data) => async (dispatch) => {

   try{
      const response = await usePostData(`/api/v1/auth/forgotPasswords`, data)
      dispatch({
         type:FORGET_PASSWORD,
         payload:response,
      })
   } catch (e) {
      dispatch({
         type:FORGET_PASSWORD,
         payload: e.response,
      })
   }
}

// verify password
export const verifyPassword =(data) => async (dispatch) => {

   try{
      const response = await usePostData(`/api/v1/auth/verifyResetCode`, data)
      dispatch({
         type:VERIFY_PASSWORD,
         payload:response,
      })
   } catch (e) {
      dispatch({
         type:VERIFY_PASSWORD,
         payload: e.response,
      })
   }
}

// reset password
export const resetPassword =(data) => async (dispatch) => {
   try{
      const response = await useUpdateData(`/api/v1/auth/resetpassword`, data)
      dispatch({
         type:RESET_PASSWORD,
         payload:response,
      })
   } catch (e) {
      dispatch({
         type:RESET_PASSWORD,
         payload: e.response,
      })
   }
}

// update User Profile
export const updateUserProfile =(body) => async (dispatch) => {
   try{
      const response = await useUpdateData(`/api/v1/users/updateMe`, body)
      dispatch({
         type:UPDATE_USER_PROFILE,
         payload:response,
      })
   } catch (e) {
      dispatch({
         type:UPDATE_USER_PROFILE,
         payload: e.response,
      })
   }
}

// update User password
export const updateUserPassword =(body) => async (dispatch) => {
   try{
      const response = await useUpdateData(`/api/v1/users/changeMyPassword`, body)
      dispatch({
         type:UPDATE_USER_PASSWORD,
         payload:response,
      })
   } catch (e) {
      dispatch({
         type:UPDATE_USER_PASSWORD,
         payload: e.response,
      })
   }
}