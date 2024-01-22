import {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllCategorySearch } from '../../redux/actions/categoryAction' 

const ViewSearchCategoryHook = () => {

   let limit = 10
   const dispatch = useDispatch()

   const getCategory = async() => {
      getStorag() 
      await dispatch(getAllCategorySearch(`limit=${limit}&keyword=${word}`))
   }
   useEffect(() => {
    getCategory()
   // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [])

   const onPress = async(page) => {
      getStorag()
      await dispatch(getAllCategorySearch(`limit=${limit}&page=${page}&keyword=${word}`))
   }
   
   let word = ""
   const getStorag =() => {
      if(localStorage.getItem("searchWord") != null){
         word = localStorage.getItem("searchWord")
      }
   }


   const allCategories = useSelector(state => state.allCategory.category)


   let items = []
   try{
   if(allCategories.data){
      items = allCategories.data
   }else{
      items=[]
   }
} catch (e){}


   let pagination = []
   try{
   if(allCategories.paginationResult){
      pagination = allCategories.paginationResult.numberOfPages
   }else{
      pagination=[]
   }
   }catch(e){}

   let results = 0
   try{
   if(allCategories.results){
      results = allCategories.results
   }else{
      results=0
   }
   }catch(e){}



   return [items, pagination, onPress, getCategory, results]
}

export default ViewSearchCategoryHook
