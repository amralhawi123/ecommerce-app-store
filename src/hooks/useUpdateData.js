import baseURL from "../Api/baseURL";

export const useUpdateDatawithImage = async (url, params) => {

   const config ={
      headers:{"Content-Type":"multipart/form-data", Authorization:`Bearer ${localStorage.getItem("token")}`}
   }
   const res = await baseURL.put(url, params, config) 
   return res
}

export const useUpdateData = async (url, params) => {
   const config ={
      headers:{ Authorization:`Bearer ${localStorage.getItem("token")}`}
   }
   const res = await baseURL.put(url, params, config)

   return res
}
