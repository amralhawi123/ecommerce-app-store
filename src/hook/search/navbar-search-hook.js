import React from 'react'
import { useState, useEffect} from 'react'
import ViewSearchProductHook from '../product/view-search-product-hook' 
import ViewSearchCategoryHook from '../category/view-search-category-hook'

function NavbarSearchHook() { 
   const [, , , getProduct] = ViewSearchProductHook()
   const [, , , getCategory, ] = ViewSearchCategoryHook()
   const [searchWord, setsearchWord] = useState('')

   const OnChangeSearch =(e) => {
      localStorage.setItem("searchWord", e.target.value)
      setsearchWord(e.target.value)
   }

   useEffect(() => {
   setTimeout(() => { 
      getProduct()
   }, 1000);

   setTimeout(() => { 
      getCategory()
   }, 1000);

   }, [searchWord])
   
   return [searchWord, OnChangeSearch]
}

export default NavbarSearchHook
