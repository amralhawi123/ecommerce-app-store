import { useGetData } from "../../hooks/useGetData";
import useDeleteData from "../../hooks/useDeleteData";
import {
  CREAT_PRODUCT,
  UPDATE_PRODUCT,
  GET_ONE_PRODUCT,
  GET_PRODUCT_LIKE,
  GET_ALL_PRODUCT,
  GET_ERROR,
  DELETE_PRODUCT,
  GET_ALL_PRODUCT_CATEGORY
} from "../type";
import { usePostDatawithImage } from "./../../hooks/usePostData";
import { useUpdateDatawithImage } from "./../../hooks/useUpdateData";

// creat product
export const creatProduct = (formData) => async (dispatch) => {
  try {
    const respons = await usePostDatawithImage(`/api/v1/products`, formData);
    console.log(respons.data);
    dispatch({
      type: CREAT_PRODUCT,
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

// get all product
export const getAllProducts = (limit) => async (dispatch) => {
  try {
    const respons = await useGetData(`/api/v1/products?limit=${limit}`);
    
    dispatch({
      type: GET_ALL_PRODUCT,
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

// get all product By Category
export const getAllProductsByCat = (limit, page, catId) => async (dispatch) => {
  try {
    const respons = await useGetData(`/api/v1/products?limit=${limit}&page=${page}&category=${catId}`);
    
    dispatch({
      type: GET_ALL_PRODUCT_CATEGORY,
      payload: respons,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload:  e.respons,
    });
  }
};

// get all product page
export const getAllProductsPage = (page, limit) => async (dispatch) => {
  try {
    const respons = await useGetData(
      `/api/v1/products?page=${page}&limit=${limit}`
    );
    dispatch({
      type: GET_ALL_PRODUCT,
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

// get all product with query string
export const getAllProductSearch = (queryString) => async (dispatch) => {
  try {
    const respons = await useGetData(`/api/v1/products?${queryString}`);
    dispatch({
      type: GET_ALL_PRODUCT,
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
// get one product
export const getOneProduct = (id) => async (dispatch) => {
  try {
    const respons = await useGetData(`/api/v1/products/${id}`);
    dispatch({
      type: GET_ONE_PRODUCT,
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
// get like product
export const getProductLike = (id) => async (dispatch) => {
  try {
    const respons = await useGetData(`/api/v1/products?category=${id}`);
    dispatch({
      type: GET_PRODUCT_LIKE,
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
// get delete product
export const deleteProduct = (id) => async (dispatch) => {
  try {
    const respons = await useDeleteData(`/api/v1/products/${id}`);

    dispatch({
      type: DELETE_PRODUCT,
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
// update  product
export const updateProduct = (id, data) => async (dispatch) => {
  try {
    const respons = await useUpdateDatawithImage(
      `/api/v1/products/${id}`,
      data
    );

    dispatch({
      type: UPDATE_PRODUCT,
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
