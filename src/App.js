import React from 'react';
import HomePages from './Pages/Home/HomePages';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './Componanet/Utilty/NavbarLogin';
import Footer from './Componanet/Utilty/Footer';
import LoginPages from './Pages/Auth/LoginPages';
import RegesterPage from './Pages/Auth/RegesterPage';
import AllCategoryPage from './Pages/Catogery/AllCategoryPage';
import AllBrandPages from './Pages/Brand/AllBrandPages';
import ShopProductsPage from './Pages/Products/ShopProductsPage';
import ProductDeteilsPage from './Pages/Products/ProductDeteilsPage';
import CartPage from './Pages/Cart/CartPage';
import ChoosePayMethodPage from './Pages/Checkout/choosePayMethod';
import AdminAllProductPage from './Pages/Admin/AdminAllProductPage';
import AdminAllOrdersPage from './Pages/Admin/AdminAllOrdersPage';
import AdminOrderDetailsPage from './Pages/Admin/AdminOrderDetailsPage'; 
import AdminAddCategoryPage from './Pages/Admin/AdminAddCategoryPage';
import AdminAddSubCategoryPage from './Pages/Admin/AdminAddSubCategoryPage';
import AdminAddProductsPage from './Pages/Admin/AdminAddProductsPage';
import UserAllOrdersPage from './Pages/User/UserAllOrdersPage';
import UserfavoriteProductsPage from './Pages/User/UserfavoriteProductsPage';
import UserAllAdressPage from './Pages/User/UserAllAdressPage';
import UserAddAdressPage from './Pages/User/UserAddAdressPage';
import UserEditAdressPage from './Pages/User/UserEditAdressPage';
import UserProfilePage from './Pages/User/UserProfilePage';
import AdminEditProductPage from './Pages/Admin/AdminEditProductPage';
import ForgetPasswordPage from './Pages/Auth/forgetPasswordPage';
import VerifyPasswordPage from './Pages/Auth/verifyPasswordPage';
import ResetPasswordPage from './Pages/Auth/resetPasswordPage';
import AdminAllCategoryPage from './Pages/Admin/AdminAllCategoryPage';
import AdminEditCategoryPage from './Pages/Admin/AdminEditCategoryPage';
import AdminAllBrandsPage from './Pages/Admin/AdminAllBrandsPage';
import AdminAddCouponPage from './Pages/Admin/AdminAddCouponPage'; 
import AdminEditCouponPage from './Pages/Admin/AdminEditCouponPage';
import ProtectRoutHook from './hook/auth/protect-rout-hook';
import ProductByCategory from './Pages/Products/ProductByCategory';
import ProtectRoute from './Componanet/Utilty/ProtectRoute';
import AdminAddBrandPage from './Pages/Admin/AdminAddBrandPage';

function App() {
const [isAdmin, isUser] =ProtectRoutHook()

  return (
    <div className='App'>
      <NavBar/>
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePages/>}/>
          <Route path='/login' element={<LoginPages/>}/>
          <Route path='/register' element={<RegesterPage/>}/>
          <Route path='/allcategory' element={<AllCategoryPage/>}/>
          <Route path='/allbrand' element={<AllBrandPages/>}/>
          <Route path='/products' element={<ShopProductsPage/>}/>
          <Route path='/products/:id' element={<ProductDeteilsPage/>}/>
          <Route path='/cart' element={<CartPage/>}/>
          <Route path='/user/forget-password' element={<ForgetPasswordPage/>}/>
          <Route path='/user/verify-code' element={<VerifyPasswordPage/>}/>
          <Route path='/user/reset-password' element={<ResetPasswordPage/>}/>
          <Route path='/product/category/:id' element={<ProductByCategory/>}/>

          <Route element={<ProtectRoute auth={isAdmin}/>}>
          <Route path='/admin/allproducts' element={<AdminAllProductPage/>}/>
          <Route path='/admin/allcategories' element={<AdminAllCategoryPage/>}/>
          <Route path='/admin/allbrands' element={<AdminAllBrandsPage/>}/>
          <Route path='/admin/editproduct/:id' element={<AdminEditProductPage/>}/>
          <Route path='/admin/editproductcategories/:id' element={<AdminEditCategoryPage/>}/>
          <Route path='/admin/allorders' element={<AdminAllOrdersPage/>}/>
          <Route path='/admin/orders/:id' element={<AdminOrderDetailsPage/>}/>
          <Route path='/admin/addbrand' element={<AdminAddBrandPage/>}/>
          <Route path='/admin/addcategory' element={<AdminAddCategoryPage/>}/>
          <Route path='/admin/addsubcategory' element={<AdminAddSubCategoryPage/>}/>
          <Route path='/admin/addcoupon' element={<AdminAddCouponPage/>}/>
          <Route path='/admin/editcoupon/:id' element={<AdminEditCouponPage/>}/>
          <Route path='/admin/addproducts' element={<AdminAddProductsPage/>}/>
          </Route>
          <Route element={<ProtectRoute auth={isUser}/>}>
          <Route path='/user/allorders' element={<UserAllOrdersPage/>}/>
          <Route path='/user/favorite' element={<UserfavoriteProductsPage/>}/>
          <Route path='/user/address' element={<UserAllAdressPage/>}/>
          <Route path='/user/add-address' element={<UserAddAdressPage/>}/>
          <Route path='/user/edit-address/:id' element={<UserEditAdressPage/>}/>
          <Route path='/user/profile' element={<UserProfilePage/>}/>
          <Route path='/order/paymethoud' element={<ChoosePayMethodPage/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
