import React, { useEffect, useState } from 'react'
import { useSelector , useDispatch} from 'react-redux'
import { getAllCategory } from '../../redux/actions/categoryAction'
import { getAllBrand } from '../../redux/actions/brandAction'
import ViewSearchProductHook from '../product/view-search-product-hook'

const SidebarSearchHook = () => {

   const [items, pagination, onPress, getProduct, results] = ViewSearchProductHook()
   const dispatch = useDispatch()
   useEffect(() => {
      const get =async () => {
         await dispatch(getAllCategory())
         await dispatch(getAllBrand())
      }
      get()
   // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [])
   const allCat = useSelector(state => state.allCategory.category)
   const allBrand = useSelector(state => state.allBrand.brand)

   let category =[];
   try {      
      if(allCat.data)
         category = allCat.data
   } catch (error) {
      
   }

   let brand =[];
try {   
   if(allBrand.data)
      brand = allBrand.data
} catch (error) {
   
}

      var quryCat = ""
      const [catChecked, setCatChecked] = useState([])
const ClickCat = (e) => {
   let value = e.target.value
   if(value === "0"){
      setCatChecked([])
   } else if(e.target.checked === true){
      setCatChecked([...catChecked, value])
   }
      else if(e.target.checked === false){
      const newArray = catChecked.filter((e) => e !== value)
      setCatChecked(newArray)
   }

}

useEffect(() => {
   quryCat = catChecked.map(valu => "category[in][]=" + valu).join("&")
   localStorage.setItem("catChecked", quryCat)
   setTimeout(() => {
      getProduct()
   }, 1000);
}, [catChecked])


var quryBrand = ""
const [brandChecked, setBrandChecked] = useState([])
const ClickBrand = (e) => {
   let value = e.target.value
   if(value === "0"){
      setBrandChecked([])
   } else if(e.target.checked === true){
      setBrandChecked([...brandChecked, value])
   }
      else if(e.target.checked === false){
      const newArray = brandChecked.filter((e) => e !== value)
      setBrandChecked(newArray)
   }
}

useEffect(() => {
   quryBrand = brandChecked.map(valu => "brand[in][]=" + valu).join("&")
   localStorage.setItem("brandChecked", quryBrand)
   setTimeout(() => {
      getProduct()
   }, 1000);
}, [brandChecked])

const [From, setPriceFrom] = useState(0)
const [To, setPriceTo] = useState(0)
   const priceFrom = (e) => {
      localStorage.setItem("priceFrom", e.target.value)
      setPriceFrom(e.target.value)
   }
   const priceTo = (e) => {
      localStorage.setItem("priceTo", e.target.value)
      setPriceTo(e.target.value)
   }

   useEffect(() => {
      setTimeout(() => {
         getProduct()
      }, 1000);
   }, [From, To])
   return [category, brand, ClickCat, ClickBrand, priceFrom, priceTo]
}

export default SidebarSearchHook
