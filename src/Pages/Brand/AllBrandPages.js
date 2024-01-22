import React from 'react'
import Pagenation from './../../Componanet/Utilty/Pagenation';
import ContainerBrand from './../../Componanet/Brand/ContainerBrand';
import AllBrandHook from '../../hook/brand/all-brandPage-hook';

const AllBrandPages = () => {

  const [pageCount, loading, brand, getPage] = AllBrandHook()
  return (
    <div style={{minHeight:"570px"}}>
    <ContainerBrand loading={loading} data={brand.data}/>
    {
              pageCount > 1 ? (<Pagenation pageCount={pageCount} onPress={getPage}/>) : null
          }
</div>
  )
}

export default AllBrandPages
