import React from 'react'
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import AddAddressHook from '../../hook/user/add-address-hook';
import { ToastContainer} from 'react-toastify';
const UserAddAdress = () => {

  const [onChangName,onChangDesc,onChangPhone, onChangCity,onChangCode,addressName,addressDesc, addressPhone,
    addressCity, addressCode, Loading, onSubmit ] = AddAddressHook()

  return (
    <div>
      <Row className="justify-content-start ">
        <div className="admin-content-text pb-2">اضافة عنوان جديد</div>
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
            type="number"
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
          <button onClick={onSubmit} className="btn-save d-inline mt-2 ">اضافة عنوان</button>
        </Col>
      </Row>
      <ToastContainer />
    </div>
  );
}

export default UserAddAdress
