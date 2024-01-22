import mobile from '../../images/mobile.png'
import {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getOneProduct, getProductLike } from './../../redux/actions/productsAction';
import { getOneCategory } from '../../redux/actions/categoryAction';
import { getOneBrand } from '../../redux/actions/brandAction';

const ViewProductDetailsHook = (prodID) => {

   const dispatch = useDispatch()
   useEffect(() => {
      dispatch(getOneProduct(prodID))
   // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [])

   const oneProduct = useSelector(state => state.allproducts.oneProduct)
  
   let item = []
   try {      
      if(oneProduct.data){
         item = oneProduct.data
      }else{
         item=[]
      }
   } catch (error) {
      
   }

   useEffect(() => {
      if(item.category)
      dispatch(getOneCategory(item.category))
      if(item.category)
      dispatch(getProductLike(item.category))
      if(item.brand)
      dispatch(getOneBrand(item.brand))
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [item])
   
   const oneCategory = useSelector(state => state.allCategory.oneCategory)
   const oneBrand = useSelector(state => state.allBrand.oneBrand)
   const productLike = useSelector(state => state.allproducts.ProducLike)
   
   let cat = []
   try {      
      if(oneCategory.data){
         cat = oneCategory.data
      }else{
         cat=[]
      }
   } catch (error) {
      
   }

   
   let brand = []
   try {      
      if(oneBrand.data){
         brand = oneBrand.data
      }else{
         brand=[]
      }
   } catch (error) {
      
   }

   // to view inmage
   let images = []
   try {      
      if(item.images){
        images = item.images.map((img) => {
         return {
            original:img
         }})
      } else {
        images = [{original: `${mobile}`}]
      }
   } catch (error) {
      
   }

   let prod = []
   try {      
      if(productLike){
         prod = productLike.data
   } else {
      prod = []
   }
   } catch (error) {
      
   }

   return [item, images, cat, brand, productLike, prod]
}

export default ViewProductDetailsHook
