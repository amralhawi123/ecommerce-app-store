import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react'; 
import { useNavigate } from 'react-router-dom';
import {resetPassword } from '../../redux/actions/authAction';
import { notify } from './../useNotification';

const ResetPasswordHook =()=>{

   const dispatch = useDispatch()
   const navigat = useNavigate()

   const [password, setPassword] = useState('')
   const [confirmPassword, setConfirmPassword] = useState('')
   const [loading, setLoading] = useState(true)

   const onChangePassword = (e)=> {
      setPassword(e.target.value)
   }
   const onChangeConfirmPassword = (e)=> {
      setConfirmPassword(e.target.value)
   }

   const onSubmit =async()=> {
      if(password === ''){
         notify("من فضلك أدخل كلمة السر", "error")
      }
      if(password != confirmPassword){
         notify("كلمة السر غير متطابقة", "error")
      }
      setLoading(true)
      await dispatch(resetPassword({
         email:localStorage.getItem("user-email" ),
         newPassword:password
      }))
      setLoading(false)
   }

   const res = useSelector(state => state.authReducer.resetpassword)

   useEffect(() => {
      if(loading === false){
         if(res){ 
            if(res.data.status === 'success'){
               notify("تم تغير كلمة السر بنجاح", "error")
               setTimeout(() => {
                  navigat("/login")
               }, 1000);
            }
            if(res.data.status === 'fail'){
               notify("من فضلك اطلب كود جديد", "error")
            }
          }
      }
   })

   return [password, onChangePassword, onSubmit,onChangeConfirmPassword,confirmPassword]
}

export default ResetPasswordHook