import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import CartItem from './../../Componanet/Cart/CartItem';
import CartCheckOut from './../../Componanet/Cart/CartCheckOut';
import GetallProductCart from '../../hook/cart/get-all-product-cart';

function CartPage() {
   const [count, cartAllItems,couponName,afterDiscount,cartID] = GetallProductCart()

   return (
      <Container>
         <Row>
            <div className='cart-title mt-4'>عربة التسوق</div>
         </Row>
         <Row className='d-flex justify-content-center'>
            <Col xs='12' md='9'>
            {
               cartAllItems.products ? (
                  cartAllItems.products.map((item, index) => {
                     return (
                        <CartItem item={item} key={index}/>
                     )
                  })
               ) : (<h4>لا توجد منتجات في العربة</h4>)
            }
            </Col>
            <Col xs='6' md='3'>
               <CartCheckOut couponName={couponName} afterDiscount={afterDiscount} cartAllItems={cartAllItems} />
            </Col>
         </Row>
      </Container>
   )
}

export default CartPage
