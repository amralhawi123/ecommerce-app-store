import React from 'react'
import { Row, Col, Spinner } from "react-bootstrap";
import { ToastContainer} from 'react-toastify'; 
import AdminEditCategoryHook from '../../hook/category/edit-category-hook';
import { useParams } from 'react-router-dom';

const AdminEditCategories = () => {
   const { id } = useParams(); 
    const [img, name,loading, isPresss, onImageChange, handleClick, onChangName] = AdminEditCategoryHook(id)
    return (
       <div>
                <Row className="justify-content-start ">
          <div className="admin-content-text pb-4">اضف تصنيف جديد</div>
          <Col sm="8">
             <div className="text-form pb-2">صوره التصنيف</div>
             
             <div>
                <label for="upload-photo">
                <img src={img} alt="fzx" height="100px" width="120px" style={{cursor:"pointer"}}/>
                </label>
                <input type="file" name="photo"  onChange={onImageChange} id="upload-photo"/>
             </div>
             <input
             onChange={onChangName}
             value={name}
                type="text"
                className="input-form d-block mt-3 px-3"
                placeholder="اسم التصنيف"
             />
          </Col>
          </Row>
          <Row>
          <Col sm="8" className="d-flex justify-content-end ">
             <button onClick={handleClick} className="btn-save d-inline mt-2 ">حفظ التعديلات</button>
          </Col>
          </Row>
          {
             isPresss? loading? <Spinner animation="border" variant="primary" />:<h3>تم الانتهاء</h3>:null
          }
          <ToastContainer />
       </div>
    )
}

export default AdminEditCategories