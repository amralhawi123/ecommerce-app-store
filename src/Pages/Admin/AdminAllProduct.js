import React from 'react'
import { Row } from 'react-bootstrap';
import AdminallProductCard from '../../Componanet/Admin/AdminallProductCard';

function AdminAllProduct({products}) {

  return (
    <div >
      <div className='admin-content-text'>إدارة جميع المنتجات</div>
      <Row >
      {
        products ? (
          products.map((item, index) => <AdminallProductCard item={item} key={index}/>)
        ) : <h1>لا يوجد منتجات حتي الان</h1>
      }
      </Row>
    </div>
  )
}

export default AdminAllProduct
