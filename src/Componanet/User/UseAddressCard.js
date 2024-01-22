import React from 'react'
import { Col, Row , Modal, Button} from "react-bootstrap";
import { Link } from "react-router-dom";
import deleteicon from "../../images/delete.png"; 
import editicon from "../../images/edit.png";
import DeleteAddressHook from '../../hook/user/delete-address-hook';
import { ToastContainer} from 'react-toastify';

function UseAddressCard({item}) {
  const [OnhandleClick, show, handleClose,handleShow ] = DeleteAddressHook(item._id)

   return (
      <div className="user-address-card my-3 px-3">
       <Row className="d-flex justify-content-between">
          <Col xs="6">
            <div className="p-2"> <span style={{
                color: "#979797",
                fontFamily: "Almarai",
                fontSize: "16px",
                fontWeight:"bold"
              }}
              className="mx-2">{item.alias}</span></div>
          </Col>
          <Col xs="6" className="d-flex d-flex justify-content-end">
            <div className="d-flex p-2">
                <Link to={`/user/edit-address/${item._id}`} style={{textDecoration:'none'}}>
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
                  style={{cursor:"pointer"}}
                />
                <p className="item-delete-edit"> ازاله</p>
              </div>
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
              العنوان بالتفصيل :
            </div>
  
            <div
              style={{
                color: "#979797",
                fontFamily: "Almarai",
                fontSize: "16px",
              }}
              className="mx-2">
              {item.details}
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
              رقم الهاتف:
            </div>
  
            <div
              style={{
                color: "#979797",
                fontFamily: "Almarai",
                fontSize: "16px",
              }}
              className="mx-2">
              {item.phone}
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
              اسم المدينة :
            </div>
  
            <div
              style={{
                color: "#979797",
                fontFamily: "Almarai",
                fontSize: "16px",
              }}
              className="mx-2">
              {item.city}
            </div>
          </Col>
        </Row>
        <ToastContainer />
      </div>
    );
}

export default UseAddressCard
