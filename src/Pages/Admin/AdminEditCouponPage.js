import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import AdminSidebar from '../../Componanet/Admin/AdminSidebar';
import AdminEditCoupon from '../../Componanet/Admin/AdminEditCoupon';
 

function AdminEditCouponPage() {
   return (
      <Container>
         <Row className="py-3">
            <Col sm="3" xs="2" md="2">
               <AdminSidebar/>
            </Col>
            <Col sm="9" xs="10" md="10">
               <AdminEditCoupon/>
            </Col>
         </Row>
      </Container>
   )
}

export default AdminEditCouponPage