import useDeleteData from "../../hooks/useDeleteData";
import { useGetData } from "../../hooks/useGetData";
import { usePostDatawithImage } from "../../hooks/usePostData";
import { useUpdateDatawithImage } from "../../hooks/useUpdateData";
import {
  GET_ALL_CATEGOEY,
  GET_ONE_CATEGOEY,
  GET_ERROR,
  CREAT_CATEGOEY,
  DELETE_CATEGORY,
  UPDATE_CATEGORY,
} from "../type";

// get all category
export const getAllCategory = (limit) => async (dispatch) => {
  try {
    const respons = await useGetData(`/api/v1/categories?limit=${limit}`);
    dispatch({
      type: GET_ALL_CATEGOEY,
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

// get all category search
export const getAllCategorySearch = (queryString) => async (dispatch) => {
  try {
    const respons = await useGetData(`/api/v1/categories?${queryString}`);
    dispatch({
      type: GET_ALL_CATEGOEY,
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

// get one category
export const getOneCategory = (id) => async (dispatch) => {
  try {
    const respons = await useGetData(`/api/v1/categories/${id}`);
    dispatch({
      type: GET_ONE_CATEGOEY,
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

// get all category for pagination
export const getAllCategoryPage = (page) => async (dispatch) => {
  try {
    const respons = await useGetData(`/api/v1/categories?limit=6&page=${page}`);
    dispatch({
      type: GET_ALL_CATEGOEY,
      payload: respons,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: "Error " + e,
    });
  }
};

// creat category
export const creatCategory = (formData) => async (dispatch) => {
  try {
    const respons = await usePostDatawithImage(`/api/v1/categories`, formData);
    dispatch({
      type: CREAT_CATEGOEY,
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

// get delete category
export const deleteCategory = (id) => async (dispatch) => {
  try {
    const respons = await useDeleteData(`/api/v1/categories/${id}`);
    dispatch({
      type: DELETE_CATEGORY,
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

// update category
export const updateCategory = (id, data) => async (dispatch) => {
  try {
    const respons = await useUpdateDatawithImage(
      `/api/v1/categories/${id}`,
      data
    );
    dispatch({
      type: UPDATE_CATEGORY,
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
