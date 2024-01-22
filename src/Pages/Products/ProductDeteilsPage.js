import React from 'react'
import { Container } from 'react-bootstrap'
import CategoryHeader from '../../Componanet/Catgory/CategoryHeader'
import ProductDetails from './ProductDetails';
import CardProductContainer from './../../Componanet/Products/CardProductContainer';
import RateContainer from './../../Componanet/Rate/RateContainer';
import ViewProductDetailsHook from '../../hook/product/view-product-details-hook';
import { useParams } from 'react-router-dom';

function ProductDeteilsPage() {
   const {id} = useParams()
   const [item, images, cat, brand, productLike, prod] = ViewProductDetailsHook(id)
try {   
   if(prod){
      var items = prod.slice(0,4)
   }
} catch (error) {}
try {   
   if(item){
      var rateAvg = item.ratingsAverage
      var rateQty = item.ratingsQuantity
   }
} catch (error) {}

   return (
      <div>
         <CategoryHeader/>
         <Container>
         <ProductDetails />
            <RateContainer rateAvg={rateAvg} rateQty={rateQty}/>
            <CardProductContainer product={items} title="منتجات قد تعجبك"/>
         </Container>
      </div>
   )
}

export default ProductDeteilsPage
