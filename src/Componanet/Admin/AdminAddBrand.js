import React from 'react'
import { Row, Col, Spinner } from "react-bootstrap";
import AddBrandPageHook from '../../hook/brand/add-brandPage-hook';
import { ToastContainer} from 'react-toastify';

const AdminAddBrand = () => {

   const [img, name,loading, isPresss, onImageChange, handleClick, onChangName] = AddBrandPageHook()
   return (
      <div>
               <Row className="justify-content-start ">
         <div className="admin-content-text pb-4">اضف ماركه جديده</div>
         <Col sm="8">
            <div className="text-form pb-2">صوره الماركه</div>
            <div>
               <label for="upload-photo">
               <img src={img} alt="fzx" height="100px" width="120px" style={{cursor:"pointer"}}/>
               </label>
               <input type="file" name="photo" onChange={onImageChange} id="upload-photo"/>
            </div>
            <input
            onChange={onChangName}
            value={name}
               type="text"
               className="input-form d-block mt-3 px-3"
               placeholder="اسم الماركة"
            />
         </Col>
         </Row>
         <Row>
         <Col sm="8" className="d-flex justify-content-end ">
            <button onClick={handleClick} className="btn-save d-inline mt-2 ">حفظ التعديلات</button>
         </Col>
         </Row>
         {
            isPresss? loading? <Spinner animation="border" variant="primary" />:<h3>تم الانتهاء</h3>:null
         }
         <ToastContainer />
      </div>
   )
}

export default AdminAddBrand
