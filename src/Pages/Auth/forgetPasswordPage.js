import React from 'react'
import { Row, Col, Container} from 'react-bootstrap';
import { ToastContainer } from "react-toastify";
import ForgetPasswordHook from '../../hook/auth/forget-password-hook';

const ForgetPasswordPage = () => {

  const [email, onChangeEmail, onSubmit]= ForgetPasswordHook()
  return (
    <Container style={{minHeight:"570px"}}>
            <Row className="py-5 d-flex justify-content-center ">
        <Col sm="12" className="d-flex flex-column ">
          <label className="mx-auto title-login">نسيت كلمة السر</label>
          <input
          value={email}
          onChange={onChangeEmail}
            placeholder="الايميل..."
            type="email"
            className="user-input my-3 text-center mx-auto"
          />
          <button onClick={onSubmit} className="btn-login mx-auto mt-4">ارسال كود</button>
        </Col>
      </Row>
      <ToastContainer />
    </Container>
  )
}


export default ForgetPasswordPage
