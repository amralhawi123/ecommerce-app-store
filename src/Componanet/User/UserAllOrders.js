import React from 'react'
import UserAllOrderItem from './UserAllOrderItem';
import { Row, Spinner } from 'react-bootstrap'; 
import ViewAllorderHook from '../../hook/user/view-allorder-hook';
import Pagenation from '../Utilty/Pagenation';

const UserAllOrders = () => {
  const [allOrderPayCash,pagination,results,onPress]=ViewAllorderHook()

  return (
    <div>
      <div className="admin-content-text pb-4"> عدد الطلبات #{results}</div>
      <Row className='justify-content-between'>
        {
          allOrderPayCash.length >=1? (
            allOrderPayCash.map((order, index)=>{
              return <UserAllOrderItem order={order} key={index}/>
            })
          ):(<Spinner animation="border" variant="primary" />)
        }
      </Row>
      {
        pagination >=2 ? (<Pagenation pageCount={pagination?pagination:0} onPress={onPress}/>):null
      }
      
    </div>
  )
}

export default UserAllOrders
