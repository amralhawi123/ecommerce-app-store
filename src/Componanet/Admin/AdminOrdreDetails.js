import React from 'react'
import { Col, Row } from "react-bootstrap";
import { useParams } from 'react-router-dom';
import GetOneOrderHook from '../../hook/admin/get-one-order-hook'; 
import UserAllOrderItem from '../User/UserAllOrderItem';
import ChangeOrderStatusHook from '../../hook/admin/change-order-status-hook';
import { ToastContainer} from 'react-toastify';
import ChangeDeliverStatusHook from '../../hook/admin/change-deliver-status-hook';

const AdminOrdreDetails = () => {
   const {id} = useParams()
   const [spcificOrder] =GetOneOrderHook(id) 
   const [onChangePaid,handleChangeOrder] =ChangeOrderStatusHook(id) 
   const [onChangeDeliverd,handleChangeDeliver] =ChangeDeliverStatusHook(id) 

   const formatDate = (dateString) => {
      const options = { year: "numeric", month: "numeric", day: "numeric" }
      return new Date(dateString).toLocaleDateString(undefined, options)
    }
    
   return (
      <div>
         <div className='admin-content-text'> تم بتاريخ _ {formatDate(spcificOrder.createdAt)}</div>
         <Row className="justify-content-center mt-4 p-3 user-data-admin">
                  <UserAllOrderItem order={spcificOrder}/>
               </Row>
         <Row className="justify-content-center mt-4 user-data">
         <Col xs="12" className=" d-flex">
            <div className="admin-content-text py-2">تفاصيل العميل</div>
         </Col>
         <Col xs="12" className="d-flex">
            <div
               style={{
               color: "#555550",
               fontFamily: "Almarai",
               fontSize: "16px",
               }}>
               الاسم:
            </div>

            <div
               style={{
               color: "#979797",
               fontFamily: "Almarai",
               fontSize: "16px",
               }}
               className="mx-2">
               {spcificOrder.user?spcificOrder.user.name : ''}
            </div>
         </Col>

         <Col xs="12" className="d-flex">
            <div
               style={{
               color: "#555550",
               fontFamily: "Almarai",
               fontSize: "16px",
               }}>
               رقم الهاتف:
            </div>

            <div
               style={{
               color: "#979797",
               fontFamily: "Almarai",
               fontSize: "16px",
               }}
               className="mx-2">
               {spcificOrder.user?spcificOrder.user.phone:''}
            </div>
         </Col>
         <Col xs="12" className="d-flex">
            <div
               style={{
               color: "#555550",
               fontFamily: "Almarai",
               fontSize: "16px",
               }}>
               الايميل:
            </div>

            <div
               style={{
               color: "#979797",
               fontFamily: "Almarai",
               fontSize: "16px",
               }}
               className="mx-2">
               {spcificOrder.user?spcificOrder.user.email:''}      
                     </div>
         </Col>
         <div className="d-flex mt-2 justify-content-center">
            <div className="d-flex justify-content-center">
               <select
                  name="pay"
                  id="paid"
                  onChange={onChangePaid}
                  className="select input-form-area mt-1  text-center px-4">
                  <option value="0">حالة الدفع</option>
                  <option value="true">تم الدفع</option>
                  <option value="false">لم يتم الدفع</option> 
               </select>
               <button onClick={handleChangeOrder} className="btn-a px-3 d-inline mx-1 ">حفظ </button>
               </div>
            <div className="d-flex justify-content-center mx-2">
               <select
                  name="dliver"
                  id="dliver"
                  onChange={onChangeDeliverd}
                  className="select input-form-area mt-1  text-center px-4">
                  <option value="0">حالة التوصيل</option>
                  <option value="true">تم الدفع</option>
                  <option value="false">لم يتم الدفع</option>
               </select>
               <button onClick={handleChangeDeliver} className="btn-a px-3 d-inline mx-1 ">حفظ </button>
               </div>
                  
         </div>
         </Row>
         <ToastContainer />
      </div>
   )
}

export default AdminOrdreDetails
