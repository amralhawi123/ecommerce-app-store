import { useGetDataWithToken } from "../../hooks/useGetData";
import { usePostData } from "../../hooks/usePostData";
import useDeleteData from './../../hooks/useDeleteData';
import { useUpdateData } from './../../hooks/useUpdateData';
import {
    ADD_PRODUCT_TO_CART,
    GET_PRODUCT_CART,
    CLEAR_CART,
    DELETE_ITEM_CART,
    UPDATE_ITEM_CART,
    APPLY_COUPON
} from "../type";

// addProductToCart
export const addProductToCart = (body) => async (dispatch) => {
  try {
    const respons = await usePostData(`/api/v1/cart`, body);
    dispatch({
      type: ADD_PRODUCT_TO_CART,
      payload: respons, 
    });
  } catch (e) {
    dispatch({
      type: ADD_PRODUCT_TO_CART,
      payload: e.respons,
    });
  }
};

// get all Product Cart
export const getAllProductCart = () => async (dispatch) => {
  try {
    const respons = await useGetDataWithToken(`/api/v1/cart`);
    
    dispatch({
      type: GET_PRODUCT_CART,
      payload: respons, 
    });
  } catch (e) {
    dispatch({
      type: GET_PRODUCT_CART,
      payload: e.respons,
    });
  }
};

// delete all Product Cart
export const clearCartItem = () => async (dispatch) => {
  try {
    const respons = await useDeleteData(`/api/v1/cart`);
    
    dispatch({
      type: CLEAR_CART,
      payload: respons, 
    });
  } catch (e) {
    dispatch({
      type: CLEAR_CART,
      payload: e.respons,
    });
  }
};

// delete item from Cart
export const deleteCartItem = (id) => async (dispatch) => {
  try {
    const respons = await useDeleteData(`/api/v1/cart/${id}`);
    
    dispatch({
      type: DELETE_ITEM_CART,
      payload: respons, 
    });
  } catch (e) {
    dispatch({
      type: DELETE_ITEM_CART,
      payload: e.respons,
    });
  }
};

// delete item from Cart
export const updateCartItem = (id, body) => async (dispatch) => {
  try {
    const respons = await useUpdateData(`/api/v1/cart/${id}`, body);
    
    dispatch({
      type: UPDATE_ITEM_CART,
      payload: respons, 
    });
  } catch (e) {
    dispatch({
      type: UPDATE_ITEM_CART,
      payload: e.respons,
    });
  }
};

// apply coupon Cart
export const applyCouponToCart = (body) => async (dispatch) => {
  try {
    const respons = await useUpdateData(`/api/v1/cart/applyCoupon`, body);
    dispatch({
      type: APPLY_COUPON,
      payload: respons, 
    });
  } catch (e) {
    dispatch({
      type: APPLY_COUPON,
      payload: e.respons,
    });
  }
};