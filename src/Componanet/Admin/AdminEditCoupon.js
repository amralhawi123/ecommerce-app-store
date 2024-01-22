import React, { useRef } from 'react'
import { Col, Row } from 'react-bootstrap' 
import { ToastContainer} from 'react-toastify'; 
import GetallCoupons from '../../hook/coupon/get-all-coupons'; 
import { useParams } from 'react-router-dom';
import EditCouponHook from '../../hook/coupon/edit-coupon-hook';

const AdminEditCoupon = () => {
    const id = useParams()
  const [couponName, couponDate, couponValue, onChangName, onChangDate, onChangValue, onSubmit] = EditCouponHook(id.id)
  const [coupons, pagination, onPress, onecoupon] = GetallCoupons(id.id)

  const dataRef = useRef()

  return (
    <div>
             <Row className="justify-content-start ">
       <div className="admin-content-text pb-4">تعديل الكوبون</div>
       <Col sm="8">
          <input
          value={couponName}
          onChange={onChangName}
             type="text"
             className="input-form d-block mt-3 px-3"
             placeholder="اسم الكوبون"
          />
          <input 
          value={couponDate}
          onChange={onChangDate}
             type="text"
             className="input-form d-block mt-3 px-3"
             placeholder="تاريخ الانتهاء"
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
          <button onClick={onSubmit} className="btn-save d-inline mt-2 ">حفظ التعديل</button>
       </Col>
       </Row>
       <ToastContainer />
    </div>
 )
}

export default AdminEditCoupon