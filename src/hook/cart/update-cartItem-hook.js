import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux' 
import { useEffect } from 'react'
import { notify } from './../useNotification'; 
import { updateCartItem } from '../../redux/actions/cartAction';

const UpdateCartItemHook = (item) => {
    const dispatch = useDispatch()  
    
    const [newCount, setNewCount] = useState(0)  
    const [Loading, setLoading] = useState(true)  
    
    const OnChangeCount =(e)=>{
        setNewCount(e.target.value)
    }
    useEffect(()=>{
        if(item){ 
    setNewCount(item.count)
}
},[])
    const onSubmit= async(e) => {
        setLoading(true)
        await dispatch(updateCartItem(item._id,{
            count:newCount
        }))
        setLoading(false)
    }

    const res = useSelector(state => state.cartReducer.updateCartItem)

    useEffect(() => {
        if(Loading === false){
           if(res && res.status === 200){
              notify("تم تعديل الكمية بنجاح", "success")
           }else {
              notify("حدث خطأ أثناء التعدديل", "error")
           }
        }
     // eslint-disable-next-line react-hooks/exhaustive-deps
     }, [Loading])
 return [OnChangeCount,newCount, onSubmit]
}

export default UpdateCartItemHook