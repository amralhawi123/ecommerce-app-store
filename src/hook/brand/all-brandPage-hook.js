import {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllBrand, getAllBrandPage } from './../../redux/actions/brandAction';


const AllBrandHook = () => {

      const dispatch = useDispatch()
      useEffect(() => {
         dispatch(getAllBrand(6))
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [])
      const brand = useSelector(state => state.allBrand.brand)
      const loading = useSelector(state => state.allBrand.loading)


   let pageCount = 0;
   if(brand.paginationResult)
      pageCount = brand.paginationResult.numberOfPages

      // at click pagination
      const getPage = (page) => {
         dispatch(getAllBrandPage(page))
      }

      return [pageCount, loading, brand, getPage]
}

export default AllBrandHook
