import { combineReducers } from "redux";
import CategoryReducer from "./CategoryReducer";
import brandReducer from "./BrandReducer";
import subCategoryReducer from "./dubCategoryReduser";
import productReducer from './productReducer';
import authReducer from "./authReducer";
import reviewReducer from "./reviewReducer";
import addProductToWishList from "./wishListReducer";
import cartReducer from "./cartReducer";
import couponReducer from "./couponReducer";
import addressReducer from "./addressReducer";
import orderCashReducer from "./orderCashReducer";

export default combineReducers({
   allCategory:CategoryReducer,
   allBrand:brandReducer,
   SubCategory:subCategoryReducer,
   allproducts:productReducer,
   authReducer:authReducer,
   reviewReducer:reviewReducer,
   addProductToWishList:addProductToWishList,
   cartReducer:cartReducer,
   couponReducer:couponReducer,
   addressReducer:addressReducer,
   orderCashReducer:orderCashReducer,
})