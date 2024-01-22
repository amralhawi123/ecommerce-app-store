import React from 'react'
import { Row } from 'react-bootstrap';
import AdminAllCategoryCard from './AdminAllCategoryCard';

function AdminAllCategorise({categories}) {
    const colors = ["#F4DBA5", "#0034FF", "#FFD3E8", "#55CFDF", "#FF6262", "#F4DBA5", "#0034FF", "#FF6262"]
  return (
    <div >
      <div className='admin-content-text'>إدارة جميع التصنيفات</div>
      <Row >
      {
        categories ? (
            categories.map((item, index) => <AdminAllCategoryCard background={colors[Math.floor(Math.random() * 5)+1]} item={item} key={index}/>)
        ) : <h1>لا يوجد تصنيفات حتي الان</h1>
      }
      </Row>
    </div>
  )
}

export default AdminAllCategorise