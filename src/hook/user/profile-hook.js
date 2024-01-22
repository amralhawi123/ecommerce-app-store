import { useEffect } from "react";
import { useState } from "react";
import { updateUserProfile } from "../../redux/actions/authAction";
import { useDispatch, useSelector } from "react-redux";
import { notify } from "../useNotification";

const ProfileHook = () => {

    const dispatch = useDispatch()

    let user = []
      if(localStorage.getItem("userData") != null){
         user =JSON.parse(localStorage.getItem("userData"))
      }

     const [name, setName] = useState(user.name) 
     const [phone, setPhone] = useState(user.phone)  
     const [email, setEmail] = useState(user.email)  

     const onChangName= (e) => {
         e.persist()
         setName(e.target.value)
     }
     const onChangEmil= (e) => {
         e.persist()
         setEmail(e.target.value)
        }
        const onChangPhone= (e) => {
            e.persist()
            setPhone(e.target.value)
     }

     const [Loading, setLoading] = useState(true) 
     const [show, setShow] = useState(false);
  
     const handleClose = () => setShow(false);
     const handleShow = () => setShow(true);
  
     let body 
     if(user.email === email){
      body = {
         name,
         phone
      }
     } else {
      body = {
         name,
         phone,
         email
      }
     }

     const OnhandleClick= async(e) => {
         setLoading(true)
         await dispatch(updateUserProfile(body))
         setLoading(false)
         setShow(false) 
     }
     
    const res = useSelector(state => state.authReducer.updateUserProfile)

    useEffect(() => {
        if(Loading === false){
           if(res && res.status === 200){
            localStorage.setItem("userData", JSON.stringify(res.data.data.user) )
              notify("تم تغيير بياناتك بنجاح", "success")
                    setTimeout(() => {
                  window.location.reload(false)
              }, 2000);
           }else if(res && res.status === 400){
            notify("هذا الايميل مستخدم من قبل", "error")
         
         }else {
              notify("حدث خطأ أثناء التعديل", "error")
           }
        }
     // eslint-disable-next-line react-hooks/exhaustive-deps
     }, [Loading])

     return [user, show, handleClose, handleShow, OnhandleClick, onChangName,onChangEmil,onChangPhone
        ,name, phone, email]
}

export default ProfileHook