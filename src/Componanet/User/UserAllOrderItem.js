import React from 'react'
import UserAllOederCard from './UserAllOederCard';
import { Col, Row, Spinner } from "react-bootstrap";

const UserAllOrderItem = ({order}) => {
  
   return (
      <div className="user-order-admin mb-3">
      <Row>
        <div className="py-2 order-title">طلب رقم #{order.id}</div>
      </Row>
      {
        order.cartItems?
        order.cartItems.length >=1 ? (
          order.cartItems.map((item, index)=>{
            return <UserAllOederCard item={item} key={index}/>
          })
        ):null:<Spinner animation="border" variant="primary" />
      }
         <Row className="d-flex justify-content-between">
        <Col xs="6" className="d-flex justify-content-between">
          <div>
            <div className="d-inline">التوصيل:</div>
            <div className="d-inline mx-2 stat">{order.isDelivered === true ? "تم التوصيل":"قيد التنفيذ"}</div>
          </div>
          <div>
            <div className="d-inline">الدفع:</div>
            <div className="d-inline mx-2 stat">{order.isPaid === true ? "تم الدفع":"لم يتم الدفع"}</div>
          </div>
          <div>
            <div className="d-inline">طريقة الدفع:</div>
            <div className="d-inline mx-2 stat">{order.paymentMethodType === "cash" ? "كاش":"بطاقة ائتمانية"}</div>
          </div>
        </Col>
        <Col xs="6" className="d-flex justify-content-end">
          <div>
            <div className="barnd-text">{order.totalOrderPrice} جنيه</div>
          </div>
        </Col>
      </Row>
      </div>
   )
}

export default UserAllOrderItem
