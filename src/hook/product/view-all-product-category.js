import {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllProductsByCat } from '../../redux/actions/productsAction';

const ViewAllProductCategory = (catId) => {

    let limit = 1
    const dispatch = useDispatch()
 
    const getProduct = async() => {
       await dispatch(getAllProductsByCat(limit,'', catId))
    }
    useEffect(() => {
       getProduct()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const onPress = async(page) => {
        await dispatch(getAllProductsByCat( limit, page,catId))
    }

    const allProducts = useSelector(state => state.allproducts.allProductCategory)
 
 
    let items = []
    try{
    if(allProducts.data){
       items = allProducts.data
    }else{
       items=[]
    }
 } catch (e){}
 
 
    let pagination = []
    try{
    if(allProducts.paginationResult){
       pagination = allProducts.paginationResult.numberOfPages
    }else{
       pagination=[]
    }
    }catch(e){}
 
    return [items, pagination,onPress]
}

export default ViewAllProductCategory