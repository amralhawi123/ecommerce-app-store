import React from 'react'
import { useState } from 'react';
import {Button, Card, Col, Modal, Row } from "react-bootstrap";
import { useDispatch } from 'react-redux';
import { Link } from "react-router-dom";  
import { deleteBrand } from '../../redux/actions/brandAction';

const AdminAllBrandCard = ({item}) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    const dispatch = useDispatch()
  
    const handleDelete = async() =>{
      await dispatch(deleteBrand(item._id))
      setShow(false)
      window.location.reload()
    }
  
     return (
        <Col xs="12" sm="6" md="5" lg="4" className="d-flex mb-5">
  
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
  <Col
         xs="6"
         sm="6"
         md="4"
         lg="2"
         className="my-3  d-flex justify-content-center w-100 ">

         <Card
         className="my-1"
         style={{
            width: "100%",
            height: "151px",
            borderRadius: "8px",
            border: "none",
            backgroundColor: "#FFFFFF",
         }}>
                <Row className="d-flex justify-content-center px-3">
            <Col className=" d-flex justify-content-between">
              <div onClick={handleShow} className="d-inline item-delete-edit">ازاله</div>
              <Link to={`/admin/editproductcategories/${item._id}`} style={{ textDecoration: "none" }}>
              <div className="d-inline item-delete-edit">تعديل</div>
              </Link>
            </Col>
          </Row>
         <Card.Img style={{ width: "100%", height: "151px" }} src={item.image} />
         </Card>
      </Col>
      </Col>
     );
  }

export default AdminAllBrandCard