import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import AdminSidebar from './../../Componanet/Admin/AdminSidebar'; 
import Pagenation from '../../Componanet/Utilty/Pagenation';   
import ViewBrandAdminHook from '../../hook/admin/view-brand-admin-hook';
import AdminAllBrands from './AdminAllBrands';


function AdminAllBrandsPage() {
   
   const [items, pagination, onPress] = ViewBrandAdminHook()
   if(pagination)
      var pageCount = pagination
   else
         pageCount = 0


   return (
      <Container>
         <Row className="py-3">
            <Col sm="3" xs="2" md="2">
               <AdminSidebar/>
            </Col>
            <Col sm="9" xs="10" md="10">
               <AdminAllBrands brands={items}/>
            </Col>
         </Row> 
                  {
            pageCount > 1 ? (<Pagenation pageCount={pageCount} onPress={onPress}/>) : null
         }
      </Container>
   )
}
export default AdminAllBrandsPage