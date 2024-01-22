import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import CategoryHeader from '../../Componanet/Catgory/CategoryHeader'
import SearchCountResult from './../../Componanet/Utilty/SearchCountResult';
import SlidFilter from './../../Componanet/Utilty/SlidFilter';
import CardProductContainer from './../../Componanet/Products/CardProductContainer';
import Pagenation from '../../Componanet/Utilty/Pagenation';
import ViewSearchProductHook from '../../hook/product/view-search-product-hook';

function ShopProductsPage() {

   const [items, pagination, onPress, getProduct, results] = ViewSearchProductHook()
   if(pagination)
    var pageCount = pagination
    else
         pageCount = 0

         
   return (
      <div >
         <CategoryHeader/>
         <Container>
         <SearchCountResult onClick={getProduct} title={`هناك ${results} نتيجة بحث`}/>
         <Row className='d-flex flex-row'>
            <Col sm="2" xs="2" md="1" className='d-flex'>
               <SlidFilter/>
            </Col>
            <Col sm="10" xs="10" md="11">
               <CardProductContainer product={items} title="" btntitle=""/>
            </Col>
         </Row>
         </Container>
         <Pagenation pageCount={pageCount} onPress={onPress}/>
      </div>
   )
}

export default ShopProductsPage
