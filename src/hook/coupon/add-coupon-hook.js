import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addCoupon } from '../../redux/actions/couponAction'
import { useEffect } from 'react'
import { notify } from './../useNotification';

const AddCouponHook = () => {
    const dispatch = useDispatch() 

    const [couponName, setCouponName] = useState("")
    const [couponDate, setCouponDate] = useState('')
    const [couponValue, setCouponValue] = useState('') 
    const [Loading, setLoading] = useState(true) 
 
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
        if(couponName === '' || couponDate==='' || couponValue===''){
            notify("تأكد من ادخال البيانات بشكل صحيح", "warn")
            return
        }
        setLoading(true)
        await dispatch(addCoupon({
            name:couponName.toUpperCase(),
            expire:couponDate,
            discount:couponValue
        }))
        setLoading(false)
    }

    const res = useSelector(state => state.couponReducer.addcoupon)

    useEffect(() => {
        if(Loading === false){
           if(res && res.status === 201){
              notify("تم اضافة الكوبون بنجاح", "success")
              setCouponName('')
              setCouponValue('')
              setCouponDate('')
              setTimeout(() => {
                  window.location.reload(false)
              }, 2000);
           }else if(res && res.status === 400){
              notify("هذا الكوبون موجود من قبل", "error")
           }
        }
     // eslint-disable-next-line react-hooks/exhaustive-deps
     }, [Loading])
 return [couponName, couponDate, couponValue, onChangName, onChangDate, onChangValue, onSubmit]
}

export default AddCouponHook