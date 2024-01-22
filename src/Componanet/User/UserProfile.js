import React from "react";
import { Row, Col, Modal, Button } from "react-bootstrap";
import editicon from "../../images/edit.png";
import ProfileHook from "../../hook/user/profile-hook";
import { ToastContainer} from 'react-toastify';
import ChangePasswordHook from "../../hook/user/change-password-hook";

const UserProfile = () => {

  const  [user, show, handleClose, handleShow, OnhandleClick, onChangName,onChangEmil,onChangPhone
    ,name, phone, email] = ProfileHook()
    
  const  [oldPassword, newPassword, confirmPssword, onChangConfirmPassword, onChangNewPassword, 
    onChangOldPassword, changePassword] = ChangePasswordHook()

  return (
    <div>
      <div className="admin-content-text">الصفحه الشخصية</div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title><div className='font'>تعديل البيانات الشخصية</div></Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <input
              value={name}
              onChange={onChangName}
              type="text"
              className="input-form d-block font mt-1 px-3"
              placeholder="اسم المستخدم"
            />
        <input
              value={phone}
              onChange={onChangPhone}
              type="number"
              className="input-form d-block font mt-1 px-3"
              placeholder="رقم الهاتف"
            />
        <input
              value={email}
              onChange={onChangEmil}
              type="email"
              className="input-form d-block font mt-1 px-3"
              placeholder="الايميل"
            />
        </Modal.Body>
        <Modal.Footer>
          <Button className='font' variant="dark" onClick={handleClose}>
            تراجع
          </Button>
          <Button className='font' variant="danger" onClick={OnhandleClick}>
            حفظ التعديل
          </Button>
        </Modal.Footer>
      </Modal>

      <div className="user-address-card2 my-3 px-2">
        <Row className="d-flex justify-content-between pt-2">
          <Col xs="6" className="d-flex">
            <div className="p-2">الاسم:</div>
            <div className="p-1 item-delete-edit">{user.name}</div>
          </Col>
          <Col xs="6" className="d-flex justify-content-end">
            <div className="d-flex mx-2" onClick={handleShow}>
            <img
                  alt=""
                  className="ms-1 mt-2"
                  src={editicon}
                  height="17px"
                  width="15px"
                  style={{cursor:"pointer"}}
                />
              <p className="item-delete-edit"> تعديل</p>
            </div>
          </Col>
        </Row>

        <Row className="">
          <Col xs="12" className="d-flex">
            <div className="p-2">رقم الهاتف:</div>
            <div className="p-1 item-delete-edit">{user.phone}</div>
          </Col>
        </Row>
        <Row className="">
          <Col xs="12" className="d-flex">
            <div className="p-2">الايميل:</div>
            <div className="p-1 item-delete-edit">{user.email}</div>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col xs="10" sm="8" md="6" className="">
            <div className="admin-content-text">تغير كملة المرور</div>
            <input
              value={oldPassword}
              onChange={onChangOldPassword}
              type="password"
              className="input-form d-block mt-1 px-3"
              placeholder="ادخل كلمة المرور القديمة"
            />
            <input
              value={newPassword}
              onChange={onChangNewPassword}
              type="password"
              className="input-form d-block mt-3 px-3"
              placeholder="ادخل كلمة المرور الجديده"
            />
            <input
              value={confirmPssword}
              onChange={onChangConfirmPassword}
              type="password"
              className="input-form d-block mt-3 px-3"
              placeholder="تأكيد كلمة المرور الجديده"
            />
          </Col>
        </Row>

        <Row>
          <Col xs="10" sm="8" md="6" className="d-flex justify-content-end ">
            <button onClick={changePassword} className="btn-save d-inline mt-2 ">حفظ كلمة السر</button>
          </Col>
        </Row>
      </div>
      <ToastContainer />
    </div>
  );
};

export default UserProfile
