import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import UserSidebar from '../../Componanet/User/UserSidebar';
import UserAllAdress from './../../Componanet/User/UserAllAdress';

const UserAllAdressPage = () => {
   return (
      <Container>
         <Row className="py-3">
            <Col sm="3" xs="2" md="2">
               <UserSidebar/>
            </Col>
            <Col sm="9" xs="10" md="10">
               <UserAllAdress/>
            </Col>
         </Row>
      </Container>
   )
}

export default UserAllAdressPage
