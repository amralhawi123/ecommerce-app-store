import React, { useEffect } from 'react'
import { Col, Row } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom'; 
import ClearAllCartHook from '../../hook/cart/clear-all-cart-hook';
import { ToastContainer } from "react-toastify";
import ApplyCouponHook from '../../hook/cart/apply-coupone-hook';
import { notify } from '../../hook/useNotification';

function CartCheckOut({couponName,afterDiscount,cartAllItems}) {

  const navigate = useNavigate()
const [handleDeleteCart] = ClearAllCartHook()
const [onSubmit,coupon,onChangName] = ApplyCouponHook()

    useEffect(()=>{
    if(couponName){
      onChangName(couponName)
    }
    },[couponName])


    const handleCheckout=()=>{ 
      if(cartAllItems.products.length >=1){
        navigate("/order/paymethoud")
      }else{
        notify('من فضلك اضف منتج الي العربة اولا', 'warn')
      }
      
    }
   return (
      <Row className="my-1 d-flex justify-content-center cart-checkout pt-3">
        <Col xs="12" className="d-flex  flex-column  ">
          <div className="d-flex  ">
            <input
            value={coupon}
            onChange={(e) => onChangName(e.target.value)}
              className="copon-input d-inline text-center fs-6"
              placeholder="كود الخصم"
            />
            <button className="copon-btn d-inline fs-6" onClick={onSubmit}>تطبيق</button>
          </div>
          <div className="product-price d-inline w-100 my-3 fs-6 border">قبل الخصم :- {cartAllItems.totalCartPrice || 0} جنية</div>
          {
            afterDiscount ? (
              <div className="product-price d-inline w-100 mb-2 fs-6 border">بعد الخصم :- {cartAllItems.totalAfterDiscount || 0} جنية</div>
            ) : null
          }
          <button className="product-cart-add w-100 fs-6 px-2 my-3" onClick={handleDeleteCart}> مسح العربة</button>
            
            <button onClick={handleCheckout} className="product-cart-add w-100 fs-6 px-2"> اتمام الشراء</button>
        </Col>
        <ToastContainer />
      </Row>
    );
}

export default CartCheckOut
