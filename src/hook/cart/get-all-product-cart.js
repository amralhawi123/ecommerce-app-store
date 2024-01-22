
import { useDispatch, useSelector } from 'react-redux' 
import { getAllProductCart } from '../../redux/actions/cartAction'
import { useEffect } from 'react'
const GetallProductCart = () => {

    const dispatch = useDispatch()   
 

    useEffect(() => {
        const get = async () => { 
            dispatch(getAllProductCart()) 
        }
        get()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const res = useSelector(state => state.cartReducer.allProudctCart)

    let count=0
    try {        
        if(res.numOfCartItems){ 
            count = res.numOfCartItems
        }
    } catch (error) {
        
    }

    let afterDiscount=0
    try {        
        if(res.data.totalAfterDiscount){ 
            afterDiscount = res.data.totalAfterDiscount
        }
    } catch (error) {
        
    }

    let couponName=''
    try {        
        if(res.data.coupon){ 
            couponName = res.data.coupon
        }
    } catch (error) {
        
    }
    
    let cartAllItems = []
    try {      
       if(res.data){
        cartAllItems = res.data
       }else{
        cartAllItems= []
        }
    } catch (error) {
       
    }
    let cartID = []
    try {      
       if(res.data._id){
        cartID = res.data._id
       }else{
        cartID= []
        }
    } catch (error) {
       
    }

    return [count, cartAllItems,couponName,afterDiscount,cartID]
}

export default GetallProductCart