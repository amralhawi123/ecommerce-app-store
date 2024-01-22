import React from 'react'
import { Col, Row } from 'react-bootstrap'
import ProductGalary from './ProductGalary';
import ProductDescrpton from './../../Componanet/Products/ProductDescrpton';

function ProductDetails({id}) {
   return (
      <div>
         <Row className='py-3'>
            <Col lg="4">
               <ProductGalary id={id}/>
            </Col>
            <Col lg="8">
               <ProductDescrpton id={id}/>
            </Col>
         </Row>
      </div>
   )
}

export default ProductDetails
