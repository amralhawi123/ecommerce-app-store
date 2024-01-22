import {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllCategory, getAllCategoryPage } from '../../redux/actions/categoryAction';


const AllCategoryHook = () => {

      const dispatch = useDispatch()
      useEffect(() => {
         dispatch(getAllCategory(6))
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [])
      const category = useSelector(state => state.allCategory.category)
      const loading = useSelector(state => state.allCategory.loading)


   let pageCount = 0;
   try {      
      if(category.paginationResult)
      pageCount = category.paginationResult.numberOfPages
   } catch (error) {
      
   }

      // at click pagination
      const getPage = (page) => {
         dispatch(getAllCategoryPage(page))
      }

      return [pageCount, loading, category, getPage]
}

export default AllCategoryHook
