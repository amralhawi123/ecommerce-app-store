import { useEffect } from "react"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { deleteReview } from "../../redux/actions/reviewAction"
import { notify } from "../useNotification"


const DeleteRateHook = (item) => {
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(true)
    const [isUser, setIsUser] = useState(false)

    const user = JSON.parse(localStorage.getItem("userData"))

    useEffect(() => {
        if( item.user&& item.user._id === user._id){
            setIsUser(true)
        } else {
            setIsUser(false)
        }
    }, [])

    const [showDelete, setShowDelete] = useState(false);
  
    const handleClose = () => setShowDelete(false);
    const handleShow = () => setShowDelete(true);

    const handleDelete = async() =>{
        setLoading(true)
        await dispatch(deleteReview(item._id))
        setLoading(false)
        setShowDelete(false)
        // 
      }
    const res = useSelector(state => state.reviewReducer.deleteReview)

     useEffect(() => {
        if(loading === false){ 
            if(res && res === ''){
                notify("تم حذف التقييم بنجاح", "success")
                setTimeout(() => {
                    window.location.reload()
                }, 2000);
            }
            else {
                notify("هناك مشكلة ف عملية الحذف", "error")
            }
        }
    }, [loading])

    return [isUser,handleDelete, showDelete, handleClose, handleShow]
}

export default DeleteRateHook