import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { creatReview } from '../../redux/actions/reviewAction';
import { notify } from '../useNotification';
import { useEffect } from 'react';

const AddRateHook = (id) => {

    const dispatch = useDispatch()
    const [rateText, setRateTxt] = useState('')
    const [rateValue, setRateValue] = useState('')
    const [loading, setLoading] = useState(true)

    var user=''
    if(localStorage.getItem("userData") != null)
    user = JSON.parse(localStorage.getItem("userData"))

    const OnChangeRateText = (e) => {
        setRateTxt(e.target.value)
    }
    const OnChangeRateValue = (valu) => {
        setRateValue(valu)
    }
    const submitCommint = async() => {
       if(rateText === ''){
        notify("من فضلك سجل دخول", "error")
        return
       }
       setLoading(true)
       await dispatch(creatReview(id,{
           review: rateText,
           rating: rateValue
        }))
        setLoading(false)
    }

    const res = useSelector(state => state.reviewReducer.createReview)

    useEffect(() => {
        if(loading === false){
            setRateTxt('')
            setRateValue('')
            if(res.status && res.status === 201){
                notify("تم اضافة التقييم بنجاح", "success")
                setTimeout(() => {
                    window.location.reload()
                }, 2000);
            }
            if(res.data.errors && res.data.errors[0].msg === 
                "You already added review on this product"){
                notify("هذا المستخدم أضاف تقييم من قبل", "error")
            }
            if(res.data.message && res.data.message === 
                "You are not allowed to perform this action"){
                notify("لا يمكن للأدمن إضافة تقييم", "error")
            }
        }
    }, [loading])

    return [submitCommint, OnChangeRateText,OnChangeRateValue, rateText, user, res]
}

export default AddRateHook