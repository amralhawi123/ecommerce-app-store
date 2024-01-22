import React from 'react'
import { Button, Col, Modal, Row } from "react-bootstrap"; 
import deleteicon from "../../images/delete.png";
import editicon from "../../images/edit.png";
import DeleteCouponHook from '../../hook/coupon/delete-coupon-hook';
import { Link } from 'react-router-dom';

function AdminCouponcard({item}) { 
 const [OnhandleClick, show, handleClose,handleShow ] = DeleteCouponHook(item._id)
    const dateString = item.expire

const formatDate = (dateString) => {
  const options = { year: "numeric", month: "numeric", day: "numeric" }
  return new Date(dateString).toLocaleDateString(undefined, options)
}
  
   return (
      <div className="user-address-card my-3 px-3">
        <Row className="d-flex justify-content-between">
          <Col xs="6">
            <div className="p-2">اسم الكوبون: <span style={{
                color: "#979797",
                fontFamily: "Almarai",
                fontSize: "16px",
                fontWeight:"bold"
              }}
              className="mx-2">{item.name}</span></div>
          </Col>
          <Col xs="6" className="d-flex d-flex justify-content-end">
            <div className="d-flex p-2">
                <Link to={`/admin/editcoupon/${item._id}`} style={{textDecoration:'none'}}>
              <div className="d-flex mx-2">
              <img
                  alt=""
                  className="ms-1 mt-2"
                  src={editicon}
                  height="17px"
                  width="15px"
                />
                  <p className="item-delete-edit"> تعديل</p>
              </div>
                </Link>
              <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title><div className='font'>تأكيد الحذف</div></Modal.Title>
        </Modal.Header>
        <Modal.Body><div className='font'>هل تريد بالتأكيد الحذف؟</div></Modal.Body>
        <Modal.Footer>
          <Button className='font' variant="dark" onClick={handleClose}>
            تراجع
          </Button>
          <Button className='font' variant="danger" onClick={OnhandleClick}>
            حذف
          </Button>
        </Modal.Footer>
      </Modal>
              <div className="d-flex " onClick={handleShow}>
                <img
                  alt=""
                  className="ms-1 mt-2"
                  src={deleteicon}
                  height="17px"
                  width="15px"
                />
                <p className="item-delete-edit"> ازاله</p>
              </div>
            </div>
          </Col>
        </Row>
  
        <Row>
          <Col xs="12" className="d-flex">
            <div
              style={{
                color: "#555550",
                fontFamily: "Almarai",
                fontSize: "16px",
              }}>
              تاريخ الانتهاء: <span style={{
                color: "#979797",
                fontFamily: "Almarai",
                fontSize: "16px",
                fontWeight:"bold"
              }}
              className="mx-2">{formatDate(dateString)}</span>
            </div>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col xs="12" className="d-flex">
            <div
              style={{
                color: "#555550",
                fontFamily: "Almarai",
                fontSize: "16px",
              }}>
              نسبة الخصم: <span style={{
                color: "#979797",
                fontFamily: "Almarai",
                fontSize: "16px",
                fontWeight:"bold"
              }}
              className="mx-2">{item.discount}%</span>
            </div>
          </Col>
        </Row>

      </div>
    );
}

export default AdminCouponcard
