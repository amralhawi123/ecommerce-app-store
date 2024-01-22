
import { usePostData } from "../../hooks/usePostData";
import { useGetDataWithToken } from "../../hooks/useGetData";
import { ADD_ADDRESS, GET_ALL_ADDRESS,DELETE_ADDRESS,GET_ONE_ADDRESS ,UPDATE_ADDRESS} from "../type";
import useDeleteData from './../../hooks/useDeleteData';
import { useUpdateData } from "../../hooks/useUpdateData";

// add user address
export const addAddress = (body) => async (dispatch) => {
  try {
    const respons = await usePostData(`/api/v1/addresses`, body);
    dispatch({
      type: ADD_ADDRESS,
      payload: respons, 
    });
  } catch (e) {
    dispatch({
      type: ADD_ADDRESS,
      payload: e.respons,
    });
  }
};
// get all user address
export const getAllAddress = () => async (dispatch) => {
  try {
    const respons = await useGetDataWithToken(`/api/v1/addresses`);
    
    dispatch({
      type: GET_ALL_ADDRESS,
      payload: respons, 
    });
  } catch (e) {
    dispatch({
      type: GET_ALL_ADDRESS,
      payload: e.respons,
    });
  }
};

// get one user address
export const getOneAddress = (id) => async (dispatch) => {
  try {
    const respons = await useGetDataWithToken(`/api/v1/addresses/${id}`);
    
    dispatch({
      type: GET_ONE_ADDRESS,
      payload: respons, 
    });
  } catch (e) {
    dispatch({
      type: GET_ONE_ADDRESS,
      payload: e.respons,
    });
  }
};
// get all user address
export const deleteAddress = (id) => async (dispatch) => {
  try {
    const respons = await useDeleteData(`/api/v1/addresses/${id}`);
    dispatch({
      type: DELETE_ADDRESS,
      payload: respons, 
    });
  } catch (e) {
    dispatch({
      type: DELETE_ADDRESS,
      payload: e.respons,
    });
  }
};
// update user address
export const updateAddress = (id, body) => async (dispatch) => {
  try {
    const respons = await useUpdateData(`/api/v1/addresses/${id}`, body);
    dispatch({
      type: UPDATE_ADDRESS,
      payload: respons, 
    });
  } catch (e) {
    dispatch({
      type: UPDATE_ADDRESS,
      payload: e.respons,
    });
  }
};
