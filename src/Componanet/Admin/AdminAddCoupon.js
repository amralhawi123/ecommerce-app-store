import React, { useRef } from 'react'
import { Col, Row, Spinner } from 'react-bootstrap'
import AddCouponHook from '../../hook/coupon/add-coupon-hook'
import { ToastContainer} from 'react-toastify';
import AdminCouponcard from './AdminCouponCard';
import GetallCoupons from '../../hook/coupon/get-all-coupons';
import Pagenation from '../Utilty/Pagenation';

const AdminAddCoupon = () => {
  const [couponName, couponDate, couponValue, onChangName, onChangDate, onChangValue, onSubmit] = AddCouponHook()
  const [coupons,loading, pagination, onPress] = GetallCoupons()
  
  if(pagination)
  var pageCount = pagination
  else
       pageCount = 0

  const dataRef = useRef()

  return (
    <div>
             <Row className="justify-content-start ">
       <div className="admin-content-text pb-4">اضف كوبون جديد</div>
       <Col sm="8">
          <input
          value={couponName}
          onChange={onChangName}
             type="text"
             className="input-form d-block mt-3 px-3"
             placeholder="اسم الكوبون"
          />
          <input
          ref={dataRef}
          value={couponDate}
          onChange={onChangDate}
             type="text"
             className="input-form d-block mt-3 px-3"
             placeholder="تاريخ الانتهاء"
             onFocus={()=> dataRef.current.type = "date"}
             onBlur={()=> dataRef.current.type = "text"}
          />
          <input
          value={couponValue}
          onChange={onChangValue}
             type="number"
             className="input-form d-block mt-3 px-3"
             placeholder="نسبة الخصم"
          />
       </Col>
       </Row>
       <Row>
       <Col sm="8" className="d-flex justify-content-end ">
          <button onClick={onSubmit} className="btn-save d-inline mt-2 ">حفظ الكوبون</button>
       </Col>
       </Row>

       <Row>
       <Col sm="8">
         {
            loading === false ? (
               coupons ? (
                  coupons.map((item, index) => {
                     return (
                        <AdminCouponcard key={index} item={item}/>
                     )
                  }
                     )
               ) : (<h2>لا توجد كوبونات خصم</h2>)
            ) : (<Spinner animation="border" variant="primary" />)
         }
       </Col>
       </Row>
       {
         pageCount >= 1 ? <Pagenation pageCount={pageCount} onPress={onPress}/> : null
       }
       <ToastContainer />
    </div>
 )
}

export default AdminAddCoupon