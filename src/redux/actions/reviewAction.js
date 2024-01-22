import useDeleteData from "../../hooks/useDeleteData";
import { useGetData } from "../../hooks/useGetData";
import { usePostData } from "../../hooks/usePostData";
import { useUpdateData } from "../../hooks/useUpdateData";
import {
  CREAT_REVIEW,
  CET_ALL_REVIEW,
  DELETE_REVIEW,
  EDIT_REVIEW,
} from "../type";

// creat review
export const creatReview = (id, data) => async (dispatch) => {
  try {
    const respons = await usePostData(`/api/v1/products/${id}/reviews`, data);
    dispatch({
      type: CREAT_REVIEW,
      payload: respons,
    });
  } catch (e) {
    dispatch({
      type: CREAT_REVIEW,
      payload: e.response,
    });
  }
};

// get all review
export const getAllReview = (id, page, limit) => async (dispatch) => {
  try {
    const respons = await useGetData(
      `/api/v1/products/${id}/reviews?page=${page}&limit=${limit}`
    );
    dispatch({
      type: CET_ALL_REVIEW,
      payload: respons,
    });
  } catch (e) {
    dispatch({
      type: CET_ALL_REVIEW,
      payload: e.response,
    });
  }
};

// delete review
export const deleteReview = (id) => async (dispatch) => {
  try {
    const respons = await useDeleteData(`/api/v1/reviews/${id}`);
    dispatch({
      type: DELETE_REVIEW,
      payload: respons,
    });
  } catch (e) {
    dispatch({
      type: DELETE_REVIEW,
      payload: e.response,
    });
  }
};

// edit review
export const editReview = (id, body) => async (dispatch) => {
  try {
    const respons = await useUpdateData(`/api/v1/reviews/${id}`, body);
    dispatch({
      type: EDIT_REVIEW,
      payload: respons,
    });
  } catch (e) {
    dispatch({
      type: EDIT_REVIEW,
      payload: e.response,
    });
  }
};
