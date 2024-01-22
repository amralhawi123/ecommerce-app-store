import { useEffect } from "react"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import {  editReview } from "../../redux/actions/reviewAction"
import { notify } from "../useNotification"


const EidtRateHook = (item) => { 
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(true)
    const [newRateText, setNewRateTxt] = useState(item.review)
    const [newRateValue, setNewRateValue] = useState(item.rating)
    const [showEdit, setShowEdit] = useState(false);
  
    const OnChangeRateText = (e) => {
        setNewRateTxt(e.target.value)
    }
    const OnChangeRateValue = (val) => {
        setNewRateValue(val)
    }

    const handleCloseEdit = () => setShowEdit(false);
    const handleShowEdit = () => setShowEdit(true);

    const handleEdit = async() =>{
        setLoading(true)
        await dispatch(editReview(item._id,{
            review: newRateText,
            rating: newRateValue
         }))
        setLoading(false)
        setShowEdit(false)
        
      }
    const res = useSelector(state => state.reviewReducer.editReview)

     useEffect(() => {
        if(loading === false){
            console.log(res)
            if(res.status && res.status === 200){
                notify("تم تعديل التقييم بنجاح", "success")
                setTimeout(() => {
                    window.location.reload()
                }, 2000);
            }
            else {
                notify("هناك مشكلة ف عملية التعديل", "error")
            }
        }
    }, [loading])

    return [OnChangeRateText,OnChangeRateValue,newRateValue,newRateText, handleEdit, showEdit, handleCloseEdit, handleShowEdit]
}

export default EidtRateHook