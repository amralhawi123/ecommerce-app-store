import React from "react";
import { Navbar, Nav, Container, FormControl, NavDropdown } from "react-bootstrap";
import logo from "../../images/logo.png";
import login from "../../images/login.png";
import cart from "../../images/cart.png";
import NavbarSearchHook from "../../hook/search/navbar-search-hook";
import { useEffect } from "react";
import { useState } from "react";
import GetallProductCart from "../../hook/cart/get-all-product-cart";
 
function NavBar(){
const [count] =GetallProductCart() 
  const [searchWord, OnChangeSearch] = NavbarSearchHook()
  let word = ""
  if(localStorage.getItem("searchWord") != null){
     word = localStorage.getItem("searchWord")
  }

  const [user, setUser] = useState(' ')
  useEffect(() => { 
    if(localStorage.getItem("userData") != null){
       setUser(JSON.parse(localStorage.getItem("userData")) )
    }
   }, [ ])

  const logOut=()=>{
    localStorage.removeItem("userData")
    localStorage.removeItem("token")
    setUser('')
    window.location.reload()
  }
   return(
      <Navbar className="sticky-top" bg="dark" variant="dark" expand="sm">
      <Container>
        <Navbar.Brand>
          <a href="/">
            <img src={logo} className="logo" alt="sfvs" />
          </a>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <FormControl
          value={word}
          onChange={OnChangeSearch}
            type="search"
            placeholder="ابحث..."
            className="me-2 w-100 text-center"
            aria-label="Search"
          />
          <Nav className="me-auto">
              {user.name? (
                 <NavDropdown title={user.name} id="basic-nav-dropdown">
                 
                 {
                  user.role==="admin"?(<NavDropdown.Item href="/admin/allproducts">لوحة التحكم</NavDropdown.Item> ):(<NavDropdown.Item href="/user/profile">الصفحة الشخصية</NavDropdown.Item> )
                 }
                 <NavDropdown.Divider /> 
                 <NavDropdown.Item onClick={logOut} href="#action/3.3">تسجيل الخروج</NavDropdown.Item>
               </NavDropdown>
              ):(
                  <Nav.Link
                  href="/login"
                  className="nav-text d-flex justify-content-center align-items-center">
                  <img src={login} className="login-img" alt="sfvs" />
    
                  <p style={{ color: "white", margin:"0" }}>دخول</p>
                </Nav.Link>
              )}
            <Nav.Link
              href="/cart"
              className="nav-text"
              style={{ color: "white" }}>
                <div className='d-flex justify-content-center align-items-center position-relative'>
              <img src={cart} className="login-img" alt="sfvs" />
              <p style={{ color: "white", margin:"0" }}>العربه</p>
              <span class="position-absolute top-10 start-100 translate-middle badge rounded-pill bg-danger">
                {count || 0}
              </span>
                </div>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
   )
}
export default NavBar