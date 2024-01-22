import React from 'react' 
import { Row, Spinner } from 'react-bootstrap'; 
import CardProductContainer from '../Products/CardProductContainer';
import GetProductWishHook from '../../hook/user/get-product-wish-Hook';

const UserfavoriteProducts = () => {

const [items] =GetProductWishHook()

  return (
    <div>
         <div className="admin-content-text pb-4">المنتجات المفضلة</div>
         <Row>
          {
            items.length >=1 ? <CardProductContainer product={items} title="" btntitle=""/> : (<Spinner animation="border" variant="primary" />)

          }
         </Row> 
    </div>
  )
}

export default UserfavoriteProducts
