import React from 'react'
import { Row, Col, Container} from 'react-bootstrap';
import { ToastContainer } from "react-toastify"; 
import VeryPasswordHook from '../../hook/auth/verify-password-hook';

const VerifyPasswordPage = () => {

  const [code, onChangeCode, onSubmit]= VeryPasswordHook()
  return (
    <Container style={{minHeight:"570px"}}>
            <Row className="py-5 d-flex justify-content-center ">
        <Col sm="12" className="d-flex flex-column ">
          <label className="mx-auto title-login">ادخل الكود</label>
          <input
          value={code}
          onChange={onChangeCode}
            placeholder="ادخل الكود..."
            type="email"
            className="user-input my-3 text-center mx-auto"
          />
          <button onClick={onSubmit} className="btn-login mx-auto mt-4">تأكيد</button>
        </Col>
      </Row>
      <ToastContainer />
    </Container>
  )
}

export default VerifyPasswordPage
