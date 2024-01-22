import { useState } from 'react'
import { notify } from './../useNotification';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { loginUser } from '../../redux/actions/authAction';

const LoginHook = () => {
   const dispatch = useDispatch()

const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const [loading, setLoading] = useState(true)
const [isPress, setIsPress] = useState(false)

const onChangeEmail = (e)=> {
   setEmail(e.target.value)
}

const onChangePassword = (e)=> {
   setPassword(e.target.value)
}

const onSubmit = async () => {
   setIsPress(true)
   setLoading(true)
   await dispatch(loginUser({
      email,
      password 
   }))
   setLoading(false)
   setIsPress(false)
}

const res = useSelector(state => state.authReducer.loginUser)

useEffect(() => {
if(loading === false){
   if(res){ 
      if(res.data.token){
         localStorage.setItem("token", res.data.token)
         localStorage.setItem("userData", JSON.stringify(res.data.data) )
         notify("تم التسجيل بنجاح", "success")
         setTimeout(() => {
            window.location.href='/'
         }, 2000);
      } else {
         localStorage.removeItem("token" )
         localStorage.removeItem("userData" )
      } 
      if(res.data.message === "Incorrect email or password"){ 
         localStorage.removeItem("token" )
         localStorage.removeItem("userData" )
         notify("تأكد من إدخال الايميل والباسورد صحيح", "error")
      }
   }
}
}, [loading])

return [email, password, loading, onChangeEmail, onChangePassword, onSubmit, isPress]
}

export default LoginHook
