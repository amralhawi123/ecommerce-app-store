import React from 'react'
import { Row, Col, Spinner } from 'react-bootstrap';
import UseAddressCard from './UseAddressCard';
import { Link } from 'react-router-dom';
import GetAllAddressHook from '../../hook/user/get-alladdress-hook';

const UserAllAdress = () => {
  const [address] = GetAllAddressHook() 
  return (
    <div>
      <Row>
      <div className="admin-content-text pb-4 mt-3">دفتر العناوين</div>
      {
        address ? (
          address.map((item, index) => {
            return(
              <UseAddressCard key={index} item={item}/>
            )
          })
        )
         : (<Spinner animation="border" variant="primary" />)
      }
      <Row className="justify-content-center">
          <Col sm="5" className="d-flex justify-content-center">
            <Link to="/user/add-address" style={{ textDecoration: "none" }}>
              <button className="btn-add-address">اضافه عنوان جديد</button>
            </Link>
          </Col>
        </Row>
        </Row>
    </div>
  )
}

export default UserAllAdress
