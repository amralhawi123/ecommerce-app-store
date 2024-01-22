import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeOrderDeliver } from '../../redux/actions/orderCashAction';
import { notify } from './../useNotification';

const ChangeDeliverStatusHook = (id) => {

    const dispatch = useDispatch()
    const [deliver, setDeliver]=useState(0)
    const [loading, setLoading]=useState(true)

    const onChangeDeliverd=(e)=>{
        setDeliver(e.target.value)
    }

    const handleChangeDeliver= async()=>{
        if(deliver === "true"){
            setLoading(true)
            await dispatch(changeOrderDeliver(id))
            setLoading(false)
        } else if(deliver === '0'){
            notify("الرجاء اختيار حالة التوصيل","warn")
        } 
    }

    const res = useSelector(state => state.orderCashReducer.changeorderdeliver)

    useEffect(()=>{
        if(loading === false){
            if(res && res.status === 200){
                notify("تم تغيير حالة التوصيل بنجاح","success")
                setTimeout(() => {
                    window.location.reload(false)
                }, 1500);
            } else{
                notify("حدث خطأ أثناء تغيير حالة التوصيل","error")
            }
        }
    },[loading])

    return [onChangeDeliverd,handleChangeDeliver]
}

export default ChangeDeliverStatusHook