 import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getOneCoupon, updateCoupon } from '../../redux/actions/couponAction'
import { useEffect } from 'react'
import { notify } from './../useNotification';
import { useNavigate } from 'react-router-dom';

const EditCouponHook = (id) => {
    const dispatch = useDispatch() 
    const navigate = useNavigate() 

    const [couponName, setCouponName] = useState('')
    const [couponDate, setCouponDate] = useState('')
    const [couponValue, setCouponValue] = useState('') 
    const [Loading, setLoading] = useState(true) 
    const [LoadingData, setLoadingData] = useState(true) 

    useEffect(() => {
        setLoadingData(true)
        dispatch(getOneCoupon(id))
        setLoadingData(false)
     // eslint-disable-next-line react-hooks/exhaustive-deps
     }, [])

     const oneCoupon = useSelector(state => state.couponReducer.onecoupon)
     const formatDate = (dateString) => {
        const options = { year: "numeric", month: "numeric", day: "numeric" }
        return new Date(dateString).toLocaleDateString(undefined, options)
      }
     useEffect(() => {
        if(LoadingData === false){
        if(oneCoupon.data){
            setCouponName(oneCoupon.data.name)
            setCouponDate(formatDate(oneCoupon.data.expire))
            setCouponValue(oneCoupon.data.discount)
        }
        }
     // eslint-disable-next-line react-hooks/exhaustive-deps
     }, [LoadingData])
 
    const onChangName= (e) => {
        e.persist()
        setCouponName(e.target.value)
    }
    const onChangDate= (e) => {
        e.persist()
        setCouponDate(e.target.value)
    }
    const onChangValue= (e) => {
        e.persist()
        setCouponValue(e.target.value)
    }

    const onSubmit= async(e) => {
        setLoading(true)
        await dispatch(updateCoupon(id,{
            name:couponName.toUpperCase(),
            expire:couponDate,
            discount:couponValue
        }))
        setLoading(false)
    }

    const res = useSelector(state => state.couponReducer.updatecoupon)

    useEffect(() => {
        if(Loading === false){
           if(res && res.status === 200){
              notify("تم تعديل الكوبون بنجاح", "success")
              setTimeout(() => {
                  navigate('/admin/addcoupon')
              }, 2000);
           }else {
              notify("حدث خطأ أثناء التعدديل", "error")
           }
        }
     // eslint-disable-next-line react-hooks/exhaustive-deps
     }, [Loading])
 return [couponName, couponDate, couponValue, onChangName, onChangDate, onChangValue, onSubmit]
}

export default EditCouponHook