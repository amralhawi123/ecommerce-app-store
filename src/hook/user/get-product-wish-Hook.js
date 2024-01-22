import { useDispatch, useSelector } from 'react-redux';
import { getProductWishList } from '../../redux/actions/wishListAction';
import { useEffect ,useState} from 'react';

const GetProductWishHook = () => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true)
    const [items, setItems] = useState([])
  
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
  
   useEffect(() => { 
  if(loading === false){
  if(res){
    setItems(res.data)
  }
  }
  }, [loading]) 

  return [items]
}

export default GetProductWishHook