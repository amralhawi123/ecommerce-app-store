import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import CardProductContainer from '../../Componanet/Products/CardProductContainer'
import Pagenation from '../../Componanet/Utilty/Pagenation' 
import { useParams } from 'react-router-dom';
import ViewAllProductCategory from '../../hook/product/view-all-product-category';

const ProductByCategory = () => {

        const {id} = useParams()
        const [items, pagination,onPress] = ViewAllProductCategory(id)
        
        if(pagination)
        var pageCount = pagination
        else
            pageCount = 0

  return (
    <div > 
    <Container> 
    <Row className='d-flex flex-row'>
       <Col sm="12">
          <CardProductContainer product={items} title="" btntitle=""/>
       </Col>
    </Row>
    </Container>
    <Pagenation pageCount={pageCount} onPress={onPress}/>
 </div>
  )
}

export default ProductByCategory