import React from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import BrandCard from "./BrandCard";
import SubTitle from './../Utilty/SubTitle';
import HomeBrandHook from '../../hook/brand/home-brand-hook';

const BrandFeatured = ({title, btntitle, pathtext}) => {

   
  const [brand, loading] = HomeBrandHook()
   return (
      <div className="my-3">
         <Container>
         <SubTitle title={title} btntitle={btntitle} pathtext="/allbrand"/>
         <Row className="my-1 d-flex justify-content-between">
            {
               loading === false? (
                  brand.data ? (
                     brand.data.slice(0,6).map((item, index) => {
                        return(
                           <BrandCard key={index} img={item.image} />
                        )
                     })
                  ) : <h3>لا يوجد ماركات</h3>
               ) :<Spinner animation="border" variant="primary" />
            }
         </Row>
         </Container>
      </div>
   );
   };
   
export default BrandFeatured;
