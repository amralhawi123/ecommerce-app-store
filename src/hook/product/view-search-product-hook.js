import {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllProductSearch, getAllProducts } from '../../redux/actions/productsAction';
import { getAllProductsPage } from '../../redux/actions/productsAction';
import NavbarSearchHook from "../../hook/search/navbar-search-hook";

const ViewSearchProductHook = () => {

   let limit = 10
   const dispatch = useDispatch()

   const getProduct = async() => {
      getStorag()
      sortData()
      await dispatch(getAllProductSearch(`sort=${sort}&limit=${limit}&keyword=${word}&${quryCat}&${quryBrand}${priceFromString}${priceToString}`))
   }
   useEffect(() => {
      getProduct()
   // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [])

   const onPress = async(page) => {
      getStorag()
      sortData()
      await dispatch(getAllProductSearch(`sort=${sort}&limit=${limit}&page=${page}&keyword=${word}&${quryCat}&${quryBrand}${priceFromString}${priceToString}`))
   }
   
   let priceFromString = "", priceToString = ""
   let word = "", quryCat = "", quryBrand="", priceFrom='', priceTo=''
   const getStorag =() => {
      if(localStorage.getItem("searchWord") != null){
         word = localStorage.getItem("searchWord")
      }
      if(localStorage.getItem("catChecked") != null){
         quryCat = localStorage.getItem("catChecked")
      }
      if(localStorage.getItem("brandChecked") != null){
         quryBrand = localStorage.getItem("brandChecked")
      }
      if(localStorage.getItem("priceFrom") != null){
         priceFrom = localStorage.getItem("priceFrom")
      }
      if(localStorage.getItem("priceTo") != null){
         priceTo = localStorage.getItem("priceTo")
      }

      if(priceFrom === "" || priceFrom <= 0){
         priceFromString = ""
      } else{
         priceFromString = `&price[gt]=${priceFrom}`
      }

      if(priceTo === "" || priceTo <= 0){
         priceToString = ""
      } else{
         priceToString = `&price[lte]=${priceTo}`
      }
   }


   const allProducts = useSelector(state => state.allproducts.allProducts)


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

   let results = 0
   try{
   if(allProducts.results){
      results = allProducts.results
   }else{
      results=0
   }
   }catch(e){}


   let sortType= "", sort;
   const sortData = () => {
      if(localStorage.getItem("sortType") !== null){
         sortType = localStorage.getItem("sortType")
      } else {
         sortType = ""
      }

      if(sortType === "السعر من الاقل للاعلي"){
         sort = "+price"
      }
      else if(sortType === "السعر من الاعلي للاقل"){
         sort = "-price"
      }
      else if(sortType === ""){
         sort = ""
      }
      else if(sortType === "الاكثر مبيعا"){
         sort = "-sold"
      }
      else if(sortType === "الاعلي تقييما"){
         sort = "-ratingsQuantity"
      }
   }
   return [items, pagination, onPress, getProduct, results]
}

export default ViewSearchProductHook
