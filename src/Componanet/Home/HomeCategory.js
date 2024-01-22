import React from 'react'
import SubTitle from './../Utilty/SubTitle';
import CategoryCard from './../Catgory/CategoryCard';
import { Container, Row, Spinner } from "react-bootstrap";
import HomeCategoryHook from '../../hook/category/home-category-hook';

function HomeCategory() {

    const [colors, category, loading] = HomeCategoryHook()

  return ( 
    <Container>
      <SubTitle title="التصنيفات" btntitle="المزيد" pathtext="/allcategory"/>
      <Row>
        {
          loading === false ? (
          category.data ? (
            category.data.slice(0,6).map((item, index) =>(
              <CategoryCard key={index} id={item._id} title={item.name} img={item.image} background={colors[index]} />
            ))
          ) : <h3>لا يوجد تصنيفات</h3>
          ) :<Spinner animation="border" variant="primary" />
        }
        </Row>
    </Container>
  )
}

export default HomeCategory