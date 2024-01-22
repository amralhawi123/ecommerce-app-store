import React from 'react'
import { Row } from 'react-bootstrap'; 
import AdminAllBrandCard from '../../Componanet/Admin/AdminAllBrandCard';

function AdminAllBrands({brands}) {  
  return (
    <div >
      <div className='admin-content-text'>إدارة جميع الماركات</div>
      <Row >
      {
        brands ? (
            brands.map((item, index) => <AdminAllBrandCard item={item} key={index}/>)
        ) : <h1>لا يوجد ماركات حتي الان</h1>
      }
      </Row>
    </div>
  )
}

export default AdminAllBrands