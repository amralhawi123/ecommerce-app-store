import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux' 
import { addProductToCart } from '../../redux/actions/cartAction'
import { useEffect } from 'react'
import { notify } from '../../hook/useNotification';

const AddToCartHook = (ProdId, item) => {
    
    const dispatch = useDispatch()
    const [indexColor, setIndexColor] = useState('')
    const [textColor, setTextColor] = useState('')
    const [loading, setloading] = useState(true)

    const ClickColor = (index, color) => {
      setIndexColor(index)
      setTextColor(color)
    }
    const AddToCartHandle = async () => {
        if(item.availableColors.length >= 1){
        if(textColor === ''){
            notify("الرجاء اختيار لون للمنتج", "warn")
            return;
        }}else{
            setTextColor('')
        }
        setloading(true) 
        await dispatch(addProductToCart({
            productId: ProdId,
            color: textColor
        }))
        setloading(false) 
    }


    const res = useSelector(state => state.cartReducer.addToCart)

    useEffect(() => {
        if(loading === false){
                if(res && res.status === 200){
                    notify("تم اضافة المنتج الي العربة بنجاح", "success")
                    setTimeout(() => {
                        window.location.reload()
                    }, 1500);
                 }else{
                    notify("الرجاء تسجيل الدخول أولاً", "error")
                 }
        }
    }, [loading])
    
    return [ClickColor, indexColor, AddToCartHandle]
}

export default AddToCartHook