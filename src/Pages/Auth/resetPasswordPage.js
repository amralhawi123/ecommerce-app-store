import React from 'react'
import { Row, Col, Container} from 'react-bootstrap';
import { ToastContainer } from "react-toastify"; 
import ResetPasswordHook from '../../hook/auth/reset-password-hook';
const ResetPasswordPage = () => {

  const [password, onChangePassword, onSubmit,onChangeConfirmPassword,confirmPassword]= ResetPasswordHook()
  return (
    <Container style={{minHeight:"570px"}}>
            <Row className="py-5 d-flex justify-content-center ">
        <Col sm="12" className="d-flex flex-column ">
          <label className="mx-auto title-login">برجاء ادخال كلمة سر جديدة</label>
          <input
          value={password}
          onChange={onChangePassword}
            placeholder="كلمة السر الجديدة..."
            type="password"
            className="user-input my-2 text-center mx-auto"
          />
          <input
          value={confirmPassword}
          onChange={onChangeConfirmPassword}
            placeholder="تأكيد كلمة السر..."
            type="password"
            className="user-input my-2 text-center mx-auto"
          />
          <button onClick={onSubmit} className="btn-login mx-auto mt-3">حفظ</button>
        </Col>
      </Row>
      <ToastContainer />
    </Container>
  )
}
 
export default ResetPasswordPage
