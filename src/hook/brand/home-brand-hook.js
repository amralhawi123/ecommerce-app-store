import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react'
import { getAllBrand } from '../../redux/actions/brandAction';

const HomeBrandHook = () => {

   const dispatch = useDispatch()
   useEffect(() => {
      dispatch(getAllBrand())
   // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [])

   const brand = useSelector(state => state.allBrand.brand)
   const loading = useSelector(state => state.allBrand.loading)
   
   return [brand, loading]
}
export default HomeBrandHook
