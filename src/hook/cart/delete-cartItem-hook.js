import { useEffect } from "react"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { deleteCartItem } from "../../redux/actions/cartAction"
import { notify } from "../useNotification"


const DeleteCartItemHook = (id) => {

    const dispatch = useDispatch()
    const [loading, setLoading] = useState(true)

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleDelete= async(e) => {
        setLoading(true)
        await dispatch(deleteCartItem(id))
        setLoading(false)
        setShow(false) 
    }

    
    const res = useSelector(state => state.cartReducer.deleteCartItem)
    useEffect(() => {
        if(loading === false){
            if(res && res.status === 200){
                notify("تم حذف  المنتج بنجاح", "success")
                setTimeout(() => {
                    window.location.reload()
                }, 1500);
             }else{
                notify("حدث خطأ أثناء الحذف", "error")
             }
            
        }
    }, [loading])

    return [handleDelete,handleShow, show, handleClose]
}

export default DeleteCartItemHook