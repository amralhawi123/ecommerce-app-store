import React from 'react'
import { Row, Col } from "react-bootstrap";
import { useParams } from 'react-router-dom';
import ViewProductDetailsHook from '../../hook/product/view-product-details-hook';
import rate from "../../images/rate.png";
import AddToCartHook from '../../hook/cart/add-to-cart-hook';
import { ToastContainer} from 'react-toastify';
function ProductDescrpton() {

  const {id} = useParams()
  const [item, images, cat, brand, productLike, prod] = ViewProductDetailsHook(id)
  const [ClickColor, indexColor,AddToCartHandle] = AddToCartHook(id, item)

  return (
    <div>
      <Row className="mt-2 mx-2">
        <div className="cat-text">{cat.name} :</div>
      </Row>
      <Row>
        <Col md="8">
          <div className="cat-title d-inline fs-4">
            {item.title} :
            <img src={rate} alt="" height="16px" width="16px" />
            <div className="cat-rate d-inline fs-5">{item.ratingsQuantity}</div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col md="8" className="mt-4">
          <div className="cat-text d-inline">الماركة :</div>
          <div className="barnd-text d-inline mx-1">{brand.name} </div>
        </Col>
      </Row>
      <Row>
        <Col md="8" className="mt-1 d-flex">
          {
            item.availableColors ? (
              item.availableColors.map((color, index)=> {return(
                <div
                key={index}
                onClick={() => ClickColor(index, color)}
                className="color ms-2 "
                style={{ backgroundColor: color, border: indexColor ===index ? '2px solid black':'none' }}></div>
              )})
            ) : null
          }
          <div className="cat-text d-inline">الكمية المتاحه :{item.quantity}</div>
        </Col>
      </Row>

      <Row className="mt-4">
        <div className="cat-text">المواصفات :</div>
      </Row>
      <Row className="mt-2">
        <Col md="10">
          <div className="product-description d-inline">
              {item.description}
          </div>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col md="12">
          <div className="product-price d-inline px-3 py-2 border" style={{textDecorationLine:" line-through"}}>{item.price} جنية</div>
          <div className="product-price d-inline px-3 py-2 border">{item.priceAfterDiscount} جنية</div>
          <div className="product-cart-add px-3 py-2 d-inline mx-3" onClick={AddToCartHandle}>اضف للعربة</div>
        </Col>
      </Row>
      <ToastContainer />
    </div>
  );
}

export default ProductDescrpton