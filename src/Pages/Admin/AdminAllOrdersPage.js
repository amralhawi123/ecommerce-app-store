import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import AdminSidebar from './../../Componanet/Admin/AdminSidebar';
import AdminAllOrders from './../../Componanet/Admin/AdminAllOrders'; 

function AdminAllOrdersPage() {
   return (
      <Container>
         <Row className="py-3">
            <Col sm="3" xs="2" md="2">
               <AdminSidebar/>
            </Col>
            <Col sm="9" xs="10" md="10">
               <AdminAllOrders/>
            </Col>
         </Row> 
      </Container>
   )
}

export default AdminAllOrdersPage
