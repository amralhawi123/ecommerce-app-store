import { useEffect, useState } from "react"
import { getOneAddress } from "../../redux/actions/addressAction"
import { useDispatch, useSelector } from "react-redux"
import GetallProductCart from "../cart/get-all-product-cart"
import { createCashOrder } from "../../redux/actions/orderCashAction"
import { notify } from './../useNotification';
import { useNavigate } from "react-router-dom"

const OrderPayCashHook = () => {

  const [, ,,,cartID]=GetallProductCart()

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [Loading, setLoading] = useState(true) 
  const [LoadingData, setLoadingData] = useState(true)   
  const [adressDetails, setAdressDetails] = useState([])   

  const handelSelectAddress=(e)=>{  
    if(e.target.value !== '0')
    get(e.target.value)
  }
  
  const get=async(id)=>{
    setLoadingData(true)
    await dispatch(getOneAddress(id))
    setLoadingData(false)
  }

  const oneaddress = useSelector(state => state.addressReducer.oneaddress)

  useEffect(()=>{
    if(LoadingData === false){
      if(oneaddress && oneaddress.status ==="success"){
        setAdressDetails(oneaddress.data) 
      }else{
        setAdressDetails([])
      }
    }
  },[LoadingData])

  const handelCreateOrderCash = async()=>{ 

    if(cartID.length <=1){
      notify("من فضلك أضف منتجات الي العربة", "warn")
      return
    }
    if(adressDetails.length <=1){
      notify("من فضلك اختر عنوان", "warn")
      return
    }

    setLoading(true)
    await dispatch(createCashOrder(cartID,{
      shippingAddress:{
          details: adressDetails.alias,
          phone: adressDetails.phone,
          city: adressDetails.city,
          postalCode: adressDetails.postalCode,
          }
  }))
    setLoading(false)
  }

  const res = useSelector(state => state.orderCashReducer.createordercash)

  useEffect(()=>{
    if(Loading === false){
      if(res && res.status ===201){
        notify("تم انشاء طلبك بنجاح", "success")
        setTimeout(() => {
          navigate('/user/allorders')
        }, 2000);
      }else {
        notify("حدث خطأ أثناء الشراء", "error")
      }
    }
  },[Loading])

  return [handelSelectAddress,handelCreateOrderCash,adressDetails]
}

export default OrderPayCashHook