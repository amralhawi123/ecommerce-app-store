import { useState } from 'react'
import { notify } from './../useNotification';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { creatNewUser } from '../../redux/actions/authAction';
import { useNavigate } from 'react-router-dom';

const RegisterHook = () => {

   const dispatch = useDispatch()
   const navigat = useNavigate()

const [name, setName] = useState('')
const [email, setEmail] = useState('')
const [phone, setPhone] = useState('')
const [password, setPassword] = useState('')
const [confirmPassword, setConfirmPassword] = useState('')
const [loading, setLoading] = useState(true)

const onChangeName = (e)=> {
   setName(e.target.value)
}
const onChangeEmail = (e)=> {
   setEmail(e.target.value)
}
const onChangePhone = (e)=> {
   setPhone(e.target.value)
}
const onChangePassword = (e)=> {
   setPassword(e.target.value)
}
const onChangeConfirmPassword = (e)=> {
   setConfirmPassword(e.target.value)
}


const validationValue =() => {
   if(name === ""){
      notify("من فضلك أدخل اسم المستخدم", "error")
      return
   }
   if( phone.length <= 10 ){
      notify("من فضلك أدخل رقم هاتف صحسح", "error")
      return
   }
   if( password != confirmPassword ){
      notify("من فضلك تأكد من كلمة السر", "error")
      return
   }
}

const res = useSelector(state => state.authReducer.creatUser)
 
const onSubmit = async() => {

   validationValue()
   setLoading(true)
   await dispatch(creatNewUser({
      name,
      email,
      password,
      "passwordConfirm":confirmPassword,
      phone
  }))
   setLoading(false)
}

useEffect(() => {
   if(loading === false){
      if(res){ 
         if(res.data.token){
            localStorage.setItem("token", res.data.token)
            notify("تم التسجيل بنجاح", "success")
            setName('')
            setEmail('')
            setPhone('')
            setPassword('')
            setConfirmPassword('')
            setTimeout(() => {
               navigat("/login")
            }, 2000);
         }
         if(res.data.errors){
            if(res.data.errors[0].msg === "E-mail already in use")
            notify("هذا الايميل مُسجل من قبل", "error")
         }
         if(res.data.errors){
            if(res.data.errors[0].msg === "accept only egypt phone numbers")
            notify("يجب ان يكون رقم الهاتف المصري مكون من 11 رقم فقط", "error")
         }
         if(res.data.errors){
            if(res.data.errors[0].msg === "must ba at least 6 chars")
            notify("يجب ان يكون الرقم السري مكون من أكثر من 6 ارقام", "error")
         }
      }
   }
}, [loading])

return [name, email, phone, password, confirmPassword, loading, onChangeConfirmPassword, onChangePassword, onChangePhone, onChangeEmail, onChangeName, onSubmit]
}

export default RegisterHook
