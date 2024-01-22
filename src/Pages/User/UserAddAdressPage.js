import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import UserSidebar from '../../Componanet/User/UserSidebar';
import UserAddAdress from './../../Componanet/User/UserAddAdress';

const UserAddAdressPage = () => {
   return (
      <Container>
         <Row className="py-3">
            <Col sm="3" xs="2" md="2">
               <UserSidebar/>
            </Col>
            <Col sm="9" xs="10" md="10">
               <UserAddAdress/>
            </Col>
         </Row>
      </Container>
   )
}

export default UserAddAdressPage
