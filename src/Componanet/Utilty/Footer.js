import React from "react";
import { Row } from "react-bootstrap";
import { Container, Col } from "react-bootstrap";
import facebook from "../../images/facebook.png";
import instagram from "../../images/instagram.png";
import twitter from "../../images/twitter.png";
import phone from "../../images/phone.png";
const Footer = () => {
  return (
    <div className="footer-background spec footer  mt-3 pt-2" style={{ maxHeight: "50px" }}>
      <Container className="">
        <Row className="d-flex justify-content-between align-items-center">
          <Col sm="12" className="d-flex align-items-center justify-content-center spec">
          <div className="footer-shroot "> Made By Amr Alhawi</div>
            <div className="d-flex pt-3 mx-2">
              <img width="20px" height="20px" src={phone} alt="" />
              <p className="footer-phone">01061064978</p>
            </div>
            <div style={{ cursor: "pointer" }}>
              <img width="20px" height="20px" src={facebook} alt="" />
            </div>
            <div style={{ cursor: "pointer" }} className="">
              <img width="20px" height="20px" src={instagram} alt="" />
            </div>
            <div style={{ cursor: "pointer" }} className="">
              <img width="20px" height="20px" src={twitter} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
