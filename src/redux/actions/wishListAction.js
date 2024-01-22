import { usePostData } from "../../hooks/usePostData";
import { ADD_TO_WISHLIST, REMOVE_WISHLIST, USER_WISHLIST } from "../type";
import useDeleteData from "../../hooks/useDeleteData";
import { useGetDataWithToken } from "../../hooks/useGetData";

export const addToWWishList = (body) => async (dispatch) => {
  try {
    const response = await usePostData(`/api/v1/wishlist`, body);
    dispatch({
      type: ADD_TO_WISHLIST,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: ADD_TO_WISHLIST,
      payload: e.response,
    });
  }
};
export const removeWishList = (id) => async (dispatch) => {
  try {
    const response = await useDeleteData(`/api/v1/wishlist/${id}`);
    dispatch({
      type: REMOVE_WISHLIST,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: REMOVE_WISHLIST,
      payload: e.response,
    });
  }
};

//get wishlist product 
export const getProductWishList = () => async (dispatch) => {
  try {
      const response = await useGetDataWithToken(`/api/v1/wishlist`);
      dispatch({
          type: USER_WISHLIST,
          payload: response,
          loading: true
      })

  } catch (e) {
      dispatch({
          type: USER_WISHLIST,
          payload: e.response,
      })
  }
}