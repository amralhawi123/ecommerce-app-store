import {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from './../../redux/actions/productsAction';

const ViewHomeProductHook = () => {

   const dispatch = useDispatch()
   useEffect(() => {
      dispatch(getAllProducts())
   // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [])

   const allProducts = useSelector(state => state.allproducts.allProducts)

   let items = []
   try {      
      if(allProducts.data){
         items = allProducts.data.slice(0,4)
      }else{
         items= []
      }
   } catch (error) {
      
   }

   return [items]
}

export default ViewHomeProductHook