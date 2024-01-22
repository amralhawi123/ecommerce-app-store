import { useDispatch, useSelector } from 'react-redux';
import { getProductWishList } from '../../redux/actions/wishListAction';
import { useEffect, useState } from 'react'

const CardContainerHook = () => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true)
    const [favProd, setFavProd] = useState([])
 
    useEffect(() => {
       const get = async () => {
          setLoading(true)
          await dispatch(getProductWishList())
          setLoading(false)
       }
      get()
   // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [])
  
   const res = useSelector(state => state.addProductToWishList.getAllWishList)

    useEffect(()=>{
        if(loading === false){
            // if(res.data.length >= 1){ 
            //    setFavProd(res.data.map(item => item._id))
            // }else{setFavProd([])}
        }
    }, [loading])

    return [favProd]
}

export default CardContainerHook