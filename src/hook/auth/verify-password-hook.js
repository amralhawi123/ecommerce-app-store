import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react'; 
import { useNavigate } from 'react-router-dom';
import { forgetPassword, verifyPassword } from '../../redux/actions/authAction';
import { notify } from './../useNotification';

const VeryPasswordHook =()=>{

   const dispatch = useDispatch()
   const navigat = useNavigate()

   const [code, setCode] = useState('')
   const [loading, setLoading] = useState(true)

   const onChangeCode = (e)=> {
      setCode(e.target.value)
   }

   const onSubmit =async()=> {
      if(code === ''){
         notify("من فضلك أدخل الايميل", "error")
      }
      setLoading(true)
      await dispatch(verifyPassword({
         "resetCode":code,
      }))
      setLoading(false)
   }

   const res = useSelector(state => state.authReducer.verifypassword)

   useEffect(() => {
      if(loading === false){
         if(res){
            console.log(res)
            if(res.data.status === 'success'){
               notify("كود التفعيل صحيح", "error")
               setTimeout(() => {
                  navigat("/user/reset-password")
               }, 1000);
            }
            if(res.data.status === 'fail'){
               notify("الكود خاطئ او انتهت صلاحيته", "error")
            }
          }
      }
   })

   return [code, onChangeCode, onSubmit]
}

export default VeryPasswordHook