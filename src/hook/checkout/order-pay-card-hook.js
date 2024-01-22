import  { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';  
import GetallProductCart from '../cart/get-all-product-cart';
import { createOrderCARD } from '../../redux/actions/orderCashAction';
import { notify } from '../useNotification';


const OrderPayCardHook = (adressDetails) => {

    const [loading, setLoading] = useState(true); 
    const dispatch = useDispatch()
    const [, ,,,cartID]=GetallProductCart()

    //when user click
    const handelCreateOrderCARD = async () => {
        if (cartID === '0') {
            notify("من فضلك اضف منتجات الى العربه اولا", "warn")
            return
        }
        if (adressDetails.length <= 0) {
            notify("من فضلك اختر عنوان اولا", "warn")
            return
        }
        setLoading(true)
        await dispatch(createOrderCARD(cartID, {
            shippingAddress:{
                details: adressDetails.alias,
                phone: adressDetails.phone,
                city: adressDetails.city,
                postalCode: adressDetails.postalCode,
                }
        }))
        setLoading(false)
    }



    //get response for create order card
    const resOrderCard = useSelector(state => state.orderCashReducer.createordercard)
    useEffect(() => {
        if (loading === false) {
            if (resOrderCard && resOrderCard.status === "success") {
                if (resOrderCard.session.url) {
                    window.open(resOrderCard.session.url)
                }
            } else {
                notify("فشل فى اكمال الطلب من فضلك حاول مره اخرى", "warn")
            }
        }
    }, [loading, resOrderCard])


    return [handelCreateOrderCARD]


}

export default OrderPayCardHook