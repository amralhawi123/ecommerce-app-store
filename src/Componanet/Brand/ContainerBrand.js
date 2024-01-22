import React from 'react'
import { Container, Row, Spinner } from "react-bootstrap";
import BrandCard from './BrandCard';

function ContainerBrand({loading, data}) {
   return (
      <Container>
      <div className="admin-content-text mt-3">كل الماركات</div>
      <Row className="my-1 d-flex justify-content-between">
      {
               loading === false? (
                  data ? (
                     data.map((item, index) => {
                        return(
                           <BrandCard key={index} img={item.image} />
                        )
                     })
                  ) : <h3>لا يوجد ماركات</h3>
               ) :<Spinner animation="border" variant="primary" />
            }
      </Row>
      </Container>
   )
}

export default ContainerBrand
