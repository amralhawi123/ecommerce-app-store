
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeOrderPay } from '../../redux/actions/orderCashAction';
import { notify } from './../useNotification';
const ChangeOrderStatusHook = (id) => {

    const dispatch = useDispatch()
    const [pay, setPay]=useState(0)
    const [loading, setLoading]=useState(true)

    const onChangePaid=(e)=>{
        setPay(e.target.value)
    }

    const handleChangeOrder= async()=>{
        if(pay === "true"){
            setLoading(true)
            await dispatch(changeOrderPay(id))
            setLoading(false)
        } else if(pay === '0'){
            notify("الرجاء اختيار حالة دفع","warn")
        } 
    }

    const res = useSelector(state => state.orderCashReducer.changeorderPay)
    console.log(res)

    useEffect(()=>{
        if(loading === false){
            if(res && res.status === 200){
                notify("تم تغيير حالة الدفع بنجاح","success")
                setTimeout(() => {
                    window.location.reload(false)
                }, 1500);
            } else{
                notify("حدث خطأ أثناء تغيير حالة الدفع","error")
            }
        }
    },[loading])

    return [onChangePaid,handleChangeOrder]
}

export default ChangeOrderStatusHook