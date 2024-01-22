/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { Card, Col } from "react-bootstrap";
import rate from "../../images/rate.png";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import AddToWishListHook from "../../hook/product/add-to-wishList-hook";
import mobile from "../../images/mobile.png";

const ProductCard = ({ item, favProd }) => {
  const [favImg, handleFav] = AddToWishListHook(item, favProd) 
  return (
    <Col xs="6" sm="6" md="4" lg="3" className="d-flex">
      <Card
        className="my-2"
        style={{
          width: "100%",
          height: "95%",
          borderRadius: "8px",
          border: "none",
          backgroundColor: "#FFFFFF",
          boxShadow: "0 2px 2px 0 rgba(151,151,151,0.5)",
        }}
      >
        <Link to={`/products/${item._id}`} style={{ textDecoration: "none" }}>
          <Card.Img
            style={{ height: "240px", width: "100%" }}
            src={item.imageCover.length >= 100 ? item.imageCover : `http://127.0.0.1:8000/products/${item.imageCover || mobile}`}
          />
        </Link>
        <div className="d-flex justify-content-end mx-2">
          <img
            src={favImg}
            alt=""
            className="text-center"
            onClick={handleFav}
            style={{
              height: "20px",
              width: "23px",
              cursor: "pointer",
            }}
          />
        </div>
        <Card.Body>
          <Card.Title>
            <div className="card-title">{item.title}</div>
          </Card.Title>
          <Card.Text>
            <div className="d-flex justify-content-between ">
              <div className="d-flex">
                <img
                  className=""
                  src={rate}
                  alt=""
                  height="16px"
                  width="16px"
                />
                <div className="card-rate mx-2">{item.ratingsAverage || 0}</div>
              </div>
              <div className="d-flex align-items-center justify-content-between w-100">
                <div>
                  <div
                    className="card-price"
                    style={{ textDecorationLine: " line-through" }}
                  >
                    {item.price}
                  </div>
                  <div className="card-currency mx-1">جنيه</div>
                </div>
                <div>
                  <div className="card-price">{item.priceAfterDiscount}</div>
                  <div className="card-currency mx-1">جنيه</div>
                </div>
              </div>
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
      <ToastContainer />
    </Col>
  );
};

export default ProductCard;
