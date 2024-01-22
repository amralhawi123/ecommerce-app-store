import { useGetDataWithToken } from "../../hooks/useGetData";
import { usePostData } from "../../hooks/usePostData";
import {GET_ALL_ORDER_CASH, CREATE_ORDER_CASH, GET_ONE_ORDER, CHANGE_ORDER_PAY, CHANGE_ORDER_DELIVER, CREATE_ORDER_CARD } from "../type";
import { useUpdateData } from './../../hooks/useUpdateData';


// create order cash
export const createCashOrder = (id, body) => async (dispatch) => {
  try {
    const respons = await usePostData(`/api/v1/orders/${id}`,body);
    
    dispatch({
      type: CREATE_ORDER_CASH,
      payload: respons,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: CREATE_ORDER_CASH,
      payload:  e.respons,
    });
  }
};

// view all order
export const getAllOrderPayCash = (limit,page) => async (dispatch) => {
  try {
    const respons = await useGetDataWithToken(`/api/v1/orders?limit=${limit}&page=${page}`);
    
    dispatch({
      type: GET_ALL_ORDER_CASH,
      payload: respons,
    });
  } catch (e) {
    dispatch({
      type: GET_ALL_ORDER_CASH,
      payload:  e.respons,
    });
  }
};

// get one  order
export const getOneOrder = (id) => async (dispatch) => {
  try {
    const respons = await useGetDataWithToken(`/api/v1/orders/${id}`);
    
    dispatch({
      type: GET_ONE_ORDER,
      payload: respons,
    });
  } catch (e) {
    dispatch({
      type: GET_ONE_ORDER,
      payload:  e.respons,
    });
  }
};

// update order pay
export const changeOrderPay = (id) => async (dispatch) => {
  try {
    const respons = await useUpdateData(`/api/v1/orders/${id}/pay`);
    
    dispatch({
      type: CHANGE_ORDER_PAY,
      payload: respons,
    });
  } catch (e) {
    dispatch({
      type: CHANGE_ORDER_PAY,
      payload:  e.respons,
    });
  }
};

// update order deliver
export const changeOrderDeliver = (id) => async (dispatch) => {
  try {
    const respons = await useUpdateData(`/api/v1/orders/${id}/deliver`);
    
    dispatch({
      type: CHANGE_ORDER_DELIVER,
      payload: respons,
    });
  } catch (e) {
    dispatch({
      type: CHANGE_ORDER_DELIVER,
      payload:  e.respons,
    });
  }
};

//  order pay card
export const createOrderCARD = (id) => async (dispatch) => {
  try {
    const respons = await useGetDataWithToken(`/api/v1/orders/checkout-session/${id}`);
    console.log(respons)
    dispatch({
      type: CREATE_ORDER_CARD,
      payload: respons,
    });
  } catch (e) {
    dispatch({
      type: CREATE_ORDER_CARD,
      payload:  e.respons,
    });
  }
};
