import {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';  
import { getAllCategory, getAllCategoryPage } from '../../redux/actions/categoryAction';

const ViewCategoryAdminHook = () => {

   const dispatch = useDispatch()
   useEffect(() => {
      dispatch(getAllCategory(10))
      
   // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [])

   const onPress = async(page) => {
      await dispatch(getAllCategoryPage(page ))
   }

   let items = []
   let pagination = []

   const allCategories = useSelector(state => state.allCategory.category)

try{
    if(allCategories.data){
        items = allCategories.data
    }else{
        items=[]
    }
    
    if(allCategories.paginationResult){
        pagination = allCategories.paginationResult.numberOfPages
    }else{
        pagination=[]
    }
} catch (e) {}

   return [items, pagination, onPress]
}

export default ViewCategoryAdminHook
