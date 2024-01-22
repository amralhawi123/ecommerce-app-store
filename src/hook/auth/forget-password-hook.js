import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react'; 
import { useNavigate } from 'react-router-dom';
import { forgetPassword } from '../../redux/actions/authAction';
import { notify } from './../useNotification';

const ForgetPasswordHook =()=>{

   const dispatch = useDispatch()
   const navigat = useNavigate()

   const [email, setEmail] = useState('')
   const [loading, setLoading] = useState(true)

   const onChangeEmail = (e)=> {
      setEmail(e.target.value)
   }

   const onSubmit =async()=> {
      if(email === ''){
         notify("من فضلك أدخل الايميل", "error")
         return
      }
      localStorage.setItem("user-email", email)
      setLoading(true)
      await dispatch(forgetPassword({
         email,
      }))
      setLoading(false)
   }

   const res = useSelector(state => state.authReducer.forgetPassword)

   useEffect(() => {
      if(loading === false){
         setTimeout(() => {
            navigat("/user/verify-code")
         }, 1000);
         if(res){ 
            if(res.data.status === 'success'){
               notify("تم اريال الكود بنجاح", "success")
               setTimeout(() => {
                  navigat("/user/verify-code")
               }, 1000);
            }
            if(res.data.status === 'fail'){
               notify("هذا الحساب غير موجود", "error")
            }
            if(res.data.status === 'error'){
               notify(res.data.message, "error")
            }
            console.log(res)
          }
      }
   })

   return [email, onChangeEmail, onSubmit]
}

export default ForgetPasswordHook