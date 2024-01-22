import baseURL from "../Api/baseURL";

export const usePostDatawithImage = async (url, params) => {

   const config ={
      headers:{"Content-Type":"multipart/form-data",
         Authorization:`Bearer ${localStorage.getItem("token")}`}
   }
   const res = await baseURL.post(url, params, config) 
   return res
}

export const usePostData = async (url, params) => {
   const config ={
      headers:{ 
         Authorization:`Bearer ${localStorage.getItem("token")}`}
   }
   const res = await baseURL.post(url, params, config)
   
   return res
}
