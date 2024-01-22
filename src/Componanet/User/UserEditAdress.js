import React from 'react'
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { useParams } from 'react-router-dom';
import EditAddressHook from '../../hook/user/edit-address-hook';
import { ToastContainer} from 'react-toastify';

const UserEditAdress = () => {
  const {id} = useParams()
  const [addressName, addressDesc, addressPhone,addressCity,addressCode, onChangName,
     onChangDesc, onChangPhone,onChangCity,onChangCode , onSubmit]
   = EditAddressHook(id)
  

  return (
    <div>
      <Row className="justify-content-start ">
        <div className="admin-content-text pb-2">تعديل العنوان </div>
        <Col sm="8">
          <input
            value={addressName}
            onChange={onChangName}
            type="text"
            className="input-form d-block mt-3 px-3"
            placeholder="تسمية العنوان مثلا(المنزل - العمل)"
          />
          <textarea
            value={addressDesc}
            onChange={onChangDesc}
            className="input-form-area p-2 mt-3"
            rows="4"
            cols="50" 
            placeholder="العنوان بالتفصيل"
          />
          <input
            value={addressPhone}
            onChange={onChangPhone}
            type="text" 
            className="input-form d-block mt-3 px-3"
            placeholder="رقم الهاتف"
          />
            <input
            value={addressCity}
            onChange={onChangCity} 
            type="text"
            className="input-form d-block mt-3 px-3"
            placeholder="المدينة"
          />
          <input
            value={addressCode}
            onChange={onChangCode} 
            type="number"
            className="input-form d-block mt-3 px-3"
            placeholder="كود المدينة"
          />
        </Col>
      </Row>
      <Row>
        <Col sm="8" className="d-flex justify-content-end ">
          <button onClick={onSubmit} className="btn-save d-inline mt-2 ">حفظ تعديل العنوان</button>
        </Col>
      </Row>
      <ToastContainer />
    </div>
  );
};

export default UserEditAdress
