import React from 'react'
import ContainerCategory from './../../Componanet/Catgory/ContainerCategory';
import Pagenation from './../../Componanet/Utilty/Pagenation';
import AllCategoryHook from '../../hook/category/all-categoryPage-hook';

function AllCategoryPage() {

      const [pageCount, loading, category, getPage] = AllCategoryHook()

   return (
      <div style={{minHeight:"570px"}}>
         <ContainerCategory data={category?category.data:null} loading={loading}/>
         {
            pageCount > 1 ? (<Pagenation pageCount={pageCount} onPress={getPage}/>) : null
         }
      </div>
   )
}

export default AllCategoryPage
