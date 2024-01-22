
import { useDispatch, useSelector } from 'react-redux' 
import { useEffect, useState } from 'react'
import { getAllCouponPage, getAllCoupons } from '../../redux/actions/couponAction'

const GetallCoupons = (id) => {
    const dispatch = useDispatch()
    const [loading,setLoading]=useState(true)

    useEffect(() => {
      setLoading(true)
      dispatch(getAllCoupons()) 
      setLoading(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const onPress = async(page) => { 
            dispatch(getAllCouponPage(page))
         }

    const allCoupons = useSelector(state => state.couponReducer.allcoupons)
     
    let coupons = []
    try {      
       if(allCoupons.data){
        coupons = allCoupons.data
       }else{
           coupons= []
        }
    } catch (error) {
       
    }

    let pagination = []
    try{
    if(allCoupons.paginationResult){
       pagination = allCoupons.paginationResult.numberOfPages
    }else{
       pagination=[]
    }
    }catch(e){} 
    return [coupons,loading, pagination, onPress]
}

export default GetallCoupons