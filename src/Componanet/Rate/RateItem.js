import React from 'react'
import { Button, Col, Modal, Row } from "react-bootstrap";
import rate from "../../images/rate.png";
import deleteicon from "../../images/delete.png";
import editicon from "../../images/edit.png";
import DeleteRateHook from '../../hook/review/delete-rate-hook';
import { ToastContainer} from 'react-toastify'; 
import EidtRateHook from '../../hook/review/edit-rate-hook';
import ReactStars from "react-rating-stars-component";

function RateItem({item}) {
  const [isUser,handleDelete, showDelete, handleClose, handleShow] = DeleteRateHook(item)
  const [OnChangeRateText,OnChangeRateValue,newRateValue,newRateText, handleEdit, showEdit, handleCloseEdit, handleShowEdit] = EidtRateHook(item)

  const setting = {
    size: 20,
    count: 5,
    color: "#979797",
    activeColor: "#ffc107",
    value: newRateValue,
    a11y: true,
    isHalf: true,
    emptyIcon: <i className="far fa-star" />,
    halfIcon: <i className="fa fa-star-half-alt" />,
    filledIcon: <i className="fa fa-star" />,
    onChange: (newValue) => {
       OnChangeRateValue(newValue)
    },
 };

   return (
      <div>
                <Modal show={showDelete} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title><div className='font'>تأكيد الحذف</div></Modal.Title>
        </Modal.Header>
        <Modal.Body><div className='font'>هل تريد بالتأكيد حذف التقييم؟</div></Modal.Body>
        <Modal.Footer>
          <Button className='font' variant="dark" onClick={handleClose}>
            تراجع
          </Button>
          <Button className='font' variant="danger" onClick={handleDelete}>
            حذف
          </Button>
        </Modal.Footer>
      </Modal>

                <Modal show={showEdit} onHide={handleCloseEdit}>
        <Modal.Header closeButton>
          <Modal.Title><div className='font'>تأكيد تعديل {item.user && item.user.name}</div></Modal.Title>
        </Modal.Header>
        <ReactStars {...setting} />
        <Modal.Body>
            <input type='text'
            value={newRateText} 
            onChange={OnChangeRateText} 
            className='font w-100' 
            style={{border:"none"}}/>
        </Modal.Body>
        <Modal.Footer>
          <Button className='font' variant="dark" onClick={handleCloseEdit}>
            تراجع
          </Button>
          <Button className='font' variant="danger" onClick={handleEdit}>
            تعديل
          </Button>
        </Modal.Footer>
      </Modal>

        <Row className="mt-3">
          <Col className="d-felx me-5">
            <div className="rate-name  d-inline ms-2">{item.user && item.user.name}</div>
            <img className="" src={rate} alt="" height="16px" width="16px" />
            <div className="cat-rate  d-inline  p-1 pt-2">{item.rating}</div>
          </Col>
        </Row>
        <Row className="border-bottom mx-2">
          <Col className="d-flex justify-content-between me-4 pb-2">
            <div className="rate-description  d-inline ms-2">
{item.review}            </div>
{
  isUser === true ? (<div>
    <img src={deleteicon}onClick={handleShow} alt='delete-icon' width='20px' height='20px' style={{cursor:"pointer", margin:"5px"}}/>
    <img src={editicon} onClick={handleShowEdit} alt='delete-icon' width='20px' height='20px' style={{cursor:"pointer", margin:"5px"}}/>
  </div>) : null
}
          </Col>
        </Row>
        <ToastContainer />
      </div>
    );
}

export default RateItem
