import React from 'react'
import { Container } from 'react-bootstrap';
import ProductCard from './ProductCard';
import SubTitle from './../Utilty/SubTitle';
import { Row } from 'react-bootstrap';
import CardContainerHook from '../../hook/product/card-container-hook';

function CardProductContainer({title, btntitle, pathtext, product}) {
   
const [favProd] = CardContainerHook()
   return (
      <Container>
                  {
            product ? (
               <SubTitle title={title} btntitle={btntitle} pathtext={pathtext}/>
            ): null
         }
      <Row className='my-2 d-flex justify-content-center'>
         {
            product ? (
               product.map((item, index) => <ProductCard favProd={favProd} key={index} item={item}/>)
            ): null
         }
      </Row>
   </Container>
   )
}

export default CardProductContainer
