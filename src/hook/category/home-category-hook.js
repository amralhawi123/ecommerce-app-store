import { useDispatch, useSelector } from 'react-redux';
import { getAllCategory } from '../../redux/actions/categoryAction';
import { useEffect } from 'react'

const HomeCategoryHook = () => {
   
   const dispatch = useDispatch()
   useEffect(() => {
      dispatch(getAllCategory())
   // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [])
   const category = useSelector(state => state.allCategory.category)
   const loading = useSelector(state => state.allCategory.loading)
   const colors = ["#F4DBA5", "#0034FF", "#FFD3E8", "#55CFDF", "#FF6262", "#F4DBA5"]
   
   return [colors, category, loading]
}

export default HomeCategoryHook
