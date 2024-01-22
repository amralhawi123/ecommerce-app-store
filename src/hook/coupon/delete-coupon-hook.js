
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteCoupon } from '../../redux/actions/couponAction'
import { useEffect } from 'react'
import { notify } from '../useNotification';

const DeleteCouponHook = (id) => { 
    const dispatch = useDispatch() 
    const [Loading, setLoading] = useState(true) 
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const OnhandleClick= async(e) => {
        setLoading(true)
        await dispatch(deleteCoupon(id))
        setLoading(false)
        setShow(false) 
    }

    const res = useSelector(state => state.couponReducer.deletecoupons)
  

    useEffect(() => {
        if(Loading === false){
           if(res && res.status === 204){
              notify("تم حذف الكوبون بنجاح", "success")
              setTimeout(() => {
                  window.location.reload(false)
              }, 2000);
           }else{
              notify("حدث خطأ اثناء الحذف", "error")
           }
        }
     // eslint-disable-next-line react-hooks/exhaustive-deps
     }, [Loading])
 return [OnhandleClick, show, handleClose,handleShow ]
}

export default DeleteCouponHook