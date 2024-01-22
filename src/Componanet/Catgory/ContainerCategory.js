import React from 'react'
import CategoryCard from './../Catgory/CategoryCard';
import { Container, Row, Spinner } from "react-bootstrap";

function ContainerCategory({data, loading}) {

 const colors = ["#F4DBA5", "#0034FF", "#FFD3E8", "#55CFDF", "#FF6262", "#F4DBA5", "#0034FF", "#FF6262"]
 
   return (
      <Container>
         <div className="admin-content-text mt-3">كل التصنيفات</div>
      <Row>
      {
            loading === false ? (
            data ? (
               data.map((item) => { 
               return (
               <CategoryCard key={item.id} id={item._id} title={item.name} img={item.image} background={colors[Math.floor(Math.random() * 5)+1]} />
               )})
            ) : <h3>لا يوجد تصنيفات</h3>
            ) :<Spinner animation="border" variant="primary" />
         }
      </Row>
   </Container>
   )
}

export default ContainerCategory
