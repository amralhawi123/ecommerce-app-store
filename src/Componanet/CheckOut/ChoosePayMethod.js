import React, { useState } from 'react'
import { Col , Row} from "react-bootstrap";
import GetAllAddressHook from '../../hook/user/get-alladdress-hook';
import OrderPayCashHook from '../../hook/checkout/order-pay-cash-hook';
import { ToastContainer } from "react-toastify";
import OrderPayCardHook from '../../hook/checkout/order-pay-card-hook';
import { notify } from '../../hook/useNotification';

function ChoosePayMethod() {
   const [address] =GetAllAddressHook()
   const [handelSelectAddress,handelCreateOrderCash,adressDetails] =OrderPayCashHook()
   const [handelCreateOrderCARD] = OrderPayCardHook(adressDetails)

   const [type, setType] = useState('')
   const changeMathoud = (e) => {
       setType(e.target.value)
   }

   const handelPay = () => {
       if (type === "CARD") { 
           handelCreateOrderCARD()
       } else if (type === "CASH") { 
           handelCreateOrderCash();
       } else {
           notify("من فضلك اختر طريقة دفع", "warn")
       }
   }
      return (
         <div style={{minHeight:"580px"}}>
         <div className="admin-content-text pt-5">اختر طريقة الدفع</div>
         <div className="user-address-card my-3 px-3">
            <Row className="d-flex justify-content-between ">
               <Col xs="12" className="my-4">
               <input
               onChange={changeMathoud}
                  style={{cursor:"pointer"}}
                  name="group"
                  id="group1"
                  type="radio"
                  value="CARD"
                  className="mt-2"
               />
               <label className="mx-2" for="group1">
                  الدفع عن طريق الفيزا
               </label>
               </Col>
            </Row>
   
            <Row className="mt-3">
               <Col xs="12" className="d-flex">
               <input
               onChange={changeMathoud}
               style={{cursor:"pointer"}}
                  name="group"
                  id="group2"
                  type="radio"
                  value="CASH"
                  className="mt-2"
               />
               <label className="mx-2" for="group2">
                  الدفع عند الاستلام
               </label>
               </Col>
            </Row>
         <select name="adress" id="addres" onChange={handelSelectAddress} className="select my-3 px-2">
            <option value="0">اختر عنوان للشحن</option>
            {
            address?(
               address.map((item,index)=>{
                  return(
<option key={index} value={item._id}>{item.alias}</option>
                  )
               })
            ):(<h4>لاتوجد عناوين</h4>)
            }
                      
            </select>
         </div>
         <Row>
            <Col xs="12" className="d-flex justify-content-end">
               <div className="product-price d-inline   border">34000 جنية</div>
               <div onClick={handelPay} className="product-cart-add px-3 pt-2 d-inline me-2"> اتمام الشراء</div>
            </Col>
         </Row>
         <ToastContainer />
         </div>
      );
}

export default ChoosePayMethod
