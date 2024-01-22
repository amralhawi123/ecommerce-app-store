import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux' 
import { useEffect } from 'react'
import { notify } from './../useNotification'; 
import { applyCouponToCart } from '../../redux/actions/cartAction';

const ApplyCouponHook = () => {

    const dispatch = useDispatch()  
    
    const [coupon, setCoupon] = useState('')  
    const [Loading, setLoading] = useState(true)  

    const onChangName= (e) => { 
        setCoupon(e)
    }

    const onSubmit= async(e) => {
        if(coupon === ''){
            notify("الرجاء ادخال الكوبون", "warn")
            return
        }
        setLoading(true)
        await dispatch(applyCouponToCart({
            couponName:coupon
        }))
        setLoading(false)
    }

    const res = useSelector(state => state.cartReducer.applycoupon)

    useEffect(() => {
        if(Loading === false){ 
           if(res && res.status === 200){
              notify("تم تطبيق الخصم بنجاح", "success") 
              setTimeout(() => {
                window.location.reload()
              }, 1500);
           }else {
              notify("هذا الكوبون غير صحيح او انه منتهي الصلاحية", "error")
           }
        }
     // eslint-disable-next-line react-hooks/exhaustive-deps
     }, [Loading]) 

 return [onSubmit,coupon,onChangName]
}

export default ApplyCouponHook