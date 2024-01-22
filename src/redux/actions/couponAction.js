
import useDeleteData from "../../hooks/useDeleteData";
import { useGetDataWithToken } from "../../hooks/useGetData";
import { usePostData } from "../../hooks/usePostData";
import { useUpdateData } from './../../hooks/useUpdateData';
import {
    ADD_COUPON,
    GET_ALL_COUPON,
    GET_ERROR,
    DELETE_COUPON,
    GET_ONE_COUPON,
    UPDATE_COUPON
} from "../type";

// add coupon action
export const addCoupon = (body) => async (dispatch) => {
  try {
    const respons = await usePostData(`/api/v1/coupons`, body);
    dispatch({
      type: ADD_COUPON,
      payload: respons, 
    });
  } catch (e) {
    dispatch({
      type: ADD_COUPON,
      payload: e.respons,
    });
  }
};

// view all coupon action
export const getAllCoupons = (body) => async (dispatch) => {
  try {
    const respons = await useGetDataWithToken(`/api/v1/coupons`, body); 
    dispatch({
      type: GET_ALL_COUPON,
      payload: respons, 
    });
  } catch (e) {
    dispatch({
      type: GET_ALL_COUPON,
      payload: e.respons,
    });
  }
};

// get all coupon for pagination
export const getAllCouponPage = (page) => async (dispatch) => {
  try {
    const respons = await useGetDataWithToken(`/api/v1/coupons?limit=2&page=${page}`);
    dispatch({
      type: GET_ALL_COUPON,
      payload: respons,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: "Error " + e,
    });
  }
};

// get one coupon 
export const getOneCoupon = (id) => async (dispatch) => {
  try {
    const respons = await useGetDataWithToken(`/api/v1/coupons/${id}`);
    dispatch({
      type: GET_ONE_COUPON,
      payload: respons,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: "Error " + e,
    });
  }
};

// delete coupon
export const deleteCoupon = (id) => async (dispatch) => {
  try {
    const respons = await useDeleteData(`/api/v1/coupons/${id}`);
    dispatch({
      type: DELETE_COUPON,
      payload: respons,
    });
  } catch (e) {
    dispatch({
      type: DELETE_COUPON,
      payload:  e.respons,
    });
  }
};
// update coupon
export const updateCoupon = (id, body) => async (dispatch) => {
  try {
    const respons = await useUpdateData(`/api/v1/coupons/${id}`, body);
    dispatch({
      type: UPDATE_COUPON,
      payload: respons,
    });
  } catch (e) {
    dispatch({
      type: UPDATE_COUPON,
      payload:  e.respons,
    });
  }
};