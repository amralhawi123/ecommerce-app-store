import React from 'react'
import { useState } from 'react';
import {Button, Card, Col, Modal, Row } from "react-bootstrap";
import { useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import { deleteProduct } from '../../redux/actions/productsAction';

function AdminallProductCard({item}) {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch()

  const handleDelete = async() =>{
    await dispatch(deleteProduct(item._id))
    setShow(false)
    window.location.reload()
  }

   return (
      <Col xs="12" sm="6" md="5" lg="4" className="d-flex">

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

      <Card
        className="my-2"
        style={{
          width: "100%",
          height: "350px",
          borderRadius: "8px",
          border: "none",
          backgroundColor: "#FFFFFF",
        }}>
        <Row className="d-flex justify-content-center px-2">
          <Col className=" d-flex justify-content-between">
            <div onClick={handleShow} className="d-inline item-delete-edit">ازاله</div>
            <Link to={`/admin/editproduct/${item._id}`} style={{ textDecoration: "none" }}>
            <div className="d-inline item-delete-edit">تعديل</div>
            </Link>
          </Col>
        </Row>
        <Link to={`/products/${item._id}`} style={{ textDecoration: "none" }}>
          <Card.Img style={{ height: "228px", width: "100%" }} src={item.imageCover} />
          <Card.Body>
            <Card.Title>
              <div className="card-title">
                {item.title}
              </div>
            </Card.Title>
            <Card.Text>
              <div className="d-flex justify-content-between">
                <div className="card-rate">{item.ratingsQuantity}</div>
                <div className="d-flex align-items-center justify-content-between w-100">
                <div>
                  <div
                    className="card-price"
                    style={{ textDecorationLine: " line-through" }}
                  >
                    {item.price}
                  </div>
                  <div className="card-currency mx-1">جنيه</div>
                </div>
                <div>
                  <div className="card-price">{item.priceAfterDiscount}</div>
                  <div className="card-currency mx-1">جنيه</div>
                </div>
              </div>
              </div>
            </Card.Text>
          </Card.Body>
        </Link>
      </Card>
    </Col>
   );
}

export default AdminallProductCard
