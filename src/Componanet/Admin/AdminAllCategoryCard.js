import React from 'react'
import { useState } from 'react';
import {Button, Col, Modal, Row } from "react-bootstrap";
import { useDispatch } from 'react-redux';
import { Link } from "react-router-dom"; 
import { deleteCategory } from '../../redux/actions/categoryAction';

const AdminAllCategoryCard = ({item, background, img, title}) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    const dispatch = useDispatch()
  
    const handleDelete = async() =>{
      await dispatch(deleteCategory(item._id))
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
    className="my-5 d-flex justify-content-around " style={{width:"auto"}}>
    <div className="allCard mb-3 ">
    <Row className="d-flex justify-content-center px-2">
            <Col className=" d-flex justify-content-between">
              <div onClick={handleShow} className="d-inline item-delete-edit">ازاله</div>
              <Link to={`/admin/editproductcategories/${item._id}`} style={{ textDecoration: "none" }}>
              <div className="d-inline item-delete-edit">تعديل</div>
              </Link>
            </Col>
          </Row>
          
      <div
        className="categoty-card2"
        style={{ backgroundColor: `${background}` }}></div>{" "}
      <img alt="zcv" src={item.image} className="categoty-card-img2  d-flex justify-content-center" />
      <p className="categoty-card-text my-3" style={{marginRight: "45px"}}>{item.name}</p>
    </div>
  </Col>
      </Col>
     );
  }

export default AdminAllCategoryCard