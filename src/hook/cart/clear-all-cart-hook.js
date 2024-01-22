import { useEffect } from "react"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { clearCartItem } from "../../redux/actions/cartAction"
import { notify } from "../useNotification"


const ClearAllCartHook = () => {

    const dispatch = useDispatch()
    const [loading, setLoading] = useState(true)

    
    const handleDeleteCart = async()=> {
        setLoading(true)
        await dispatch(clearCartItem())
        setLoading(false)
    }
    
    const res = useSelector(state => state.cartReducer.clearCartItem)
    useEffect(() => {
        if(loading === false){
            if(res && res.status === 204){
                notify("تم حذف العربة بنجاح", "success")
                setTimeout(() => {
                    window.location.reload()
                }, 1500);
             }else{
                notify("حدث خطأ أثناء الحذف", "error")
             }
        }
    }, [loading])

    return [handleDeleteCart]
}

export default ClearAllCartHook