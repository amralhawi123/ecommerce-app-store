import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import rate from "../../images/rate.png";
import RateItem from './RateItem';
import Pagenation from './../Utilty/Pagenation';
import RatePost from './RatePost'; 
import ViewRateHook from '../../hook/review/view-rate-hook';
import { useParams } from 'react-router-dom';

function RateContainer({rateQty, rateAvg}) {
   const {id} = useParams()
   const [items, getPage, pagination, loading] = ViewRateHook(id) 

   return (
      <Container className='rate-container'>
         <Row>
         <Col className="d-flex py-2">
            <div className="sub-tile d-inline p-1 ">التقيمات</div>
            <img className="mt-2" src={rate} alt="" height="16px" width="16px" />
            <div className="cat-rate  d-inline  p-1 pt-2">{rateAvg}</div>
            <div className="rate-count d-inline p-1 pt-2">{`${rateQty} تقييم`}</div>
         </Col>
      </Row>
      <RatePost/>
      {
         loading === false ?(
         items ? (
            items.map((item, index) => {
               return(
                  <RateItem key={index} item={item}/>
               )
            })
         ) : (<h3>لا توجد تقيمات لهذا المنتج</h3>)):null
      }
               {
            pagination > 1 ? (<Pagenation pageCount={pagination} onPress={getPage}/>) : null
         }
      </Container>
   )
}

export default RateContainer
