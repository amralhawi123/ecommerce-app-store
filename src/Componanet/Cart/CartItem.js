import React from 'react'
import { Button, Col, Modal, Row } from 'react-bootstrap';
import mobile from "../../images/mobile.png";
import deleteicon from "../../images/delete.png";
import DeleteCartItemHook from '../../hook/cart/delete-cartItem-hook';
import UpdateCartItemHook from '../../hook/cart/update-cartItem-hook';
import { ToastContainer } from "react-toastify";

function CartItem({item}) {  
  const [handleDelete,handleShow, show, handleClose] = DeleteCartItemHook(item._id)
  const [OnChangeCount,newCount,  onSubmit] = UpdateCartItemHook(item)
   return (
      <Col xs="12" className="cart-item-body my-2 d-flex px-2">
                <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title><div className='font'>تأكيد الحذف</div></Modal.Title>
        </Modal.Header>
        <Modal.Body><div className='font'>هل تريد بالتأكيد الحذف؟</div></Modal.Body>
        <Modal.Footer>
          <Button className='font' variant="dark" onClick={handleClose}>
            تراجع
          </Button>
          <Button className='font' variant="danger" onClick={handleDelete}>
            حذف
          </Button>
        </Modal.Footer>
      </Modal>
        <img width="160px" height="197px" src={`http://127.0.0.1:8000/products/${item.product.imageCover || mobile}`} alt="" />
        <div className="w-100 mx-5">
          <Row className="justify-content-between">
            <Col sm="12" className=" d-flex flex-row justify-content-between">
              <div className="d-inline pt-2 cat-text">{item.product.category.name}</div>
              <div className="d-flex pt-2 " style={{ cursor: "pointer" }} onClick={handleShow}>
                <img src={deleteicon} alt="" width="20px" height="24px" />
                <div className="cat-text d-inline me-2">ازاله</div>
              </div>
            </Col>
          </Row>
          <Row className="justify-content-center mt-2">
            <Col sm="12" className=" d-flex flex-row justify-content-start">
              <div className="d-inline pt-2 cat-title">
                {item.product.title}
              </div>
              <div className="d-inline pt-2 cat-rate me-2">{item.product.ratingsAverage}</div>
            </Col>
          </Row>
          <Row>
            <Col sm="12" className="mt-1">
              <div className="cat-text d-inline">الماركة :</div>
                      <div className="barnd-text d-inline mx-1">{item.product.brand?item.product.brand.name:''} </div>
            </Col>
          </Row>
          <Row>
            <Col sm="12" className="mt-1 d-flex">
                <div 
                className="color ms-2 "
                style={{ backgroundColor: item.color }}></div>
            </Col>
          </Row>
  
          <Row className="justify-content-between">
            <Col sm="12" className=" d-flex flex-row justify-content-between">
              <div className="d-inline pt-2 d-flex">
                <div className="cat-text  d-inline">الكميه</div>
                <input
                value={newCount}
                onChange={OnChangeCount}
                  className="mx-2 text-center"
                  type="number"
                  style={{ width: "60px", height: "40px" }}
                />
                <button className="btn btn-dark" onClick={onSubmit} >تطبيق</button>
              </div>
              <div className="d-inline pt-2 barnd-text">{item.price} جنية</div>
            </Col>
          </Row>
        </div>
        <ToastContainer />
      </Col>
    );
}

export default CartItem
