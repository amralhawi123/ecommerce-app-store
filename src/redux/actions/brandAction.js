import useDeleteData from "../../hooks/useDeleteData";
import { useGetData } from "../../hooks/useGetData";
import { usePostDatawithImage } from "../../hooks/usePostData";
import {
  DELETE_BRAND,
  GET_ALL_BRAND,
  GET_ERROR,
  CREAT_BRAND,
  GET_ONE_BRAND,
} from "../type";

// get all brand
export const getAllBrand = (limit) => async (dispatch) => {
  try {
    const respons = await useGetData(`/api/v1/brands?limit=${limit}`);

    dispatch({
      type: GET_ALL_BRAND,
      payload: respons,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: "Error " + e,
    });
  }
};
// get one brand
export const getOneBrand = (id) => async (dispatch) => {
  try {
    const respons = await useGetData(`/api/v1/brands/${id}`);
    dispatch({
      type: GET_ONE_BRAND,
      payload: respons,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: "Error " + e,
    });
  }
};

// get all brand for pagination
export const getAllBrandPage = (page) => async (dispatch) => {
  try {
    const respons = await useGetData(`/api/v1/brands?limit=6&page=${page}`);

    dispatch({
      type: GET_ALL_BRAND,
      payload: respons,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: "Error " + e,
    });
  }
};

// creat brand
export const creatBrand = (formData) => async (dispatch) => {
  try {
    const respons = await usePostDatawithImage(`/api/v1/brands`, formData);

    dispatch({
      type: CREAT_BRAND,
      payload: respons,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: "Error " + e,
    });
  }
};
// delete brand
export const deleteBrand = (id) => async (dispatch) => {
  try {
    const respons = await useDeleteData(`/api/v1/brands/${id}`);

    dispatch({
      type: DELETE_BRAND,
      payload: respons,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: "Error " + e,
    });
  }
};
