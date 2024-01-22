import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { notify } from "../useNotification";
import { updateUserPassword } from "../../redux/actions/authAction";
import { useNavigate } from "react-router-dom";

const ChangePasswordHook = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
  
     const [oldPassword, setOldPassword] = useState('') 
     const [newPassword, setNewPassword] = useState('')  
     const [confirmPssword, setConfirmPssword] = useState('')  
     const [Loading, setLoading] = useState(true) 

     const onChangOldPassword= (e) => {
         e.persist()
         setOldPassword(e.target.value)
     }
     const onChangNewPassword= (e) => {
         e.persist()
         setNewPassword(e.target.value)
        }
        const onChangConfirmPassword= (e) => {
            e.persist()
            setConfirmPssword(e.target.value)
     }

     const changePassword =async ()=> {
        if(confirmPssword !== newPassword){
            notify("تأكيد كلمة السر غير متطابق", "warn")
            return
        }
        setLoading(true)
        await dispatch(updateUserPassword({
            currentPassword:oldPassword,
            password:newPassword,
            passwordConfirm:confirmPssword
        }))
        setLoading(false)
     }

     const res = useSelector(state => state.authReducer.updateUserPassword)

     useEffect(() => {
         if(Loading === false){
            if(res && res.status === 200){ 
               notify("تم تعديل كلمة المرور بنجاح", "success") 
               setTimeout(() => {
                   localStorage.removeItem("token")
                   localStorage.removeItem("userData")
                navigate('/login')
               }, 2000);
            }else {
               notify("حدث خطأ أثناء التعديل", "error")
            }
            if(res){
                console.log(res)
            }
         }
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [Loading])

     return [oldPassword, newPassword, confirmPssword, onChangConfirmPassword, onChangNewPassword, 
    onChangOldPassword, changePassword]
}

export default ChangePasswordHook