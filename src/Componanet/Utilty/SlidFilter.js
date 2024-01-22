import React from 'react'
import { Row } from 'react-bootstrap';
import SidebarSearchHook from '../../hook/search/sidebar-search-hook';

function SlidFilter() {

  const [category, brand, ClickCat, ClickBrand, priceFrom, priceTo] = SidebarSearchHook()
let localFrom = localStorage.getItem("priceFrom")
let localTo = localStorage.getItem("priceTo")
   return (
      <div className="mt-3">
        <Row>
          <div className="d-flex flex-column mt-2">
            <div className="filter-title">الفئة</div>
            <div className="d-flex mt-3">
              <input onChange={ClickCat} type="checkbox" value="0" />
              <div className="filter-sub me-2 ">الكل</div>
            </div>

            {
              category ? (
                category.map((item, index) => {
                  return(
                    <div key={index} className="d-flex mt-2">
                    <input onChange={ClickCat} type="checkbox" value={item._id} />
                    <div className="filter-sub me-2 ">{item.name}</div>
                  </div>
                  )
                })
              ) : null
            }
          </div>
  
          <div className="d-flex flex-column mt-2">
            <div className="filter-title mt-3">الماركة</div>
            <div className="d-flex mt-3">
              <input onChange={ClickBrand} type="checkbox" value="0" />
              <div className="filter-sub me-2 ">الكل</div>
            </div>
            
            {
              brand ? (
                brand.map((item, index) => {
                  return(
                    <div key={index} className="d-flex mt-2">
                    <input onChange={ClickBrand} type="checkbox" value={item._id} />
                    <div className="filter-sub me-2 ">{item.name}</div>
                  </div>
                  )
                })
              ) : null
            }
          </div>
  
          <div className="filter-title my-3">السعر</div>
          <div className="d-flex">
            <p className="filter-sub my-2">من:</p>
            <input
            onChange={priceFrom}
            value={localFrom}
              className="m-2 text-center"
              type="number"
              style={{ width: "50px", height: "25px" }}
            />
          </div>
          <div className="d-flex">
            <p className="filter-sub my-2">الي:</p>
            <input
            onChange={priceTo}
            value={localTo}
              className="m-2 text-center"
              type="number"
              style={{ width: "50px", height: "25px" }}
            />
          </div>
        </Row>
      </div>
    );
}

export default SlidFilter
