import React from "react";
import { useParams } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import add from "../../images/add.png";
import Multiselect from "multiselect-react-dropdown";
import { ToastContainer } from "react-toastify";
import { CompactPicker } from "react-color";  
import AdminEditProductHook from "../../hook/product/edit-products-hook";

const AdminEditProducts = () => {
  const { id } = useParams();
  const [img, proName,maxNumber,onImageChange, proDescription, priceAfter, priceBefore, colors,
   qty, options, onSelect, onChangeColor, onChangeDescription, onChangeName, onChangePriceAfter, onChangePriceBefor,
onChangeQualety, onSelectedBrand, onSelectedCategory, category, brand, handelSubmit,
removecolor, handelChangeComplete,onRemove, showColor, catId, brandId
] = AdminEditProductHook(id);

  return (
    <div>
      <Row className="justify-content-start ">
        <div className="admin-content-text pb-4"> تعديل منتج {proName}</div>
        <Col sm="8">
          <div className="text-form pb-2"> صور للمنتج</div>
          <div className="App">
            <div>
              <label htmlFor="upload-photo">
                <img
                  src={img}
                  alt="fzx"
                  height="100px"
                  width="120px"
                  style={{ cursor: "pointer" }}
                />
              </label>
              <input
                type="file"
                name="photo"
                onChange={onImageChange}
                id="upload-photo"
                multiple
              />
            </div>
          </div>

          <input
            value={proName}
            onChange={onChangeName}
            type="text"
            className="input-form d-block mt-3 px-3"
            placeholder="اسم المنتج"
          />
          <textarea
            value={proDescription}
            onChange={onChangeDescription}
            className="input-form-area p-2 mt-3"
            rows="4"
            cols="50"
            placeholder="وصف المنتج"
          />
          <input
            value={priceBefore}
            onChange={onChangePriceBefor}
            type="number"
            className="input-form d-block mt-3 px-3"
            placeholder="السعر قبل الخصم"
          />
          <input
            value={priceAfter}
            onChange={onChangePriceAfter}
            type="number"
            className="input-form d-block mt-3 px-3"
            placeholder="سعر المنتج"
          />
          <input
            value={qty}
            onChange={onChangeQualety}
            type="number"
            className="input-form d-block mt-3 px-3"
            placeholder="الكمية المتاحه"
          />
                    <select
                        name="cat"
                        value={catId}
                        onChange={onSelectedCategory}
                        className="select input-form-area mt-3 px-2 ">
                        <option value="0">التصنيف الرئيسي</option>
                        {
                            category.data ? (category.data.map((item,index) => {
                                return (
                                 <option key={index} value={item._id}>{item.name}</option>
                                )
                            })) : null

                        }
                    </select>

          <Multiselect
            className="mt-2 text-end"
            placeholder="التصنيف الفرعي"
            options={options}
            onSelect={onSelect}
            onRemove={onRemove}
            displayValue="name"
            style={{ color: "red" }}
          />
          <select
            value={brandId}
            name="brand"
            onChange={onSelectedBrand}
            id="brand"
            className="select input-form-area mt-3 px-2 "
          >
            <option value="0">اختر الماركة</option>
            {brand.data
              ? brand.data.map((item, index) => {
                  return (
                    <option key={index} value={item._id}>
                      {item.name}
                    </option>
                  );
                })
              : null}
          </select>
          <div className="text-form mt-3 "> الالوان المتاحه للمنتج</div>
          <div className="mt-1 d-flex">
            {colors.length >= 1
              ? colors.map((color, index) => {
                  return (
                    <div
                      onClick={() => removecolor(color)}
                      key={index}
                      className="color ms-2 border  mt-1"
                      style={{ backgroundColor: color }}
                    ></div>
                  );
                })
              : null}
            <img
              onClick={onChangeColor}
              src={add}
              alt=""
              width="30px"
              height="35px"
              style={{ cursor: "pointer" }}
            />
            {showColor === true ? (
              <CompactPicker onChangeComplete={handelChangeComplete} />
            ) : null}
          </div>
        </Col>
      </Row>
      <Row>
        <Col sm="8" className="d-flex justify-content-end ">
          <button onClick={handelSubmit} className="btn-save d-inline mt-2 ">
            حفظ التعديلات
          </button>
        </Col>
      </Row>
      <ToastContainer />
    </div>
  );
};

export default AdminEditProducts;
