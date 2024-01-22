import {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';   
import { getAllBrand, getAllBrandPage } from '../../redux/actions/brandAction';

const ViewBrandAdminHook = () => {

   const dispatch = useDispatch()
   useEffect(() => {
      dispatch(getAllBrand(10))
      
   // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [])

   const onPress = async(page) => {
      await dispatch(getAllBrandPage(page ))
   }

   let items = []
   let pagination = []

   const allBrands = useSelector(state => state.allBrand.brand)

try{
    if(allBrands.data){
        items = allBrands.data
    }else{
        items=[]
    }
    
    if(allBrands.paginationResult){
        pagination = allBrands.paginationResult.numberOfPages
    }else{
        pagination=[]
    }
} catch (e) {} 
   return [items, pagination, onPress]
}

export default ViewBrandAdminHook
