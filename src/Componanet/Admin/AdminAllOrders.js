import React from 'react'
import { Row, Spinner } from 'react-bootstrap'
import AdminAllOrderItem from './AdminAllOrderItem';
import ViewAllorderHook from '../../hook/user/view-allorder-hook';
import Pagenation from '../Utilty/Pagenation';

function AdminAllOrders() {
   const [allOrderPayCash,pagination,results,onPress]=ViewAllorderHook()
   return (
      <div >
      <div className='admin-content-text'>إدارة جميع الطلبات</div>
      <Row >
      {
          allOrderPayCash.length >=1? (
            allOrderPayCash.map((order, index)=>{
              return <AdminAllOrderItem order={order} key={index}/>
            })
          ):(<Spinner animation="border" variant="primary" />)
        }
      {
        pagination >=2 ? (<Pagenation pageCount={pagination?pagination:0} onPress={onPress}/>):null
      }
      </Row>
    </div>
   )
}

export default AdminAllOrders
